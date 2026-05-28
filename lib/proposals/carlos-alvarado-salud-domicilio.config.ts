import { ProposalConfig } from "@/lib/types";

const carlosAlvaradoSaludDomicilio: ProposalConfig = {
  slug: "carlos-alvarado-salud-domicilio",
  client: "Carlos Alvarado",
  title: "Marketplace de Salud a Domicilio (MVP)",
  mainProblem:
    "dificultad de los pacientes para encontrar servicios domiciliarios de salud confiables, accesibles y trazables, mientras los prestadores independientes tienen baja visibilidad frente a grandes clínicas de mayor costo",
  summary: {
    problem:
      "Pacientes y familias enfrentan fricción para encontrar kinesiólogos, enfermería u otros servicios domiciliarios confiables, con poca transparencia de disponibilidad, reputación y pago.",
    solution:
      "Marketplace móvil que conecta pacientes con profesionales validados, coordina agenda por zona, retiene el pago hasta confirmar la atención y entrega control operativo desde un backoffice.",
    expectedResult:
      "Validación temprana del modelo transaccional, mayor confianza entre paciente y prestador, y una operación inicial escalable sin carga burocrática institucional.",
  },
  problems: [
    "Baja visibilidad de prestadores independientes frente a clínicas y redes de mayor tamaño",
    "Dificultad para comparar disponibilidad, cobertura geográfica y reputación de profesionales",
    "Coordinación manual de agenda y traslados, con baja eficiencia operativa",
    "Riesgo de pagos informales o sin trazabilidad entre paciente y prestador",
    "Ausencia de un mecanismo simple para validar calidad de atención y experiencia del paciente",
    "Necesidad de iniciar con control manual sin incorporar integraciones institucionales complejas",
  ],
  modules: [
    {
      title: "App Móvil Unificada",
      description:
        "Aplicación para pacientes y profesionales, con flujos diferenciados según rol: solicitud de atención, disponibilidad, servicios ofrecidos y seguimiento del estado.",
      impact:
        "Reduce fricción de adopción y concentra la experiencia transaccional en un solo producto móvil.",
    },
    {
      title: "Geolocalización y Radio de Acción",
      description:
        "Configuración de zona de cobertura para profesionales y búsqueda por ubicación del paciente para optimizar traslados y tiempos disponibles.",
      impact:
        "Mejora la eficiencia de asignación y permite operar con una red inicial acotada.",
    },
    {
      title: "Motor de Agendamiento y Match",
      description:
        "Flujo para solicitar un servicio, cruzar disponibilidad, ubicación y tipo de atención, y confirmar una reserva con un profesional compatible.",
      impact:
        "Acelera la conexión entre demanda y oferta, manteniendo control sobre el proceso de reserva.",
    },
    {
      title: "Pagos en Custodia / Escrow",
      description:
        "Integración con pasarela de pago para retener fondos hasta confirmar la atención, considerando MercadoPago o Stripe según viabilidad operativa.",
      impact:
        "Aumenta confianza, mejora trazabilidad financiera y habilita el modelo de comisión por servicio.",
    },
    {
      title: "Sistema de Reputación y Reseñas",
      description:
        "Calificaciones y comentarios posteriores a cada atención, visibles para apoyar futuras decisiones de pacientes.",
      impact:
        "Construye confianza progresiva y ayuda a priorizar profesionales con mejor desempeño.",
    },
    {
      title: "Panel de Administración",
      description:
        "Backoffice para validar manualmente profesionales, revisar solicitudes, monitorear pagos, gestionar estados y acompañar la operación inicial.",
      impact:
        "Permite asegurar calidad y resolver casos operativos sin automatizar burocracia antes de validar el mercado.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1-2",
      title: "Discovery, UX/UI y base técnica",
      description:
        "Definición de flujos críticos, roles, servicios iniciales, diseño UX/UI del MVP, arquitectura base en Supabase y configuración del proyecto móvil y web.",
    },
    {
      label: "Semanas 3-4",
      title: "Usuarios, perfiles y geolocalización",
      description:
        "Registro/login, perfiles de paciente y profesional, servicios ofrecidos, zonas de cobertura, búsqueda por ubicación y primeras vistas del backoffice.",
    },
    {
      label: "Semanas 5-6",
      title: "Agendamiento, match y operación",
      description:
        "Solicitud de atención, cruce básico de disponibilidad y radio de acción, confirmación de reserva, estados del servicio y validación manual desde administración.",
    },
    {
      label: "Semanas 7-8",
      title: "Pagos, reputación y publicación",
      description:
        "Integración de pagos, flujo de retención/liberación operativa, reseñas, QA funcional, ajustes finales y preparación para publicación en tiendas.",
    },
  ],
  stack: [
    "React Native + Expo",
    "Next.js + React",
    "Supabase",
    "MercadoPago / Stripe",
    "Expo Application Services",
  ],
  methodology: [
    "Desarrollo ágil por fases",
    "Fase 1 enfocada en core transaccional y validación de mercado",
    "Sprints de 2 semanas con entregables funcionales",
    "Demos y revisión de alcance al cierre de cada sprint",
    "Backoffice y validaciones manuales para evitar carga burocrática temprana",
    "Integraciones institucionales postergadas hasta validar tracción y operación",
  ],
  pricing: [
    {
      name: "Opción 1: MVP Transaccional (Validación de Mercado)",
      price: "$14.500.000 CLP",
      description:
        "**Tiempo estimado: 8 semanas**\n\nEnfoque: construir un producto robusto, seguro y funcional para salir al mercado rapido, validar traccion con los primeros profesionales y generar flujo de caja mediante pagos particulares.\n\nAlcance: app movil unificada (pacientes y profesionales), panel de administracion web, agendamiento y match por radio geografico, pagos en custodia con MercadoPago Split, sistema de reputacion y notificaciones transaccionales basicas.\n\nSoporte: 1 mes de garantia tecnica post-lanzamiento para correccion de bugs criticos.\n\nEstructura de pago: 40% al inicio / 30% al entregar perfiles y agendamientos (mitad del proyecto) / 30% al entregar y publicar en tiendas",
    },
    {
      name: "Opción 2: MVP + Partnership Tecnológico (Visión a Largo Plazo)",
      price: "$12.500.000 CLP (setup) + $1.200.000 CLP/mes (retainer 6 meses)",
      description:
        "**Tiempo estimado: 8 semanas para MVP + desarrollo continuo**\n\nEnfoque: reducir el costo inicial del MVP a cambio de compromiso mensual, actuando como equipo tecnologico dedicado para escalar hacia integraciones institucionales cuando existan acuerdos y accesos tecnicos formales.\n\nAlcance inicial (setup): entrega completa de todo lo descrito en la opcion 1.\n\nAlcance continuo (retainer mensual, inicia en el mes 3): soporte y mantencion prioritaria, actualizaciones de librerias, mejoras de producto basadas en feedback real y avance de fase 2 para integraciones legales conforme se habiliten documentaciones tecnicas (I-Med, MINSAL, Registro Civil).\n\nEstructura de pago: 50% al inicio y 50% al entregar; retainer mensual desde salida a produccion(desde el mes 3).",
        featured: true
      },
  ],
  includes: [
    "Diseño UX/UI del MVP",
    "Desarrollo App Móvil iOS/Android con Expo",
    "Panel Web de Administración",
    "Registro y perfiles para pacientes y profesionales",
    "Geolocalización y radio de acción",
    "Motor de agendamiento y match",
    "Integración de pagos",
    "Flujo operativo de custodia/liberación de fondos",
    "Sistema de reputación y reseñas",
    "Validación manual de profesionales desde backoffice",
    "QA funcional",
    "Preparación y publicación en tiendas",
  ],
  notIncluded: [
    "Integraciones con MINSAL, ISAPRES o Fonasa",
    "Licencias médicas",
    "Perfiles corporativos para clínicas",
    "Validación biométrica con Registro Civil",
    "Costos de infraestructura, cuentas de desarrollador o comisiones de pasarela de pago",
    "Automatización avanzada de disputas o arbitraje legal",
    "Funcionalidades fuera del alcance aprobado para Fase 1",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Revisemos la propuesta técnica y comercial el jueves a las 12:30 hrs para confirmar modalidad de pago y plan de inicio proyectado en 1 a 2 meses.",
    primaryButton: "Revisar propuesta",
    secondaryButton: "Agendar revisión",
  },
};

export default carlosAlvaradoSaludDomicilio;
