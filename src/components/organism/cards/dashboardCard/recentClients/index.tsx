import Card from "@/components/atoms/card";
import { cn } from "@/lib/utils";

export type RecentClient = {
  nombre: string;
  gastado: number;
  ultimaCompra: string;
};

type RecentClientsProps = {
  clients: RecentClient[];
  title?: string;
  className?: string;
};

function RecentClients({
  clients,
  title = "Clientes recientes",
  className,
}: RecentClientsProps) {
  return (
    <div className={cn("flex-1 min-w-0", className)}>
      <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">{title}</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {clients.map((cli, i) => (
          <Card
            key={i}
            className="flex min-h-[120px] flex-col justify-between p-4"
          >
            <p className="truncate font-semibold text-[var(--text)]">
              {cli.nombre}
            </p>
            <p className="mt-1 text-sm font-medium text-[var(--accent)]">
              S/ {cli.gastado.toLocaleString("es-PE")}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Última compra: {cli.ultimaCompra}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecentClients;
