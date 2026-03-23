import { Package } from "lucide-react";
import Card from "@/components/atoms/card";
import { cn } from "@/lib/utils";

export type TopProductData = {
  nombre: string;
  ventas: number;
};

type TopProductProps = {
  product: TopProductData;
  title?: string;
  className?: string;
};

function TopProduct({
  product,
  title = "Producto más vendido",
  className,
}: TopProductProps) {
  return (
    <div className={cn("flex-1 min-w-0 lg:max-w-md", className)}>
      <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">{title}</h3>
      <Card className="flex min-h-[120px] items-center p-4">
        <div className="flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)]/50 text-[var(--accent)]">
            <Package className="size-8" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-[var(--text)]">{product.nombre}</p>
            <p className="text-sm text-[var(--text-muted)]">
              {product.ventas} ventas este mes
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TopProduct;
