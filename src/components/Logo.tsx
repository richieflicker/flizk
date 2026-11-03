import Image from "next/image";

const LOGO_DIMENSIONS = {
  flizk: { logo: { width: 680, height: 288 }, mark: { width: 400, height: 400 } },
  dentxone: { logo: { width: 1120, height: 344 }, mark: { width: 400, height: 400 } },
} as const;

const LOGO_ALT = {
  flizk: { logo: "Flizk", mark: "Flizk" },
  dentxone: { logo: "DentXOne by Flizk", mark: "DentXOne" },
} as const;

type LogoProps = {
  brand: "flizk" | "dentxone";
  variant?: "logo" | "mark";
  theme?: "light" | "dark";
  className?: string;
};

export function Logo({ brand, variant = "logo", theme = "light", className }: LogoProps) {
  const suffix = theme === "dark" ? "-dark" : "";
  const src = `/brand/${brand}-${variant}${suffix}.svg`;
  const { width, height } = LOGO_DIMENSIONS[brand][variant];

  return (
    <Image
      src={src}
      alt={LOGO_ALT[brand][variant]}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
