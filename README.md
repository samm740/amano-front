# Amano Front

Frontend del sistema Amano: gestión de boletas, clientes, ventas y métricas para negocios locales.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **React Router 7**
- **Zustand** (estado)
- **Recharts** (gráficos)
- **React Hook Form** + **Zod**
- **TanStack Query** (planificado)
- **Axios** (planificado)

## Estructura del proyecto

```
src/
├── main.tsx                 # Punto de entrada
├── App.tsx                  # Router y layout principal
├── index.css                # Estilos globales + variables de tema
├── App.css                  # (legacy, revisar si se usa)
│
├── pages/                   # Páginas / rutas
│   ├── login.tsx            # Login (/) 
│   └── dashboard.tsx        # Dashboard (/dashboard)
│
├── components/              # Atomic Design
│   ├── index.tsx            # Barrel principal
│   ├── atoms/               # Elementos base
│   │   ├── btn/             # BtnPrimary, BtnIcon
│   │   ├── card/
│   │   ├── item/
│   │   ├── labels/
│   │   └── logo/
│   ├── molecules/
│   │   ├── chart/           # Gráfico Recharts
│   │   ├── form/loginForm/
│   │   ├── searchBar/
│   │   ├── section/
│   │   └── userMenu/
│   ├── organism/
│   │   ├── cards/
│   │   │   ├── dashboardCard/   # RecentClients, TopProduct
│   │   │   └── metricCards/
│   │   ├── header/
│   │   ├── login/
│   │   ├── metrics/
│   │   └── sidebar/
│   └── template/
│       └── dashboard/       # Layout completo del dashboard
│
├── features/                # Lógica por feature (read-only)
│   └── dashboard/           # Descripción y reglas del feature
│
├── lib/                     # Infraestructura compartida
│   ├── mocks/               # Datos mock
│   │   ├── dashboard.ts
│   │   └── metrics.ts
│   ├── store/               # Stores globales (authStore previsto)
│   ├── types/               # Tipos compartidos
│   └── utils.ts             # cn(), formateo, etc.
│
└── theme/                   # Tema Berry rose
    ├── index.tsx            # useThemeStore, ThemeSync
    ├── lightTheme.tsx
    └── darkTheme.tsx
```

## Cómo trabajar en el proyecto

### Convenciones de componentes

- **Atomic Design**: atoms → molecules → organism → template
- **Índices**: cada carpeta expone su contenido vía `index.tsx`
- **Exports**: `export { default as X } from "./path"` o `export { X } from "./path"`
- **Imports**: usar alias `@/` para rutas absolutas (`@/components/atoms/logo`)
- **Tipos**: interfaces en archivos `.ts` o al final del componente; tipos compartidos en `lib/types`

### Barriles (barrel exports)

- Añadir exports a medida que se creen archivos
- Importar preferentemente desde barriles (`@/components/organism`) en vez de rutas directas

### Estilos y tema

- **Tema**: Berry rose — `#a8001b` (accent), `#ffbacc` (accent-light)
- Usar variables CSS del tema: `var(--text)`, `var(--bg-page)`, `var(--accent)`, etc.
- Tailwind para utilidades; evitar colores hardcodeados en componentes

### Rutas actuales

| Ruta       | Página    |
|-----------|-----------|
| `/`       | Login     |
| `/dashboard` | Dashboard |
| `*`       | Redirect a `/` |

### Reglas por capa

- **`features/`**: lógica de negocio, solo lectura. No muta datos directamente.
- **`lib/types/`**: no importar desde `features/` ni `components/`.
- **`lib/store/`**: solo stores que usen varias features; el tema vive en `theme/`.

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo (localhost:5173)
npm run build    # Build de producción
npm run lint     # ESLint
npm run preview  # Vista previa del build
```

---

## Lo que falta (próximos pasos)

### Infraestructura (`lib/`)

- [ ] `api.client.ts` — instancia de Axios + interceptors
- [ ] `queryClient.ts` — configuración de TanStack Query
- [ ] `router.tsx` — configuración centralizada de React Router (si aplica)
- [ ] `utils.ts` — ampliar con `formatCurrency`, `formatDate`, `getDaysUntilDue`
- [ ] `store/authStore.ts` — sesión de usuario

### Tipos (`lib/types/`)

- [ ] `Boleta` — id, clienteId, productos[], total, saldoPendiente, estado, fechaVencimiento, creadaEn
- [ ] `Cliente` — id, nombre, dni, categoria, creadoEn
- [ ] `EstadoBoleta` — `'pendiente' | 'vencida' | 'cobrada'`
- [ ] `Producto` — descripcion, cantidad, precioUnitario

### Features / UX

- [ ] Conectar botón de tema en Header con `useThemeStore.toggleTheme`
- [ ] Handler de "Cerrar sesión" en UserMenu (redirect a `/`)
- [ ] Protección de rutas (auth guard) para `/dashboard`
- [ ] Unificar tipos duplicados (`RecentClient`, `TopProduct` / `TopProductData`)

### Limpieza

- [ ] Revisar `App.css` — posible CSS muerto de plantilla Vite
- [ ] Usar variable de tema en SearchBar en lugar de `#f3f3f4` hardcodeado
- [ ] Unificar imports en template (Sidebar desde barrel)

---

## Desarrollo local

1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173`
