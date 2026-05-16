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

1. Crea un nuevo archivo en `lib/proposals/`:

```
lib/proposals/nombre-cliente.config.ts
```

2. Usa esta estructura como base:

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

3. Registra la propuesta en `lib/proposals/index.ts`:

```ts
import miCliente from "./nombre-cliente.config";

const proposals: ProposalConfig[] = [taskrabbitApp, isoDrive, miCliente]; // agrega aquí
```

4. La propuesta estará disponible automáticamente en:

```
/proposals/nombre-cliente
```

La ruta raíz `/` no lista propuestas. En producción solo muestra un mensaje de acceso privado para que los clientes entren usando el link directo recibido.

---

## Flujo recomendado con Proposal Builder

Este proyecto incluye una regla y un skill de Cursor para crear propuestas nuevas sin modificar el template visual:

- Regla del proyecto: `.cursor/rules/proposal-template-maintenance.mdc`
- Skill del proyecto: `.cursor/skills/proposal-builder/SKILL.md`

Usa este flujo cuando quieras crear una propuesta para un nuevo cliente:

1. Reúne la información base del cliente:

```text
Cliente:
Proyecto:
Problema principal:
Contexto del negocio:
Objetivo:
Módulos requeridos:
Timeline:
Stack sugerido:
Precio / paquetes:
Incluye:
No incluye:
CTA / siguiente paso:
Notas:
```

2. Pídele al agente:

```text
Usa proposal-builder para crear una nueva propuesta.
No toques el template salvo que te lo pida.

[Pegar aquí la información del cliente]
```

3. El agente debería:

- Crear un archivo nuevo en `lib/proposals/`.
- Usar un `slug` profesional en formato `kebab-case`.
- Mantener la estructura exacta de `ProposalConfig`.
- Registrar la propuesta en `lib/proposals/index.ts`.
- Preguntar antes de inventar precios, fechas, alcance o promesas.
- Reportar la ruta local final, por ejemplo `/proposals/nombre-cliente`.

4. Revisa la propuesta localmente:

```bash
npm run dev
```

Luego abre:

```text
http://localhost:3000/proposals/nombre-cliente
```

5. Ajusta el contenido si hace falta y sube los cambios a GitHub cuando esté aprobada.

Para propuestas privadas, se recomienda usar slugs no triviales si el link será compartido directamente con cliente, por ejemplo:

```text
/proposals/cliente-plataforma-a8f4k2
```

El acceso actual es privado por enlace: cualquier persona con la URL puede verla. La raíz `/` no muestra el índice de propuestas, pero para información sensible se recomienda agregar protección por contraseña o autenticación.

---

## Panel interno (/admin)

El listado de propuestas quedó movido a `/admin` y está protegido por contraseña.

### 1) Configurar contraseña en local

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
ADMIN_PASSWORD=tu-clave-segura
```

Luego reinicia el servidor de desarrollo.

### 2) Acceder al panel

- URL interna: `http://localhost:3000/admin`
- Ingresa la contraseña configurada en `ADMIN_PASSWORD`.
- Desde ahí puedes abrir cualquier propuesta registrada.

### 3) Configurar en producción (Vercel)

- Ve a `Project Settings` > `Environment Variables`.
- Agrega `ADMIN_PASSWORD` con una clave segura.
- Haz redeploy del proyecto.

Si `ADMIN_PASSWORD` no está definida, `/admin` mostrará un mensaje de configuración pendiente.

---

## Estructura del proyecto

```
proposal-pages/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Pantalla de acceso privado
│   ├── admin/
│   │   └── page.tsx                # Panel interno protegido por contraseña
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

Abre [http://localhost:3000](http://localhost:3000) para ver la pantalla de acceso privado.  
Para revisar propuestas:

- panel interno: `/admin`
- propuesta directa: `/proposals/[slug]`

## Assets de marca

- `public/brand/qubo-icon-purple.png`: icono morado para fondos claros (base `#3E157B`).
- `public/brand/qubo-icon-white.png`: icono blanco para fondos oscuros.
- El componente `components/brand/QuboLogo.tsx` usa estos assets automáticamente con `theme="light"` (morado) y `theme="dark"` (blanco).

## Deploy en Vercel

```bash
vercel deploy
```

O conecta el repositorio directamente en [vercel.com](https://vercel.com).
