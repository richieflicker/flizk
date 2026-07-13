import Link from "next/link";
import { Button } from "./ui/button";
import type { ComponentProps } from "react";

type CTAButtonProps = ComponentProps<typeof Button> & {
  href: string;
};

export function CTAButton({ href, children, ...props }: CTAButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
