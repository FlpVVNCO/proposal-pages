"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/lib/types";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
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
            Plan de trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Timeline del proyecto
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
            Estructura de entregas clara para que sepas exactamente qué esperar
            en cada etapa.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-3 bottom-3 w-[2px] bg-[#E4D4FF] hidden sm:block" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                {/* Dot */}
                <div className="relative shrink-0 hidden sm:flex">
                  <div className="w-9 h-9 rounded-full bg-[#3E157B] flex items-center justify-center text-white text-xs font-bold z-10">
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#F5F0FF] border border-[#E4D4FF] rounded-xl p-5 hover:border-[#3E157B]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
