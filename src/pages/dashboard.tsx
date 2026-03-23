import {
  Home,
  TrendingUp,
  FileText,
  Users,
  Bell,
  Ban,
  Package,
  ShoppingCart,
  PackageCheck,
  History,
} from "lucide-react";
import { DashboardTemplate } from "@/components/template";
import {
  MOCK_CHART_DATA,
  MOCK_METRICS,
} from "@/lib/mocks/metrics";
import {
  MOCK_RECENT_CLIENTS,
  MOCK_TOP_PRODUCT,
} from "@/lib/mocks/dashboard";

const MAIN_MENU = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Rendimiento", icon: TrendingUp },
  { label: "Boletas", icon: FileText },
  { label: "Clientes", icon: Users },
  { label: "Notificaciones", icon: Bell },
  { label: "Lista negra", icon: Ban },
];

const MI_NEGOCIO = [
  { label: "Productos", icon: Package },
  { label: "Ventas", icon: ShoppingCart },
  { label: "Stock", icon: PackageCheck },
  { label: "Historial", icon: History },
];

export default function DashboardPage() {
  return (
    <DashboardTemplate
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO}
      chartData={MOCK_CHART_DATA}
      chartTitle="Ventas del mes"
      metrics={MOCK_METRICS}
      recentClients={MOCK_RECENT_CLIENTS}
      topProduct={MOCK_TOP_PRODUCT}
    />
  );
}
