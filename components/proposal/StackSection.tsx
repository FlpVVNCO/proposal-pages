"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2 } from "lucide-react";

interface StackSectionProps {
  stack: string[];
  methodology: string[];
}

export function StackSection({ stack, methodology }: StackSectionProps) {
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
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Stack técnico y metodología
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#2A1060] border border-[#3D2080] rounded-xl p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={18} className="text-[#FFE566]" />
              <h3 className="font-semibold text-white">Stack tecnológico</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-[#3E157B]/60 border border-[#5B2FA0]/50 text-[#C9ADFF] text-sm font-medium px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-[#2A1060] border border-[#3D2080] rounded-xl p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 size={18} className="text-[#FFE566]" />
              <h3 className="font-semibold text-white">Forma de trabajo</h3>
            </div>
            <ul className="space-y-3">
              {methodology.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={15}
                    className="text-[#FFE566] mt-0.5 shrink-0"
                  />
                  <span className="text-[#C9ADFF] text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
