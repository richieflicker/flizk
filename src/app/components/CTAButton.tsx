import { Link } from "react-router";
import { Button } from "./ui/button";
import type { ComponentProps } from "react";

type CTAButtonProps = ComponentProps<typeof Button> & {
  to: string;
};

export function CTAButton({ to, children, ...props }: CTAButtonProps) {
  return (
    <Button asChild {...props}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
