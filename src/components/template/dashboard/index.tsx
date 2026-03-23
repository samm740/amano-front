import type { SectionItem } from "@/components/molecules/section";
import type { MetricItem } from "@/components/organism/cards/metricCards";
import type { RecentClient } from "@/components/organism/cards/dashboardCard/recentClients";
import type { TopProductData } from "@/components/organism/cards/dashboardCard/topProduct";
import { Header, Metrics } from "@/components/organism";
import { RecentClients, TopProduct } from "@/components/organism/cards/dashboardCard";
import Sidebar from "@/components/organism/sidebar";

export type DashboardTemplateProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  chartData?: number[];
  chartTitle?: string;
  metrics?: MetricItem[];
  recentClients?: RecentClient[];
  topProduct?: TopProductData;
};

function DashboardTemplate({
  menuItems,
  miNegocioItems,
  chartData,
  chartTitle,
  metrics,
  recentClients = [],
  topProduct,
}: DashboardTemplateProps) {
  return (
    <div className="flex min-h-dvh bg-[var(--bg-page)]">
      <Sidebar menuItems={menuItems} miNegocioItems={miNegocioItems} />

      <div className="flex flex-1 flex-col min-w-0">
        <Header />

        <div className="flex-1 overflow-auto bg-[var(--bg-page)] p-6">
          <Metrics chartData={chartData} chartTitle={chartTitle} metrics={metrics} />

          <main className="mt-6 flex flex-col gap-6 lg:flex-row">
            <RecentClients clients={recentClients} />
            {topProduct && <TopProduct product={topProduct} />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardTemplate;
