export type RecentClient = {
  nombre: string;
  gastado: number;
  ultimaCompra: string;
};

export type TopProduct = {
  nombre: string;
  ventas: number;
};

export const MOCK_RECENT_CLIENTS: RecentClient[] = [
  { nombre: "María García", gastado: 2450, ultimaCompra: "15/03/2025" },
  { nombre: "Juan Pérez", gastado: 1820, ultimaCompra: "12/03/2025" },
  { nombre: "Ana López", gastado: 3100, ultimaCompra: "10/03/2025" },
];

export const MOCK_TOP_PRODUCT: TopProduct = {
  nombre: "Producto destacado",
  ventas: 128,
};
