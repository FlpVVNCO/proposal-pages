"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface IncludesChecklistProps {
  items: string[];
  proposalSlug?: string;
}

const CARLOS_SLUG = "carlos-alvarado-salud-domicilio";

const carlosOptionTwoExtras = [
  "Si se elige la Opción 2, se incorpora trabajo progresivo de integración con MINSAL, ISAPRES o Fonasa según disponibilidad de accesos y documentación técnica oficial.",
  "Si se elige la Opción 2, se incorpora la evaluación e implementación de validación biométrica con Registro Civil cuando exista acceso formal a la documentación requerida.",
];

export function IncludesChecklist({ items, proposalSlug }: IncludesChecklistProps) {
  const showCarlosExtras = proposalSlug === CARLOS_SLUG;

  return (
    <section className="bg-[#1C0942] border-b border-[#2E1266] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/50 mb-2">
            Alcance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Qué incluye la propuesta
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-3 bg-[#2A1060] border border-[#3D2080] rounded-xl px-4 py-3.5"
            >
              <CheckCircle2 size={17} className="text-[#FFE566] shrink-0" />
              <span className="text-[#F5F0FF] text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {showCarlosExtras && (
          <div className="mt-8">
            <div className="mb-4 border-t border-dashed border-[#5B2FA0]/70" />
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/60 mb-4">
              Excepciones si se elige Opción 2
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {carlosOptionTwoExtras.map((item, i) => (
                <motion.div
                  key={`option-two-extra-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-[#2A1060] border border-[#7B3FD4]/60 rounded-xl px-4 py-3.5"
                >
                  <CheckCircle2 size={17} className="text-[#FFE566] shrink-0" />
                  <span className="text-[#F5F0FF] text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
