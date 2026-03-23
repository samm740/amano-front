import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "@/components/atoms/card";
import { cn } from "@/lib/utils";

type ChartProps = {
  data: number[];
  title?: string;
  className?: string;
};

function Chart({ data, title = "Ventas del mes", className }: ChartProps) {
  const chartData = data.map((value, i) => ({
    day: String(i + 1),
    ventas: value,
  }));

  return (
    <Card className={cn("p-6", className)}>
      <h3 className="mb-4 text-sm font-semibold text-[var(--text)]">{title}</h3>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="day" hide />
            <YAxis hide domain={[0, "auto"]} />
            <Tooltip
              formatter={(value) => [`S/ ${Number(value).toLocaleString("es-PE")}`, "Ventas"]}
              labelFormatter={(label) => `Día ${label}`}
              contentStyle={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            />
            <Bar
              dataKey="ventas"
              fill="var(--accent)"
              radius={[4, 4, 0, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-between text-xs text-[var(--text-muted)]">
        <span>1</span>
        <span>{data.length}</span>
      </div>
    </Card>
  );
}

export default Chart;
