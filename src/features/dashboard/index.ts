// Feature: Dashboard
// Owns the metrics panel: MetricsWidget (weekly/monthly revenue), AlertasVencidas (overdue boletas), ClientesFrecuentes.
// All data is derived — no direct mutations happen here, only reads via useDashboard.ts.
// Rule: dashboard is read-only. It queries, it does not write.
