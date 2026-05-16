"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface IncludesChecklistProps {
  items: string[];
}

export function IncludesChecklist({ items }: IncludesChecklistProps) {
  return (
    <section className="bg-[#F5F0FF] border-b border-[#EDE5FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50 mb-2">
            Alcance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
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
              className="flex items-center gap-3 bg-white border border-[#E4D4FF] rounded-xl px-4 py-3.5"
            >
              <CheckCircle2 size={17} className="text-[#3E157B] shrink-0" />
              <span className="text-slate-700 text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
