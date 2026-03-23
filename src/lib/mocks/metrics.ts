import type { MetricItem } from "@/components/organism/cards/metricCards";

export const MOCK_METRICS: MetricItem[] = [
  {
    title: "Rendimiento",
    value: "39%",
    subtitle: "vs 47% mes anterior",
  },
  {
    title: "Meta mensual",
    value: "S/ 8.450 / 12.000",
    subtitle: "70% alcanzado",
  },
  {
    title: "Boletas completadas",
    value: "128",
    subtitle: "de 150 este mes",
  },
  {
    title: "Total ventas",
    value: "S/ 9.820",
    subtitle: "este mes",
  },
];

/** Ventas diarias del mes (31 días) en soles — total ≈ S/ 9.820 */
export const MOCK_CHART_DATA = [
  285, 312, 198, 345, 420, 268, 380, 395, 310, 355, 412, 288, 275, 398, 445,
  362, 298, 335, 410, 255, 320, 385, 430, 265, 340, 402, 318, 370, 242, 418, 365,
];
