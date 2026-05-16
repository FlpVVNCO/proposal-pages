import { ProposalConfig } from "@/lib/types";

const taskrabbitApp: ProposalConfig = {
  slug: "taskrabbit-app",
  client: "Por definir",
  title: "Propuesta de Desarrollo de Software",
  mainProblem:
    "conectar clientes con especialistas confiables de servicios como plomeros, carpinteros, electricistas y técnicos de forma centralizada",
  summary: {
    problem:
      "Los clientes tienen dificultad para encontrar especialistas confiables, comparar precios y dar seguimiento al servicio.",
    solution:
      "Marketplace digital con perfiles, solicitudes, matching, cotizaciones, chat, pagos y reviews en una sola plataforma.",
    expectedResult:
      "Mayor trazabilidad, confianza, control operativo y escalabilidad del modelo de servicios.",
  },
  problems: [
    "Búsqueda manual de especialistas sin centralización",
    "Poca confianza entre cliente y proveedor",
    "Falta de comparación clara entre cotizaciones",
    "Comunicación dispersa por WhatsApp o llamadas",
    "Pagos fuera de plataforma sin trazabilidad",
    "Baja trazabilidad del servicio realizado",
    "Dificultad para medir calidad mediante reseñas",
    "Escalabilidad limitada sin una plataforma centralizada",
  ],
  modules: [
    {
      title: "Plataforma Marketplace de Servicios",
      description:
        "Aplicación donde clientes publican una necesidad y reciben cotizaciones de especialistas compatibles.",
      impact:
        "Centraliza la demanda y permite operar servicios de forma ordenada.",
    },
    {
      title: "Doble Perfil: Cliente y Especialista",
      description:
        "Usuarios registrados como clientes o especialistas, con flujos y permisos específicos para cada rol.",
      impact:
        "Separa claramente la experiencia de quien solicita y quien presta el servicio.",
    },
    {
      title: "Formulario de Necesidad",
      description:
        "El cliente describe el problema, selecciona categoría, ubicación, fecha tentativa y puede adjuntar fotos.",
      impact: "Permite capturar mejor el contexto antes de cotizar.",
    },
    {
      title: "Matching Básico",
      description:
        "El sistema asigna o muestra la solicitud a 5–6 especialistas compatibles según categoría y zona.",
      impact:
        "Acelera la conexión entre demanda y oferta sin requerir operación manual.",
    },
    {
      title: "Sistema de Cotizaciones",
      description:
        "Los especialistas envían precio, descripción y disponibilidad. El cliente compara y acepta una cotización.",
      impact: "Mejora la transparencia y facilita la toma de decisión.",
    },
    {
      title: "Chat Interno",
      description:
        "Comunicación básica entre cliente y especialista después de una solicitud o cotización aceptada.",
      impact: "Mantiene la conversación dentro de la plataforma.",
    },
    {
      title: "Agendamiento",
      description:
        "Selección o confirmación de fecha y hora para realizar el servicio.",
      impact: "Ordena la operación y reduce confusiones.",
    },
    {
      title: "Pago In-App",
      description:
        "Pago asociado a la cotización aceptada mediante pasarela compatible con México (Stripe / Mercado Pago).",
      impact:
        "Permite monetizar dentro de la plataforma y controlar mejor la transacción.",
    },
    {
      title: "Evidencia de Trabajo",
      description:
        "El especialista puede subir fotos o notas y marcar el servicio como completado.",
      impact: "Mejora la trazabilidad y reduce disputas.",
    },
    {
      title: "Reviews Bidireccionales",
      description:
        "Cliente evalúa al especialista y especialista evalúa al cliente al cierre del servicio.",
      impact: "Construye reputación y confianza dentro del marketplace.",
    },
    {
      title: "Panel Administrativo Básico",
      description:
        "Panel para visualizar usuarios, especialistas, solicitudes, cotizaciones, pagos y reseñas.",
      impact: "Permite operar y monitorear el MVP desde una interfaz interna.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1–2",
      title: "Sprint 1 · Base del producto",
      description:
        "Auth y roles (cliente, especialista, admin), perfil de usuario, categorías de servicios, formulario inicial de solicitud y base del panel administrativo. Entrega: el usuario puede registrarse y crear una solicitud básica.",
    },
    {
      label: "Semanas 3–4",
      title: "Sprint 2 · Matching y cotizaciones",
      description:
        "Solicitudes completas, matching básico con 5–6 especialistas, envío y comparación de cotizaciones, aceptación de especialista. Entrega: el cliente crea una solicitud, recibe cotizaciones y acepta una.",
    },
    {
      label: "Semanas 5–6",
      title: "Sprint 3 · Operación del servicio",
      description:
        "Chat básico, agendamiento, estados del servicio, evidencia de trabajo, reviews bidireccionales y notificaciones básicas. Entrega: cliente y especialista coordinan, completan y califican el servicio.",
    },
    {
      label: "Semanas 7–8",
      title: "Sprint 4 · Pagos, admin y cierre",
      description:
        "Pago in-app, panel administrativo completo (usuarios, solicitudes, cotizaciones y pagos), QA funcional, corrección de bugs y ajustes finales. Entrega: flujo completo MVP listo para demo final.",
    },
  ],
  stack: [
    "React Native + Expo",
    "NestJS",
    "PostgreSQL + Prisma",
    "Next.js (Admin Panel)",
    "Railway / Render",
    "Supabase Storage / S3",
    "Stripe / Mercado Pago",
    "Expo Push Notifications",
    "Sentry",
  ],
  methodology: [
    "Sprints de 2 semanas con entregable funcional",
    "Demo al cierre de cada sprint",
    "Check-in semanal de 20–30 minutos",
    "Ambiente de prueba disponible cuando aplique",
    "Validación progresiva de funcionalidades",
    "Ajustes menores dentro del alcance aprobado",
  ],
  pricing: [
    {
      name: "MVP Sólido",
      price: "USD 10,000 – 14,000",
      description:
        "Versión inicial funcional con solicitud de servicios, matching, cotizaciones, chat, agenda, pagos, evidencia, reviews y panel administrativo básico.",
      featured: true,
    },
    {
      name: "Versión Extendida",
      price: "USD 15,000 – 25,000",
      description:
        "Mayor robustez técnica, validaciones avanzadas, notificaciones más completas, panel administrativo ampliado y mayor preparación para escalar.",
    },
    {
      name: "Enterprise",
      price: "A consultar",
      description:
        "AWS completo, arquitectura serverless, validación avanzada de especialistas, analítica, flujos de disputas, facturación y automatizaciones adicionales.",
    },
  ],
  includes: [
    "Diseño UX/UI base del MVP",
    "App para cliente y especialista",
    "Registro / login",
    "Perfiles básicos de usuario",
    "Categorías de servicios",
    "Formulario de solicitud",
    "Matching básico",
    "Sistema de cotizaciones",
    "Comparación y aceptación de cotizaciones",
    "Chat básico",
    "Agendamiento",
    "Pago in-app",
    "Evidencia de trabajo",
    "Reviews bidireccionales",
    "Notificaciones básicas",
    "Panel administrativo básico",
    "QA funcional",
    "Deploy inicial / ambiente de demo",
  ],
  notIncluded: [
    "Marketing o adquisición de usuarios",
    "Costos de infraestructura cloud",
    "Comisiones de pasarela de pago",
    "Facturación CFDI",
    "Wallet interna o escrow avanzado",
    "Sistema avanzado de disputas",
    "Verificación documental profunda de especialistas",
    "Geolocalización en tiempo real",
    "Algoritmo avanzado de matching",
    "Apps nativas separadas iOS/Android",
    "Soporte mensual posterior al lanzamiento",
    "Funcionalidades fuera del alcance aprobado",
  ],
  cta: {
    title: "¿Siguiente paso?",
    description:
      "Agendemos kickoff para cerrar alcance, confirmar stack, definir prioridades del MVP y comenzar el discovery funcional.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar kickoff",
  },
};

export default taskrabbitApp;
