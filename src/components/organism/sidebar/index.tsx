import type { SectionItem } from "@/components/molecules/section";
import Section from "@/components/molecules/section";
import { cn } from "@/lib/utils";

type SidebarProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  className?: string;
};

function Sidebar({ menuItems, miNegocioItems, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex w-56 shrink-0 flex-col gap-6 border-r border-[var(--border)] bg-[var(--card-bg)] px-4 pt-4 pb-6",
        className
      )}
    >
      <div className="flex justify-center">
        <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--accent)]">
          <span className="font-bold text-white">A</span>
        </div>
      </div>

      <Section title="Menu" items={menuItems} />
      <Section title="Mi negocio" items={miNegocioItems} />
    </aside>
  );
}

export default Sidebar;
