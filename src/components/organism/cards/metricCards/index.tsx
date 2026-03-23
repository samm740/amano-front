import Card from "@/components/atoms/card";
import { cn } from "@/lib/utils";

export type MetricItem = {
  title: string;
  value: string;
  subtitle?: string;
};

type MetricCardsProps = {
  metrics: MetricItem[];
  className?: string;
};

function MetricCards({ metrics, className }: MetricCardsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {metrics.map((m, i) => (
        <Card key={i}>
          <p className="text-xs font-medium text-[var(--text-muted)]">{m.title}</p>
          <p className="mt-1 text-2xl font-bold text-[var(--text)]">{m.value}</p>
          {m.subtitle && (
            <p className="mt-0.5 text-sm text-[var(--text-muted)]">{m.subtitle}</p>
          )}
        </Card>
      ))}
    </div>
  );
}

export default MetricCards;
