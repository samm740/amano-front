import type { MetricItem } from "@/components/organism/cards/metricCards";
import Chart from "@/components/molecules/chart";
import MetricCards from "@/components/organism/cards/metricCards";
import { cn } from "@/lib/utils";
import { MOCK_CHART_DATA, MOCK_METRICS } from "@/lib/mocks/metrics";

type MetricsProps = {
  chartData?: number[];
  chartTitle?: string;
  metrics?: MetricItem[];
  className?: string;
};

function Metrics({
  chartData = MOCK_CHART_DATA,
  chartTitle = "Ventas del mes",
  metrics = MOCK_METRICS,
  className,
}: MetricsProps) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <Chart data={chartData} title={chartTitle} />
      <MetricCards metrics={metrics} />
    </section>
  );
}

export default Metrics;
