// Shared TypeScript types and enums used across features.
// Core types to define first:
//   Boleta { id, clienteId, productos[], total, saldoPendiente, estado: EstadoBoleta, fechaVencimiento?, creadaEn }
//   Cliente { id, nombre, dni, categoria?, creadoEn }
//   EstadoBoleta = 'pendiente' | 'vencida' | 'cobrada'
//   Producto { descripcion, cantidad, precioUnitario }
// Rule: no imports from features/ or components/ inside this folder.
