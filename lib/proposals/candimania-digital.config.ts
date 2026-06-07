import { ProposalConfig } from "@/lib/types";

const candimaniaDigital: ProposalConfig = {
  slug: "candimania-digital",
  client: "Víctor Manuel Bracho — Candymanía",
  title: "Plataforma Digital de Juego Candymanía",
  mainProblem:
    "digitalizar un juego de mesa con marca registrada, permitir que cientos o miles de usuarios jueguen rondas de 30 segundos con monedas reales, paguen y cobren premios de forma automatizada, y escalar por niveles sin exponerse legalmente como casino en Chile.",
  summary: {
    problem:
      "Víctor tiene Candimanía funcionando en formato físico con tres niveles progresivos, pero no puede escalar ni monetizar masivamente sin software, billetera digital, pasarela de pagos y motor de juego en tiempo real.",
    solution:
      "Desarrollar una plataforma por fases: Fase Inicial (Discovery) para mitigación legal y técnica, luego MVP (Nivel 1) para validación rápida, y versiones más avanzadas (Niveles 2 y 3) escalando de acuerdo a la tracción.",
    expectedResult:
      "Una app donde usuarios compren monedas, jueguen sus figuras en salas compartidas, reciban premios automáticos y Víctor monitoree utilidades de la casa — partiendo con validación de bajo riesgo y escalando según tracción.",
  },
  problems: [
    "Juego solo existe en formato físico; imposible escalar usuarios sin plataforma digital",
    "Necesidad de monedas digitales comprables y billetera con saldo en tiempo real",
    "Rondas de 30 segundos con motor de dados confiable y sincronización de salas",
    "Integración con proveedor financiero (Fintoc u otro) para cobrar y pagar sin gestión manual",
    "Preocupación legal: evitar clasificación como casino en Chile",
    "Seguridad financiera del usuario: auth + biometría para proteger saldo",
    "Meta de conectar muchos usuarios simultáneos (hasta 1.000+) en la misma sala",
    "Sin presupuesto fijo: necesita opciones claras para validar antes de invertir todo",
  ],
  modules: [
    {
      title: "Motor de juego Candimanía",
      description:
        "Recreación digital de tableros por nivel, dados (imágenes y números), temporizador de 30 segundos, selección de figuras y cálculo automático de multiplicadores.",
      impact:
        "Traduce la experiencia física a software confiable y repetible en cada ronda.",
    },
    {
      title: "Salas en tiempo real",
      description:
        "Infraestructura WebSocket para que muchos usuarios entren a la misma mesa, jueguen de forma independiente y vean resultados sincronizados.",
      impact:
        "Replica la sensación de Ludo Club (mucha gente conectada) sin multijugador interactivo.",
    },
    {
      title: "Billetera y monedas del juego",
      description:
        "Saldo interno, historial de apuestas/premios, denominaciones configurables (1, 5, 10 monedas) y trazabilidad por ronda.",
      impact:
        "Base financiera del producto y control del flujo de dinero virtual/real.",
    },
    {
      title: "Pasarela de pagos",
      description:
        "Recarga de monedas (cash-in) y, en fases avanzadas, retiro automático de premios (cash-out) vía Mercado Pago, Webpay o proveedor fintech validado.",
      impact:
        "Automatiza cobros y pagos sin que Víctor gestione transferencias manualmente.",
    },
    {
      title: "Autenticación y biometría",
      description:
        "Login con Google/email y protección adicional con huella o reconocimiento facial en app móvil.",
      impact:
        "Protege la billetera del usuario y reduce fraude en operaciones con dinero.",
    },
    {
      title: "Panel administrativo",
      description:
        "Dashboard para Víctor: usuarios activos, volumen apostado, premios pagados, margen de la casa, auditoría de rondas.",
      impact:
        "Visibilidad del negocio y control operativo diario.",
    },
    {
      title: "Experiencia de marca",
      description:
        "Interfaz Candimanía, música integrada, assets del tablero y progresión por niveles (1 → 2 → 3).",
      impact:
        "Consolida identidad de marca registrada en el producto digital.",
    },
    {
      title: "Escalabilidad y compliance",
      description:
        "Optimización para alto volumen concurrente, logs de auditoría y lineamientos técnicos para marco legal chileno.",
      impact:
        "Prepara el producto para crecimiento masivo con menor riesgo operativo.",
    },
  ],
  timeline: [
    {
      label: "Fase 0 (Semanas 1–2)",
      title: "Discovery y Arquitectura",
      description:
        "Reunión presencial, análisis de marco legal, UX/UI básico, validación técnica con Fintoc y definición de roadmap.",
    },
    {
      label: "Fase 1 (Semanas 3–4)",
      title: "Backend + billetera + auth",
      description:
        "Motor de rondas, lógica de dados Nivel 1, registro Google, billetera interna y API de salas.",
    },
    {
      label: "Fase 2 (Semanas 5–6)",
      title: "Frontend + salas tiempo real",
      description:
        "Tablero interactivo, temporizador 30s, selección de figuras y conexión simultánea de usuarios.",
    },
    {
      label: "Fase 3 (Semanas 7–8)",
      title: "Pagos piloto + QA + deploy",
      description:
        "Integración Mercado Pago/Webpay sandbox, pruebas con Víctor y salida a piloto (Opción 1).",
    },
    {
      label: "Fase 4 (Semanas 9–14)",
      title: "Nivel 2 + admin + app móvil",
      description:
        "Segundo nivel, panel admin, biometría, pagos producción y app Flutter Android (Opción 2).",
    },
    {
      label: "Fase 5 (Semanas 15–22)",
      title: "Nivel 3 + fintech + escala",
      description:
        "18 figuras, cash-out automatizado, 1.000+ usuarios, chat opcional(Opción 3).",
    },
  ],
  stack: [
    "Frontend web: Next.js + TypeScript",
    "App móvil: Flutter (Android + iOS desde Opción 2)",
    "Backend: Node.js + TypeScript",
    "Tiempo real: WebSockets (Socket.io o similar)",
    "Base de datos: PostgreSQL",
    "Auth: Google OAuth + biometría nativa",
    "Pagos: Mercado Pago / Webpay (Op. 2); Fintoc u alternativa (Op. 3)",
    "Infra: Vercel + Railway/Render/AWS según escala",
  ],
  methodology: [
    "Cuatro opciones de alcance (Discovery, MVP, Expansión, Completo) — se puede escalar de forma progresiva.",
    "Discovery inicial con material físico del juego (fotos, videos, reunión presencial) y validación legal.",
    "Demos funcionales al cierre de cada hito con validación de Víctor.",
    "Priorizar cumplimiento legal antes de operar con dinero real a escala.",
    "NDA firmado antes de compartir reglas completas y materiales sensibles.",
  ],
  pricing: [
    {
      name: "Opción 0 — Discovery y Arquitectura",
      price: "CLP 690.000 + IVA (este pago es acreditado en las opciones 1, 2 y 3)",
      description:
        "Paso inicial sugerido: Estudio del modelo de juego, levantamiento de requerimientos técnicos, validación de factibilidad (pagos masivos tipo Fintoc) y marco legal. Incluye reunión presencial.\n\n**Plazo:** 2 semanas.\n\n**Pago:** 100% inicio.",
      items: [
        "Reunión de inmersión y juego físico",
        "Diagramas de flujo y arquitectura de la plataforma",
        "Validación técnica y comercial de integración Fintoc",
        "Wireframes (diseño en gris) del Nivel 1",
        "Plan de trabajo ajustado para desarrollo del MVP",
      ],
      featured: true,
    },
    {
      name: "Opción 1 — MVP Validación",
      price: "CLP 5.790.000",
      description:
        "Nivel 1 digital, billetera, rondas 30s y pagos piloto para validar tracción antes de invertir en niveles avanzados.\n\n**Plazo:** 6–8 semanas.\n\n**Mantención opcional:** CLP 250.000 / mes.\n\n**Pago:** 50% inicio · 50% entrega.",
      items: [
        "Nivel 1 del tablero Candimanía",
        "Motor de rondas con temporizador 30 segundos",
        "Registro / login (Google + email)",
        "Billetera interna con monedas del juego",
        "Recarga piloto (Mercado Pago o Webpay sandbox)",
        "Salas tiempo real (hasta ~100 usuarios simultáneos)",
        "Deploy en stores",
      ],
      featured: false,
    },
    {
      name: "Opción 2 — Expansión",
      price: "CLP 14.490.000",
      description:
        "Incluye todo lo de la Opción 1 más Nivel 2, biometría, panel admin, pagos en producción y app móvil.\n\n**Plazo:** 12–14 semanas desde inicio.\n\n**Mantención opcional:** CLP 450.000 / mes.\n\n**Pago:** 40% inicio · 40% hito · 20% entrega.",
      items: [
        "Todo lo incluido en Opción 1",
        "Nivel 2 del juego",
        "Seguridad biométrica (huella / Face ID)",
        "Panel admin: usuarios, rondas, margen de la casa",
        "Pagos en producción (Webpay / Mercado Pago)",
        "App Flutter Android (iOS según acuerdo)",
        "Escalabilidad hasta ~500 usuarios simultáneos",
      ],
      featured: false,
    },
    {
      name: "Opción 3 — Proyecto Completo",
      price: "CLP 23.990.000",
      description:
        "Ecosistema completo: Nivel 3 (18 figuras), fintech automatizada, 1.000+ usuarios, chat opcional y publicación en stores.\n\n**Plazo:** 18–22 semanas desde inicio.\n\n**Mantención opcional:** CLP 800.000 / mes.\n\n**Pago:** 40% inicio · 40% hito · 20% entrega.",
      items: [
        "Todo lo incluido en Opción 2",
        "Nivel 3: 18 figuras, 3 dados imagen + 1 dado número",
        "Integración fintech (Fintoc u alternativa) cash-in / cash-out",
        "Escalabilidad 1.000+ usuarios simultáneos",
        "Chat opcional en sala",
        "Auditoría completa de rondas y transacciones",
        "Apps en Google Play (+ iOS si aplica)",
        "1 mes de estabilización post-lanzamiento",
      ],
      featured: false,
    },
  ],
  includes: [
    "Relevamiento y documentación de reglas del juego (con material de Víctor).",
    "Desarrollo según opción elegida con demos de validación.",
    "Capacitación básica de panel admin y operación.",
    "Garantía post-entrega: 2 semanas (Op. 1), 3 semanas (Op. 2), 1 mes (Op. 3).",
    "Posibilidad de escalar de Opción 1 → 2 → 3 sin rehacer trabajo base.",
  ],
  notIncluded: [
    "Asesoría legal para licencia de juegos de azar en Chile",
    "Comisiones de pasarelas de pago (Webpay, Mercado Pago, Fintoc, etc.)",
    "Hosting cloud y costos de infraestructura escalada",
    "Marketing, adquisición de usuarios y publicidad",
    "Cuentas Apple Developer / Google Play (pagadas por el cliente)",
    "Ilustraciones o música adicional no provista por Víctor",
  ],
  cta: {
    title: "Siguiente paso — reunión domingo",
    description:
      "Presentar presupuesto por videollamada (30–40 min). Si hace sentido, firmar NDA y agendar reunión presencial en Linares/Chillán para iniciar la etapa de Discovery.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar reunión",
  },
};

export default candimaniaDigital;
