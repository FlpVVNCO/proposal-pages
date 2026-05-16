"use client";

import { motion } from "framer-motion";
import { Layers, Zap } from "lucide-react";
import { ProposalModule } from "@/lib/types";

interface SolutionModulesProps {
  modules: ProposalModule[];
}

export function SolutionModules({ modules }: SolutionModulesProps) {
  return (
    <section className="bg-[#140731] border-b border-[#2E1266] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/50 mb-2">
            Solución Propuesta
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Módulos del sistema
          </h2>
          <p className="text-[#C9ADFF] mt-3 max-w-xl">
            Cada módulo está diseñado para resolver un problema específico de tu
            operación.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="bg-[#2A1060] border border-[#3D2080] rounded-xl p-6 hover:border-[#FFE566]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#3E157B] shrink-0">
                  <Layers size={17} className="text-[#FFE566]" />
                </div>
                <h3 className="font-semibold text-white leading-snug mt-1">
                  {module.title}
                </h3>
              </div>
              <p className="text-[#C9ADFF] text-sm leading-relaxed mb-4">
                {module.description}
              </p>
              <div className="flex items-start gap-2 bg-[#FFE566]/20 border border-[#FFE566]/50 rounded-lg px-3 py-2.5">
                <Zap size={13} className="text-[#FFE566] mt-0.5 shrink-0" />
                <p className="text-[#FFE566] text-xs font-medium leading-snug">
                  {module.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
