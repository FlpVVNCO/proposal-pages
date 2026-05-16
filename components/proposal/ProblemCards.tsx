"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

interface ProblemCardsProps {
  problems: string[];
}

export function ProblemCards({ problems }: ProblemCardsProps) {
  return (
    <section className="bg-white border-b border-[#EDE5FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50 mb-2">
            Diagnóstico
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Problemas detectados
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Identificamos los puntos críticos que están afectando tu operación
            hoy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-[#F5F0FF] border border-[#E4D4FF] rounded-xl p-5"
            >
              <XCircle size={18} className="text-[#3E157B]/40 mt-0.5 shrink-0" />
              <p className="text-slate-700 font-medium leading-snug">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
