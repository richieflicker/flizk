import { useEffect, useState } from "react";
import { dialPhoneNumber, getPhoneNumber } from "../lib/phone";

type ObfuscatedPhoneProps = {
  className?: string;
  placeholder?: string;
};

export function ObfuscatedPhone({
  className,
  placeholder = "Call us",
}: ObfuscatedPhoneProps) {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    setDisplay(getPhoneNumber().display);
  }, []);

  return (
    <button
      type="button"
      onClick={dialPhoneNumber}
      className={className}
      aria-label={display ? `Call ${display}` : "Call Flizk"}
    >
      {display ?? placeholder}
    </button>
  );
}
