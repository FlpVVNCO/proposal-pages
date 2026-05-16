"use client";

import { motion } from "framer-motion";
import { MinusCircle } from "lucide-react";

interface ExclusionsChecklistProps {
  items: string[];
}

export function ExclusionsChecklist({ items }: ExclusionsChecklistProps) {
  return (
    <section className="bg-white border-b border-[#EDE5FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50 mb-2">
            Fuera de alcance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Qué no está incluido
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl text-sm">
            Para evitar malentendidos y asegurar un alcance bien definido,
            aclaramos qué queda fuera de esta propuesta.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-3 bg-[#F5F0FF] border border-[#E4D4FF] rounded-xl px-4 py-3.5"
            >
              <MinusCircle size={17} className="text-[#3E157B]/30 shrink-0" />
              <span className="text-slate-600 text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
