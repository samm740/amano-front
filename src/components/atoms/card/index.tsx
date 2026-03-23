import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-[var(--shadow)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
