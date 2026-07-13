export const CTA_PATHS = {
  demo: "/contact?intent=demo",
  trial: "/contact?intent=trial",
  enterprise: "/contact?intent=enterprise",
  contact: "/contact",
  dentxone: "/products/dentxone",
  pricing: "/pricing",
} as const;

export type ContactIntent = "demo" | "trial" | "enterprise" | "general";

export const CONTACT_INTENT_MESSAGES: Record<ContactIntent, string> = {
  demo: "I'd like to book a demo of DentXOne for my dental clinic.",
  trial: "I'd like to start a free trial of DentXOne.",
  enterprise: "I'm interested in the Enterprise plan for a multi-clinic setup.",
  general: "",
};

export function parseContactIntent(search: string): ContactIntent {
  const intent = new URLSearchParams(search).get("intent");
  if (intent === "demo" || intent === "trial" || intent === "enterprise") {
    return intent;
  }
  return "general";
}
