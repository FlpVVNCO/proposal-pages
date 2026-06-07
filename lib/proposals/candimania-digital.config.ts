import { ProposalConfig } from "@/lib/types";

const candimaniaDigital: ProposalConfig = {
  slug: "candimania-digital",
  client: "Víctor Manuel Bracho — Candymanía",
  title: "Plataforma Digital de Juego Candymanía",
  mainProblem:
    "digitalizar un juego de mesa con marca registrada, permitir que cientos o miles de usuarios jueguen rondas de 30 segundos con monedas reales, paguen y cobren premios de forma automatizada, y escalar por niveles sin exponerse legalmente como casino en Chile.",
  summary: {
    problem:
      "Víctor tiene Candymanía funcionando en formato físico con tres niveles progresivos, pero no puede escalar ni monetizar masivamente sin software, billetera digital, pasarela de pagos y motor de juego en tiempo real.",
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
    "Seguridad financiera del usuario: auth + biometría para proteger saldo",
    "Meta de conectar muchos usuarios simultáneos (hasta 1.000+) en la misma sala",
    "Sin presupuesto fijo: necesita opciones claras para validar antes de invertir todo",
  ],
  modules: [
    {
      title: "Motor de juego Candymanía",
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
        "Interfaz Candymanía, música integrada, assets del tablero y progresión por niveles (1 → 2 → 3).",
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
    "Discovery inicial con material físico del juego (fotos, videos, reunión presencial) y validación legal.",
    "NDA firmado antes de compartir reglas completas y materiales sensibles.",
  ],
  pricing: [
    {
      name: "Opción 0 — Discovery y Arquitectura",
      price: "CLP 690.000 + IVA (este pago es acreditado a las siguientes fases)",
      description:
        "Paso inicial sugerido: Estudio del modelo de juego, levantamiento de requerimientos técnicos, validación de factibilidad (pagos masivos tipo Fintoc) y marco legal. Incluye reunión presencial.\n\n**Plazo:** 2 semanas.\n\n**Pago:** 100% inicio",
      items: [
        "Reunión de inmersión y juego físico",
        "Diagramas de flujo y arquitectura de la plataforma",
        "Validación técnica y comercial de integración Fintoc",
        "Wireframes (diseño en gris) del Nivel 1",
        "Plan de trabajo y cotización de desarrollo exacto",
      ],
      featured: true,
    },
  ],
  includes: [
    "Relevamiento y documentación de reglas del juego (con material de Víctor).",
    "Diagramas de flujo, arquitectura y wireframes básicos.",
    "Investigación de viabilidad técnica (Fintoc).",
    "Presupuesto cerrado de desarrollo para siguientes fases.",
  ],
  notIncluded: [
    "Desarrollo de software o código.",
    "Asesoría legal formal con abogado para licencia de juegos de azar en Chile",
  ],
  cta: {
    title: "Siguiente paso — reunión domingo",
    description:
      "Presentar presupuesto por videollamada (30–40 min). Si hace sentido, firmar NDA y agendar reunión presencial en Linares para iniciar la etapa de Discovery.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar reunión",
  },
};

export default candimaniaDigital;
