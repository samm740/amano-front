import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type UserMenuOption = {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "danger";
  onClick?: () => void;
};

type UserMenuProps = {
  userName?: string;
  options: UserMenuOption[];
  className?: string;
};

function UserMenu({ userName = "Usuario", options, className }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const defaultOptions = options;
  const dangerOptions = defaultOptions.filter((o) => o.variant === "danger");
  const normalOptions = defaultOptions.filter((o) => o.variant !== "danger");

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-48 items-center justify-between gap-2 rounded-lg px-4 py-2 text-[var(--text)] transition-colors hover:bg-[var(--accent-bg)]"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white">
            <User className="size-4" />
          </div>
          <span className="hidden text-sm font-medium sm:inline">{userName}</span>
        </div>
        <ChevronDown
          className={cn("size-4 shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-10 mt-1 min-w-48 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] py-1 shadow-[var(--shadow)]">
          {normalOptions.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => {
                opt.onClick?.();
                setOpen(false);
              }}
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[var(--text)] transition-colors hover:bg-[var(--accent-bg)]"
            >
              <opt.icon className="size-4 shrink-0" />
              {opt.label}
            </button>
          ))}
          {dangerOptions.length > 0 && (
            <>
              <div className="my-1 border-t border-[var(--border)]" />
              {dangerOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => {
                    opt.onClick?.();
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[var(--text)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
                >
                  <opt.icon className="size-4 shrink-0" />
                  {opt.label}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default UserMenu;
