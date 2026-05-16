"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/lib/types";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="bg-[#1C0942] border-b border-[#2E1266] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/50 mb-2">
            Plan de trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Timeline del proyecto
          </h2>
          <p className="text-[#C9ADFF] mt-3 max-w-xl">
            Estructura de entregas clara para que sepas exactamente qué esperar
            en cada etapa.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-3 bottom-3 w-[2px] bg-[#3D2080] hidden sm:block" />

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
                  <div className="w-9 h-9 rounded-full bg-[#FFE566] flex items-center justify-center text-[#3E157B] text-xs font-bold z-10 shadow-md shadow-[#000000]/20">
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#2A1060] border border-[#3D2080] rounded-xl p-5 hover:border-[#FFE566]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#FFE566]">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#C9ADFF] text-sm leading-relaxed">
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
