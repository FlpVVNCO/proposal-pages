import { ProposalConfig } from "@/lib/types";

const agronomerAsesorSaas: ProposalConfig = {
  slug: "agronomer-asesor-saas",
  client: "Cliente agronomo",
  title: "Plataforma Web y Apps Móviles",
  mainProblem:
    "cliente agronomo hoy existe como un módulo básico dentro de la plataforma principal de cliente agronomo y necesita convertirse en un producto SaaS independiente para clientes B2B del mundo agro.",
  summary: {
    problem:
      "El flujo de asesoría técnica, visitas, recomendaciones y ejecución por parte del productor requiere mayor trazabilidad, control operativo y una experiencia separada del core actual de Agronomer.",
    solution:
      "Desarrollar una plataforma web para asesoría/administración y dos apps móviles para asesores y productores, integradas con APIs, infraestructura y servicios provistos por el cliente.",
    expectedResult:
      "Un MVP independiente que permita operar el ciclo de visitas, recomendaciones, ejecución, firma, GPS y sincronización con una base preparada para validar el nuevo modelo SaaS.",
  },
  problems: [
    "El producto aún depende del contexto de la plataforma principal de Agronomer",
    "El flujo de visitas, hallazgos y recomendaciones necesita una experiencia digital dedicada",
    "La ejecución por parte del productor requiere trazabilidad con firma, GPS, fecha y hora",
    "La app del productor debe operar con conectividad limitada y sincronizar datos posteriormente",
    "Los roles, permisos y vistas operativas deben gestionarse desde interfaces claras",
    "El alcance depende de APIs, ambientes y servicios que serán provistos por el cliente",
  ],
  modules: [
    {
      title: "Plataforma web asesor/administración",
      description:
        "Panel web para planificación de visitas, visualización por estado, administración de parámetros funcionales y gestión visual de usuarios, roles y permisos.",
      impact:
        "Centraliza la operación del asesor y entrega control sobre visitas, productores, fundos, cuarteles y productos según APIs disponibles.",
    },
    {
      title: "App móvil del asesor",
      description:
        "Aplicación para agenda diaria, visualización de visitas, acceso a información de productor/fundo, registro de hallazgos, observaciones, fotos/GPS y generación de órdenes.",
      impact:
        "Digitaliza el trabajo en terreno y reduce fricción entre la visita técnica y la recomendación al productor.",
    },
    {
      title: "App móvil del productor",
      description:
        "Aplicación para bandeja de órdenes, detalle de recomendaciones, registro de ejecución, datos operativos, firma, GPS/hora, estados y sincronización.",
      impact:
        "Permite al productor ejecutar recomendaciones con trazabilidad y continuidad operativa aun con conectividad limitada.",
    },
    {
      title: "Offline básico en app productor",
      description:
        "Almacenamiento local con SQLite para guardar información, generar JSON pendiente y sincronizar cuando vuelva la conexión.",
      impact:
        "Reduce el riesgo operativo en terreno y mantiene evidencia de ejecución cuando la conexión no está disponible.",
    },
    {
      title: "Integración con APIs del cliente",
      description:
        "Consumo de APIs, servicios de backend, Blob/Azure Functions y notificaciones disponibles desde la infraestructura del cliente.",
      impact:
        "Aprovecha la arquitectura existente y acota el desarrollo al frontend web, mobile e integración funcional.",
    },
    {
      title: "Notificaciones y comunicación",
      description:
        "Integración con notificaciones por app y flujos relacionados con WhatsApp según los servicios disponibles desde backend.",
      impact:
        "Mejora la coordinación entre asesor y productor sin asumir integraciones externas no definidas.",
    },
    {
      title: "QA funcional y entrega técnica",
      description:
        "Pruebas funcionales de los flujos principales, correcciones de cierre, entrega técnica y acompañamiento final.",
      impact:
        "Disminuye riesgos antes de la salida piloto o productiva y facilita el traspaso al equipo del cliente.",
    },
  ],
  timeline: [
    {
      label: "Semanas 1-2",
      title: "Kickoff, alcance y base funcional",
      description:
        "Validación de requerimientos, revisión del HTML entregado, accesos, APIs documentadas, ambientes y definición de flujos críticos.",
    },
    {
      label: "Semanas 3-4",
      title: "Plataforma web y app asesor",
      description:
        "Implementación de interfaces web, planificación de visitas, gestión de estados, agenda del asesor y registro de visitas en terreno.",
    },
    {
      label: "Semanas 5-6",
      title: "App productor y offline básico",
      description:
        "Desarrollo de bandeja de órdenes, detalle de recomendación, registro de ejecución, firma, GPS/hora, SQLite y estados de sincronización.",
    },
    {
      label: "Semanas 7-8",
      title: "Integraciones y QA funcional",
      description:
        "Integración con APIs del cliente, servicios disponibles de notificaciones, ajustes funcionales y pruebas de los flujos principales.",
    },
    {
      label: "Semanas 9-10",
      title: "Estabilización y entrega",
      description:
        "Corrección de bugs, refinamiento visual sobre el HTML aprobado, validación final y entrega técnica del MVP.",
    },
  ],
  stack: [
    "Frontend web por validar",
    "Mobile framework por validar",
    "APIs provistas por el cliente",
    "Azure",
    "Azure Blob Storage",
    "Azure Functions",
    "Google Maps",
  ],
  methodology: [
    "Sprints con demos y validaciones funcionales periódicas",
    "Integración continua contra APIs y ambientes provistos por el cliente",
    "Uso del HTML aprobado como base visual para reducir tiempos de diseño",
    "QA funcional enfocado en flujos críticos de asesor y productor",
    "Cierre técnico con traspaso y acompañamiento según opción comercial",
  ],
  pricing: [
    {
      name: "MVP Recomendado",
      price: "USD 18,000",
      description:
        "Incluye plataforma web, app móvil asesor, app móvil productor, offline básico en productor, integración con APIs del cliente, adaptación del HTML existente, roles simples, notificaciones según servicios disponibles, QA funcional y entrega técnica.\n\n**Mantención mensual opcional:** USD 1,200 / mes, con corrección de bugs menores, ajustes funcionales acotados, soporte técnico, revisión de incidencias, pequeñas mejoras y acompañamiento durante la operación inicial.",
      featured: true,
    },
    {
      name: "MVP + Estabilización",
      price: "USD 22,000",
      description:
        "Incluye todo el MVP Recomendado más 2 a 3 meses de mantención/estabilización inicial, corrección de bugs menores, ajustes funcionales acotados y acompañamiento durante uso real.",
    },
  ],
  includes: [
    "Desarrollo frontend de la plataforma web",
    "Desarrollo de la app móvil del asesor",
    "Desarrollo de la app móvil del productor",
    "Integración con APIs provistas por el cliente",
    "Adaptación del diseño HTML existente",
    "Implementación de flujos funcionales",
    "Gestión visual de usuarios, roles y permisos",
    "Offline básico en app productor",
    "Integración con notificaciones según servicios disponibles",
    "QA funcional",
    "Entrega técnica y acompañamiento de cierre",
  ],
  notIncluded: [
    "Backend",
    "Infraestructura Azure",
    "Base de datos",
    "Diseño del modelo de datos",
    "Rediseño UX/UI desde cero",
    "Integración directa con WhatsApp Business API si no viene desde backend",
    "Offline robusto con resolución avanzada de conflictos",
    "Offline en app del asesor",
    "Dashboard avanzado de cumplimiento",
    "Analítica avanzada",
    "Computer vision",
    "Estimación de cosechas con imágenes",
    "Integraciones satelitales avanzadas",
    "Publicación en App Store o Google Play salvo que se incluya explícitamente",
    "Soporte extendido post-lanzamiento salvo plan de mantención",
  ],
  cta: {
    title: "Siguiente paso",
    description:
      "Agendar una reunión de kickoff para validar alcance, APIs disponibles, ambientes, HTML aprobado y plan de ejecución del MVP.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar kickoff",
  },
};

export default agronomerAsesorSaas;
