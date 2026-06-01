import { ProposalConfig } from "@/lib/types";

const importadoraAltamiraControlInventario: ProposalConfig = {
  slug: "importadora-altamira-control-inventario",
  client: "Importadora Altamira",
  title: "Plataforma de Control Operacional + Integración Softland",
  mainProblem:
    "descuadres de inventario entre planta y frigorífico, reprocesos sin cierre, trazabilidad incompleta a nivel de caja/lote, procesos de calidad manuales y poca visibilidad diaria de costos, con necesidad de unificar operación y contabilidad sin reemplazar Softland de inmediato.",
  summary: {
    problem:
      "Hoy existen diferencias recurrentes de inventario, trazabilidad limitada desde recepción hasta producto terminado (incluyendo ramificación a PT, descarte y jugo), y liberación de pallets dependiente de cruces manuales entre calidad, microbiología y químicos.",
    solution:
      "Implementar una plataforma unificada por fases: operación diaria (movimientos, reproceso, conciliación, calidad básica y trazabilidad), integración con Softland y sistema de producción actual, y evolución a costeo avanzado, packing lists y tableros financieros según la opción elegida.",
    expectedResult:
      "Menos diferencias de inventario, trazabilidad hasta caja, visibilidad diaria para planta y gerencia, liberación más ágil de producto y una base para escalar por etapas antes de la próxima temporada.",
  },
  problems: [
    "Diferencias recurrentes entre inventario de bodega PT (planta) y stock del frigorífico",
    "Reproceso y retornos desde frigorífico a producción quedan “pegados” o mal informados",
    "Trazabilidad insuficiente: un lote de recepción se ramifica en varios productos y no siempre se puede rastrear hasta la caja",
    "Calidad y liberación de pallets dependen de cruces manuales (visual, microbiología, químicos) y armado de packing lists en Excel",
    "Falta de visibilidad diaria de compras, producción, stock, mermas y costo de fabricación por turno/variedad",
    "Información operativa y financiera dispersa entre sistema de producción, Softland y planillas",
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
      title: "Trazabilidad por lote y caja (ramificación)",
      description:
        "Seguimiento desde recepción de materia prima (lote, productor, fecha) hasta producto terminado, descarte o jugo, con consulta por código de caja o pallet.",
      impact:
        "Permite responder con precisión qué fruta, lote y proceso originó cada unidad comercializada o exportada.",
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
      title: "Calidad y liberación de pallets",
      description:
        "Registro de resultados por pallet (calidad visual, microbiología, químicos), estados bloqueado/liberado y visibilidad de análisis pendientes.",
      impact:
        "Acelera la liberación de producto y reduce dependencia de cruces manuales en planillas.",
    },
    {
      title: "Packing lists y embarques",
      description:
        "Armado de listas de embarque filtrando pallets aptos por calidad, con trazabilidad asociada por contenedor.",
      impact:
        "Reduce tiempos de preparación de cargas y mejora coordinación con comercial y exportación.",
    },
    {
      title: "Dashboard operativo y financiero",
      description:
        "Vistas separadas para planta (movimientos, stock, merma, calidad) y administración (costos, rendimiento, cruce con Softland).",
      impact:
        "Todos ven los mismos números en tiempo y forma, según su rol.",
    },
    {
      title: "Costeo diario y costo de fabricación",
      description:
        "Cálculo diario de costo de producción (mano de obra, fruta, energía, químicos, insumos) y costo promedio básico de inventario.",
      impact:
        "Entrega el “feeling diario” de costo y apoya decisiones por turno, variedad y fruta.",
    },
    {
      title: "Integración Softland + sistema de producción",
      description:
        "Conexión con Softland y el sistema operativo actual para alinear inventario, costos y contabilidad sin duplicar carga manual.",
      impact:
        "Unifica fuentes operativas y financieras en una sola plataforma de consulta y control.",
    },
    {
      title: "Perfiles, alertas y control de cambios",
      description:
        "Accesos por rol (producción, calidad, administración, gerencia), alertas de pendientes y bitácora de cambios.",
      impact:
        "Aumenta control, auditabilidad y adopción por usuarios reales (estimado 12–15 usuarios).",
    },
  ],
  timeline: [
    {
      label: "Sprint 1 (Semanas 1-2)",
      title: "Discovery en planta + diseño operativo",
      description:
        "Relevamiento presencial en Teno con planta y administración (Jared y Johan), mapeo de flujos de trazabilidad, calidad y costos. Plan validado y backlog priorizado.",
    },
    {
      label: "Sprint 2 (Semanas 3-4)",
      title: "Inventario, trazabilidad base y tablero inicial",
      description:
        "Movimientos por bodega, trazabilidad básica lote→producto, registro calidad ok/no ok por pallet y primer tablero operativo diario.",
    },
    {
      label: "Sprint 3 (Semanas 5-6)",
      title: "Reproceso + conciliación frigorífico",
      description:
        "Flujo de reproceso con cierre, conciliación planta vs frigorífico y alertas de pendientes e inconsistencias.",
    },
    {
      label: "Sprint 4 (Semanas 7-8)",
      title: "Integración Softland v1 + sistema actual",
      description:
        "Conexión con Softland y sistema de producción para cruce operativo-contable y reducción de doble digitación.",
    },
    {
      label: "Sprint 5 (Semanas 9-10)",
      title: "Costeo diario + validación final + salida en vivo",
      description:
        "Costeo diario y costo promedio básico. Validación con usuarios reales (12–15 personas), capacitación y salida a producción antes de temporada.",
    },
  ],
  stack: [
    "Frontend: Next.js (web responsive) + TypeScript",
    "Backend: Node.js (API) + TypeScript",
    "Base de datos: PostgreSQL",
    "Integración Softland + sistema de producción: API / archivos / DB (según factibilidad)",
    "Infra (opción Lean): Supabase (Postgres administrado) + Vercel (web) + hosting backend por definir",
    "Infra (opción Enterprise): AWS o Azure (Postgres administrado) + CI/CD + observabilidad por definir",
  ],
  methodology: [
    "Implementación por fases: se puede comenzar con Opción A y evolucionar a B o C sin rehacer el trabajo base",
    "Trabajo por etapas de 2 semanas con avances visibles y demo al cierre",
    "Revisión semanal con usuarios clave de planta y administración",
    "Pruebas en cada etapa y validación final con usuarios reales antes de salir en vivo",
    "Mes de garantía/estabilización incluido según opción, antes de mantención mensual opcional",
  ],
  pricing: [
    {
      name: "Opción A — Fase 1: Núcleo operativo + Softland v1",
      price: "USD 5,000",
      description:
        "Fase inicial recomendada: ordenar operación diaria, reducir descuadres y tener costo de producción diario antes de temporada. Puede iniciarse sola y escalar después.\n\n**Mantención mensual opcional:** USD 200 / mes.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Control de movimientos por bodega",
        "Trazabilidad básica lote → producto (ramificación)",
        "Calidad básica por pallet (ok / no ok)",
        "Reproceso con alertas y cierre",
        "Conciliación planta vs frigorífico",
        "Tablero operativo diario (compras, stock, producción, merma)",
        "Conexión inicial con Softland y sistema de producción",
        "Costeo diario básico para gestión",
        "Roles por área y alertas de pendientes",
      ],
      featured: true,
    },
    {
      name: "Opción B — Fase 2: A + Calidad completa + costeo avanzado",
      price: "USD 7,000",
      description:
        "Incluye todo lo de la Opción A y suma calidad completa (visual, microbiología, químicos), packing lists, tablero financiero y costeo avanzado. Ideal como segunda fase tras validar la Fase 1.\n\n**Estabilización incluida:** 1 mes posterior a la salida en vivo.\n**Mantención mensual opcional:** USD 400 / mes.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Todo lo incluido en Opción A",
        "Calidad completa: visual, microbiología y químicos por pallet",
        "Liberación y bloqueo de producto con análisis pendientes visibles",
        "Armado de packing lists por contenedor",
        "Tablero financiero (costo vs rendimiento, cruce Softland)",
        "Costeo avanzado y costo promedio ponderado",
        "Integración Softland v2 con mayor automatización",
      ],
      featured: false,
    },
    {
      name: "Opción C — Fase 3: B + BI ejecutivo + mobile",
      price: "USD 10,000",
      description:
        "Incluye todo lo de la Opción B y agrega reportería ejecutiva, mejoras de experiencia y versión móvil con alertas (ej. resultados de laboratorio pendientes).\n\n**Estabilización incluida:** 2 meses posteriores a la salida en vivo.\n**Mantención mensual opcional:** USD 700 / mes.\n\nEstructura de pago: 40% al inicio, 40% contra avance funcional validado y 20% al cierre con salida en vivo.",
      items: [
        "Todo lo incluido en Opción B",
        "Reportería ejecutiva (semanal, mensual, temporada)",
        "Alertas avanzadas (calidad pendiente, reproceso, conciliación)",
        "Auditoría y trazabilidad extendida",
        "Mejoras UX para operación en planta",
        "Versión móvil / PWA para consulta y alertas en terreno",
      ],
    },
  ],
  includes: [
    "Relevamiento y definición de alcance con equipo de operación y administración.",
    "Implementación por fases: posibilidad de comenzar con Fase 1 (Opción A) y escalar después.",
    "Capacitación a usuarios clave (estimado 12–15 usuarios) y acompañamiento en salida en vivo.",
    "Pruebas en cada etapa y validación final con usuarios reales.",
    "Documentación operativa básica para uso diario del sistema.",
    "Garantía/estabilización post salida según opción elegida (1 o 2 meses).",
  ],
  notIncluded: [
    "Reemplazo total de Softland (cambio de ERP)",
    "Calidad completa, packing lists y costeo avanzado (incluidos en Opción B)",
    "Reportería ejecutiva y versión móvil avanzada (incluidos en Opción C)",
    "Infraestructura cloud y costos de terceros (hosting, BD, licencias)",
    "Migración histórica masiva de datos no validados",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Agendemos kickoff para validar flujos de planta y administración, definir alcance de integración Softland y dejar listo el Sprint 1. Inicio estimado: fines de junio / inicio de julio.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar kickoff",
  },
};

export default importadoraAltamiraControlInventario;
