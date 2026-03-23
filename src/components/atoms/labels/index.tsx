import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LabelFieldProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
  labelClassName?: string;
  error?: boolean;
};

const LabelField = forwardRef<HTMLInputElement, LabelFieldProps>(
  ({ id, label, labelClassName, error = false, className, ...props }, ref) => (
    <div>
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-medium leading-6 text-[var(--text)]",
          labelClassName
        )}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          id={id}
          className={cn(
            "block w-full rounded-lg border bg-[var(--card-bg)] px-3 py-2 text-[var(--text)] shadow-sm outline-none transition-colors placeholder:text-[var(--text-muted)]/70",
            "border-[var(--border)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)] focus:border-[var(--accent)]",
            error && "border-red-500 focus:outline-red-500",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
);

LabelField.displayName = "LabelField";

export default LabelField;
