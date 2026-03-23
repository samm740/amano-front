import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "px-2 py-2 text-xs",
  md: "px-3 py-3 text-sm",
  lg: "px-4 py-4 text-base",
} as const;

type BtnPrimaryProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: keyof typeof sizeStyles;
};

function BtnPrimary({
  children,
  className,
  type = "button",
  fullWidth = true,
  size = "md",
  disabled,
  ...props
}: BtnPrimaryProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "flex justify-center rounded-md font-semibold text-white shadow-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50",
        "bg-[var(--accent)] hover:bg-[var(--accent-hover)] hover:scale-[1.02] hover:brightness-110 hover:shadow-[var(--accent-glow)]",
        fullWidth && "w-full",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
