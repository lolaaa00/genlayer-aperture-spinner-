import { useId, type CSSProperties, type SVGProps } from "react";
import "./aperture-spinner.css";

export type ApertureSpinnerProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  size?: number | string;
  duration?: string;
  label?: string;
  variant?: "gradient" | "currentColor";
  color?: string;
};

export function ApertureSpinner({ size=24, duration="1.34s", label="Loading", variant="gradient", color="currentColor", style, className, ...props }: ApertureSpinnerProps) {
  const rawId = useId().replace(/:/g, "");
  const gradientId = `aperture-gradient-${rawId}`;
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  const fill = variant === "gradient" ? `url(#${gradientId})` : "currentColor";
  const spinnerStyle = { "--aperture-size": resolvedSize, "--aperture-duration": duration, "--aperture-fill": fill, color, ...style } as CSSProperties;
  return (
    <svg {...props} className={`genlayer-aperture-spinner ${className ?? ""}`.trim()} viewBox="0 0 400 400" role="status" aria-label={label} style={spinnerStyle}>
      {variant === "gradient" && <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8B5CF6"/><stop offset="50%" stopColor="#6366F1"/><stop offset="100%" stopColor="#06B6D4"/></linearGradient></defs>}
      <polygon className="ap-piece ap-left" points="183,33 20,372 179,310 122,279 183,152" />
      <polygon className="ap-piece ap-right" points="218,33 218,151 280,281 222,310 382,373" />
      <polygon className="ap-piece ap-core" points="200,195 166,265 200,283 235,266" />
    </svg>
  );
}
