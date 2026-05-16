"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { ProposalSummary } from "@/lib/types";

interface ExecutiveSummaryProps {
  summary: ProposalSummary;
}

const blocks = [
  {
    key: "problem" as const,
    label: "Problema",
    icon: AlertTriangle,
    iconColor: "text-[#3E157B]",
    labelColor: "text-[#3E157B]",
    iconBg: "bg-[#FFE566]",
    bg: "bg-[#FFF9D6]",
    border: "border-[#FFE566]",
  },
  {
    key: "solution" as const,
    label: "Solución",
    icon: Lightbulb,
    iconColor: "text-white",
    labelColor: "text-[#F5F0FF]",
    iconBg: "bg-[#3E157B]",
    bg: "bg-[#3E157B]",
    border: "border-[#3E157B]",
  },
  {
    key: "expectedResult" as const,
    label: "Resultado esperado",
    icon: TrendingUp,
    iconColor: "text-[#3E157B]",
    labelColor: "text-[#3E157B]",
    iconBg: "bg-[#F5F0FF]",
    bg: "bg-[#F5F0FF]",
    border: "border-[#E4D4FF]",
  },
];

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <section className="bg-[#F5F0FF] border-b border-[#EDE5FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50 mb-2">
            Resumen Ejecutivo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            El panorama completo en tres puntos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {blocks.map(
            ({ key, label, icon: Icon, iconColor, labelColor, iconBg, bg, border }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`${bg} border ${border} rounded-xl p-6`}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${iconBg} mb-4`}
                >
                  <Icon size={20} className={iconColor} />
                </div>
                <p
                  className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                    key === "solution" ? "text-[#C9ADFF]" : "text-[#3E157B]/60"
                  }`}
                >
                  {label}
                </p>
                <p
                  className={`font-medium leading-relaxed ${
                    key === "solution" ? "text-white" : "text-slate-800"
                  }`}
                >
                  {summary[key]}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
