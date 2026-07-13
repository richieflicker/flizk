"use client";
import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  CONTACT_INTENT_MESSAGES,
  parseContactIntent,
  type ContactIntent,
} from "@/lib/cta";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

const INTENT_LABELS: Record<ContactIntent, string> = {
  demo: "Book a Demo",
  trial: "Start Free Trial",
  enterprise: "Enterprise / Sales Inquiry",
  general: "General Inquiry",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = useMemo(
    () => parseContactIntent(searchParams.toString()),
    [searchParams],
  );

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please set NEXT_PUBLIC_FORMSPREE_FORM_ID.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Unable to send your message. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your message. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent</h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="intent" value={intent} />
      <input type="hidden" name="_subject" value={`Flizk contact: ${INTENT_LABELS[intent]}`} />

      {intent !== "general" && (
        <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
          You&apos;re contacting us about: <strong>{INTENT_LABELS[intent]}</strong>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
            required
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
            required
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
          required
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700 mb-2">
          Clinic Name
        </label>
        <Input
          id="clinicName"
          name="clinicName"
          type="text"
          placeholder="Your Dental Clinic"
          className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          How can we help? *
        </label>
        <Textarea
          id="message"
          name="message"
          key={intent}
          defaultValue={CONTACT_INTENT_MESSAGES[intent]}
          placeholder="Tell us about your clinic and what you're looking for..."
          rows={6}
          className="w-full bg-gray-50 border-gray-200 focus:border-[#1E4ED8] focus:ring-[#1E4ED8]"
          required
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        className="w-full bg-[#1E4ED8] hover:bg-[#1a42b8] text-white py-6 text-lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy" className="text-[#1E4ED8] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
