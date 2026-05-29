import { ProposalConfig } from "@/lib/types";

const importadoraAltamiraControlInventario: ProposalConfig = {
  slug: "importadora-altamira-control-inventario",
  client: "Importadora Altamira",
  title: "Plataforma de Control Operacional + Integración Softland",
  mainProblem:
    "descuadres de inventario entre planta y frigorífico, reprocesos sin cierre y poca visibilidad diaria de costos, con la necesidad de mantener Softland y mejorar el control operativo.",
  summary: {
    problem:
      "Hoy existen diferencias recurrentes de inventario por movimientos incompletos o mal registrados, lo que impacta el control de mermas y dificulta tomar decisiones con confianza.",
    solution:
      "Implementar una plataforma web enfocada en operación diaria: registro ordenado de movimientos, control de reproceso, conciliación planta vs frigorífico y conexión inicial con Softland.",
    expectedResult:
      "Menos diferencias de inventario, mayor trazabilidad, visibilidad diaria para gerencia y una base sólida para escalar la solución por etapas.",
  },
  problems: [
    "Diferencias recurrentes entre inventario de bodega PT (planta) y stock del frigorífico",
    "Reproceso y retornos desde frigorífico a producción quedan “pegados” o mal informados",
    "Falta de visibilidad diaria de compras, producción, stock acumulado y mermas",
    "Dificultad para estimar costo de producción y costo promedio de inventario en forma confiable",
    "Dependencia de Softland (ERP rígido) sin un puente operativo-contable robusto",
  ],
  modules: [
    {
      title: "Control de bodegas y movimientos",
      description:
        "Definición de bodegas por etapa y registro claro de entradas, salidas, traslados y ajustes para reflejar la operación real día a día.",
      impact:
        "Reduce errores de registro y mejora la trazabilidad del inventario.",
    },
    {
      title: "Reproceso con cierre operativo",
      description:
        "Control completo del reproceso (ida, vuelta y cierre), con alertas cuando existan pendientes o inconsistencias.",
      impact:
        "Evita pérdidas por reproceso mal registrado y mejora la disciplina operativa.",
    },
    {
      title: "Conciliación planta vs frigorífico",
      description:
        "Comparación diaria y semanal entre inventario interno y frigorífico, con reporte de diferencias y guía de regularización.",
      impact:
        "Disminuye tiempos de cierre mensual y entrega control diario de desbalances.",
    },
    {
      title: "Dashboard operativo diario",
      description:
        "Panel diario con compras, stock por bodega, producción, merma y pendientes, con exportación simple de reportes.",
      impact:
        "Mejora la toma de decisiones y permite seguimiento en tiempo real durante temporada.",
    },
    {
      title: "Costeo diario preliminar (v1 de gestión)",
      description:
        "Cálculo diario del costo de producción y costo promedio básico de inventario para apoyar decisiones operativas y de gestión.",
      impact:
        "Entrega el “feeling diario” de costo que pidió gerencia, sin esperar a una fase posterior.",
    },
    {
      title: "Integración Softland v1 (obligatoria)",
      description:
        "Conexión inicial con Softland para alinear la información clave entre operación y administración.",
      impact:
        "Alinea operación con ERP sin forzar un cambio de plataforma en esta etapa.",
    },
    {
      title: "Perfiles y control de cambios",
      description:
        "Accesos por rol (producción, administración y gerencia) y registro de cambios para mayor control interno.",
      impact:
        "Aumenta control, auditabilidad y adopción por usuarios reales.",
    },
  ],
  timeline: [
    {
      label: "Sprint 1 (Semanas 1-2)",
      title: "Discovery + diseño operativo",
      description:
        "Relevamiento del proceso actual, definición de prioridades y plan de trabajo validado con el equipo del cliente.",
    },
    {
      label: "Sprint 2 (Semanas 3-4)",
      title: "Inventario base + tablero inicial",
      description:
        "Implementación del control de inventario base y primer tablero diario para visualizar stock y producción.",
    },
    {
      label: "Sprint 3 (Semanas 5-6)",
      title: "Reproceso + conciliación frigorífico",
      description:
        "Implementación del reproceso con cierre y conciliación con frigorífico, incluyendo alertas de diferencias y pendientes.",
    },
    {
      label: "Sprint 4 (Semanas 7-8)",
      title: "Integración Softland v1",
      description:
        "Conexión inicial con Softland para ordenar el cruce entre información operativa y administrativa.",
    },
    {
      label: "Sprint 5 (Semanas 9-10)",
      title: "Costeo diario + validación final + salida en vivo",
      description:
        "Activación de costeo diario y costo promedio básico. Validación con usuarios reales, ajustes finales, capacitación y salida a producción.",
    },
  ],
  stack: [
    "Frontend: Next.js (web responsive) + TypeScript",
    "Backend: Node.js (API) + TypeScript",
    "Base de datos: PostgreSQL",
    "Integración Softland v1: API / archivos / DB (según factibilidad)",
    "Infra (opción Lean): Supabase (Postgres administrado) + Vercel (web) + hosting backend por definir",
    "Infra (opción Enterprise): AWS o Azure (Postgres administrado) + CI/CD + observabilidad por definir",
  ],
  methodology: [
    "Trabajo por etapas de 2 semanas con avances visibles",
    "Revisión semanal con usuarios clave del cliente",
    "Pruebas en cada etapa para reducir riesgos de salida",
    "Validación final con usuarios reales antes de salir en vivo",
    "Prioridad en resolver lo crítico primero y escalar por fases",
  ],
  pricing: [
    {
      name: "Opción A — Núcleo Operativo + Softland v1 + costeo diario",
      price: "USD 5,000",
      description:
        "Opción recomendada para ordenar la operación diaria, reducir diferencias de inventario y contar con costo de producción diario antes de temporada.\n\n**Mantención mensual opcional:** USD 200 / mes para soporte, ajustes menores y acompañamiento.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Control de movimientos por bodega",
        "Reproceso con alertas y cierre",
        "Conciliación planta vs frigorífico",
        "Tablero diario de compras, stock, producción y merma",
        "Conexión inicial con Softland",
        "Costeo diario básico para gestión",
      ],
      featured: true,
    },
    {
      name: "Opción B — A + Costeo + Softland v2",
      price: "USD 7,000",
      description:
        "Incluye todo lo de la Opción A y suma una capa de costos más completa para fortalecer el control y el análisis del negocio.\n\n**Estabilización incluida:** 1 mes posterior a la salida en vivo.\n**Mantención mensual opcional:** USD 450 / mes.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Todo lo incluido en Opción A",
        "Costeo avanzado y mejor alineación contable",
        "Costo promedio ponderado con reglas ampliadas",
        "Reportes de costo vs rendimiento",
        "Conexión Softland v2 con mayor automatización",
      ],
      featured: false,
    },
    {
      name: "Opción C — B + BI ejecutivo + mejoras mobile/UX",
      price: "USD 10,000",
      description:
        "Incluye todo lo de la Opción B y agrega una capa ejecutiva para escalar la operación con mayor visibilidad y control.\n\n**Estabilización incluida:** 2 meses posteriores a la salida en vivo.\n**Mantención mensual opcional:** USD 750 / mes.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Todo lo incluido en Opción B",
        "Reportería ejecutiva ampliada",
        "Auditoría y trazabilidad extendida",
        "Mejoras de experiencia para usuarios",
        "Evolución a versión móvil según prioridad",
      ],
    },
  ],
  includes: [
    "Relevamiento inicial y definición de alcance junto al equipo del cliente.",
    "Implementación por etapas con avances visibles cada 2 semanas.",
    "Capacitación a usuarios clave y acompañamiento en la salida en vivo.",
    "Pruebas funcionales durante el proyecto y validación final con usuarios reales.",
    "Documentación operativa básica para uso diario del sistema.",
    "Soporte de estabilización incluido según la opción elegida.",
  ],
  notIncluded: [
    "Reemplazo total de Softland (cambio de ERP)",
    "Costeo avanzado completo con reglas contables ampliadas (incluido en Opción B)",
    "Infraestructura cloud y costos de terceros (hosting, BD, licencias)",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Agendemos un kickoff para validar flujos (bodegas, reproceso, frigorífico), definir el alcance exacto de Softland v1 y dejar el backlog del Sprint 1 listo para iniciar en junio.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar kickoff",
  },
};

export default importadoraAltamiraControlInventario;

