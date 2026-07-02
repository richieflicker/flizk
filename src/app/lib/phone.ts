type PhoneParts = {
  e164: string;
  display: string;
};

// Digit groups stored out of order — no plain phone string in HTML or static markup.
const SEGMENTS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 0],
  [9, 1],
] as const;
const ORDER = [3, 0, 1, 2] as const;
const DIGIT_OFFSET = 48;

function decodeSegments(): string {
  return ORDER.map((index) =>
    SEGMENTS[index].map((digit) => String.fromCharCode(digit + DIGIT_OFFSET)).join(""),
  ).join("");
}

let cached: PhoneParts | null = null;

export function getPhoneNumber(): PhoneParts {
  if (cached) return cached;

  const digits = decodeSegments();
  cached = {
    e164: `+${digits}`,
    display: `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`,
  };

  return cached;
}

export function dialPhoneNumber(): void {
  window.location.href = `tel:${getPhoneNumber().e164}`;
}
