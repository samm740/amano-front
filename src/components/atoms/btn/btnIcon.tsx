import { cn } from "@/lib/utils";

type BtnIconSize = "sm" | "md" | "lg";

const sizeMap: Record<BtnIconSize, string> = {
  sm: "w-8 h-8 min-w-8 min-h-8",
  md: "w-10 h-10 min-w-10 min-h-10",
  lg: "w-12 h-12 min-w-12 min-h-12",
};

type BtnIconProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  children: React.ReactNode;
  size?: BtnIconSize;
  rounded?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost";
};

function BtnIcon({
  children,
  size = "md",
  rounded = "md",
  variant = "outline",
  className,
  type = "button",
  ...props
}: BtnIconProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center p-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50",
        "border border-solid border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        "bg-[var(--card-bg)]",
        variant === "ghost" && "border-transparent",
        sizeMap[size],
        rounded === "sm" && "rounded-md",
        rounded === "md" && "rounded-lg",
        rounded === "lg" && "rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BtnIcon;
