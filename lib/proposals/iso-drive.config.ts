import { ProposalConfig } from "@/lib/types";

const isoDrive: ProposalConfig = {
  slug: "iso-drive",
  client: "ISO Drive",
  title: "Propuesta de Desarrollo de Software",
  mainProblem: "administración manual de flotas y expedientes ISO",
  summary: {
    problem: "Documentación dispersa y auditorías costosas en tiempo",
    solution: "Plataforma centralizada para gestión de flotas y cumplimiento ISO",
    expectedResult: "Reducción de tiempos de auditoría y trazabilidad total",
  },
  problems: [
    "Expedientes físicos difíciles de auditar",
    "Sin alertas de vencimiento de documentos",
    "Falta de visibilidad sobre el estado de la flota",
    "Procesos de inspección no sistematizados",
  ],
  modules: [
    {
      title: "Gestión de flota",
      description: "Registro y seguimiento de vehículos, equipos y activos.",
      impact: "Visibilidad total sobre el estado operativo de la flota.",
    },
    {
      title: "Control documental",
      description: "Repositorio de documentos con control de vencimientos.",
      impact: "Elimina pérdidas documentales y reduce riesgo de incumplimiento.",
    },
    {
      title: "Módulo de inspecciones",
      description: "Checklist digital para inspecciones periódicas.",
      impact: "Acelera auditorías y deja trazabilidad de cada revisión.",
    },
    {
      title: "Reportes y dashboard",
      description: "Métricas en tiempo real sobre cumplimiento y estado.",
      impact: "Decisiones basadas en datos, no en hojas de cálculo.",
    },
  ],
  timeline: [
    {
      label: "Semana 1",
      title: "Discovery",
      description: "Mapeo de procesos actuales y definición de alcance.",
    },
    {
      label: "Semana 2",
      title: "UX/UI",
      description: "Wireframes y diseño de flujos críticos.",
    },
    {
      label: "Semanas 3–7",
      title: "Desarrollo",
      description: "Construcción por módulos en sprints de 2 semanas.",
    },
    {
      label: "Semana 8",
      title: "QA & Staging",
      description: "Pruebas con datos reales en ambiente de staging.",
    },
    {
      label: "Semana 9",
      title: "Deploy",
      description: "Puesta en producción y capacitación al equipo.",
    },
  ],
  stack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Docker", "CI/CD"],
  methodology: [
    "Sprints de 2 semanas con demo al cierre",
    "Staging permanente para revisiones del cliente",
    "Updates semanales por escrito",
    "Acceso al repositorio desde el inicio",
  ],
  pricing: [
    {
      name: "Starter",
      price: "USD 9,500",
      description: "Módulos core: flota, documentos y alertas básicas.",
      featured: false,
    },
    {
      name: "Pro",
      price: "USD 16,000",
      description: "Suite completa con reportes avanzados e integraciones.",
      featured: true,
    },
  ],
  includes: [
    "Diseño UX/UI",
    "Desarrollo frontend y backend",
    "Base de datos relacional",
    "Almacenamiento de documentos en S3",
    "Sistema de alertas por email",
    "QA funcional",
    "Deploy en producción",
  ],
  notIncluded: [
    "Migración de expedientes físicos anteriores",
    "Costos de infraestructura AWS",
    "Soporte mensual post-lanzamiento",
    "Integraciones con sistemas de terceros no especificados",
    "Funcionalidades fuera del alcance inicial",
  ],
  cta: {
    title: "¿Arrancamos?",
    description: "Coordinemos el kickoff y definimos el alcance final juntos.",
    primaryButton: "Aprobar propuesta",
    secondaryButton: "Agendar llamada",
  },
};

export default isoDrive;
