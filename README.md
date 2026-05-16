# Proposal Pages

Sistema interno de propuestas de desarrollo de software para clientes. Cada propuesta es una página privada y personalizada generada automáticamente desde un archivo de configuración.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- Deploy en **Vercel**

---

## Cómo agregar una nueva propuesta

1. Creá un nuevo archivo en `lib/proposals/`:

```
lib/proposals/nombre-cliente.config.ts
```

2. Usá esta estructura como base:

```ts
import { ProposalConfig } from "@/lib/types";

const miCliente: ProposalConfig = {
  slug: "nombre-cliente",
  client: "Nombre del Cliente",
  title: "Propuesta de Desarrollo de Software",
  mainProblem: "descripción del problema principal",
  summary: {
    problem: "...",
    solution: "...",
    expectedResult: "...",
  },
  problems: ["Problema 1", "Problema 2"],
  modules: [
    {
      title: "Módulo X",
      description: "Descripción del módulo.",
      impact: "Impacto operacional del módulo.",
    },
  ],
  timeline: [
    { label: "Semana 1", title: "Discovery", description: "..." },
  ],
  stack: ["Next.js", "Node.js", "PostgreSQL"],
  methodology: ["Sprints de 2 semanas", "Demos al cierre de sprint"],
  pricing: [
    {
      name: "MVP",
      price: "USD 10,000",
      description: "Versión inicial funcional.",
      featured: true,
    },
  ],
  includes: ["Diseño UX/UI", "Desarrollo", "QA"],
  notIncluded: ["Marketing", "Infraestructura cloud"],
  cta: {
    title: "¿Siguiente paso?",
    description: "Agendemos kickoff.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar kickoff",
  },
};

export default miCliente;
```

3. Registrá la propuesta en `lib/proposals/index.ts`:

```ts
import miCliente from "./nombre-cliente.config";

const proposals: ProposalConfig[] = [taskrabbitApp, isoDrive, miCliente]; // ← agregá aquí
```

4. La propuesta estará disponible automáticamente en:

```
/proposals/nombre-cliente
```

---

## Estructura del proyecto

```
proposal-pages/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Índice interno de propuestas
│   ├── not-found.tsx               # Página 404
│   └── proposals/
│       └── [slug]/
│           └── page.tsx            # Ruta dinámica de cada propuesta
│
├── components/
│   └── proposal/
│       ├── ProposalHero.tsx
│       ├── ExecutiveSummary.tsx
│       ├── ProblemCards.tsx
│       ├── SolutionModules.tsx
│       ├── Timeline.tsx
│       ├── StackSection.tsx
│       ├── PricingCards.tsx
│       ├── IncludesChecklist.tsx
│       ├── ExclusionsChecklist.tsx
│       └── FinalCTA.tsx
│
├── lib/
│   ├── types.ts                    # Tipos TypeScript para ProposalConfig
│   └── proposals/
│       ├── index.ts                # Registry + helpers
│       ├── taskrabbit-app.config.ts
│       └── iso-drive.config.ts
```

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el índice de propuestas.

## Assets de marca

- `public/brand/qubo-icon-purple.png`: icono morado para fondos claros (base `#3E157B`).
- `public/brand/qubo-icon-white.png`: icono blanco para fondos oscuros.
- El componente `components/brand/QuboLogo.tsx` usa estos assets automáticamente con `theme="light"` (morado) y `theme="dark"` (blanco).

## Deploy en Vercel

```bash
vercel deploy
```

O conectá el repositorio directamente en [vercel.com](https://vercel.com).
