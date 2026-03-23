import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ItemProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

function Item({ icon: Icon, label, active, onClick, className }: ItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
          active
            ? "bg-[var(--accent-light)]/40 text-[var(--accent)]"
            : "text-[var(--text)] hover:bg-[var(--accent-bg)]",
          className
        )}
      >
        <Icon className="size-4 shrink-0 stroke-[1.5]" />
        <span>{label}</span>
      </button>
    </li>
  );
}

export default Item;
