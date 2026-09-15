import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-150 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-accent-red text-white shadow-lg shadow-accent-red/30 hover:bg-accent-red/90",
  secondary:
    "border border-white/30 text-white hover:bg-white/10",
};

export default function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const className = `${base} ${variants[variant]} ${props.className ?? ""}`;

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, ...rest } = props;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={className}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {props.children}
      </Link>
    );
  }

  const { variant: _v2, className: _c2, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  );
}
