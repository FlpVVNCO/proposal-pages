"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, Play } from "lucide-react";
import { ProposalConfig } from "@/lib/types";

interface ProposalHeroProps {
  proposal: ProposalConfig;
}

export function ProposalHero({ proposal }: ProposalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#EDE5FF]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#3E157B 1px, transparent 1px), linear-gradient(90deg, #3E157B 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3E157B] via-[#7B3FD4] to-[#FFE566]" />

      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#F5F0FF] border border-[#E4D4FF] text-[#3E157B] text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E157B] animate-pulse" />
          Propuesta privada · {proposal.client}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6 max-w-4xl"
        >
          {proposal.title}{" "}
          <span className="text-slate-400 font-normal">para</span>{" "}
          <span className="text-[#3E157B]">{proposal.client}</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl"
        >
          Diseñamos esta propuesta para resolver el desafío de{" "}
          <span className="text-slate-700 font-medium">
            {proposal.mainProblem}
          </span>{" "}
          con una solución robusta, escalable y lista para crecer con tu
          negocio.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="flex flex-wrap gap-3"
        >
          <button className="inline-flex items-center gap-2 bg-[#3E157B] hover:bg-[#2D0F5C] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
            <CheckCircle size={16} />
            {proposal.cta.primaryButton}
          </button>
          <button className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F0FF] text-slate-800 font-semibold px-6 py-3 rounded-lg border border-[#E4D4FF] transition-colors text-sm">
            <Calendar size={16} />
            {proposal.cta.secondaryButton}
          </button>
          <button className="inline-flex items-center gap-2 text-slate-400 hover:text-[#3E157B] font-medium px-4 py-3 transition-colors text-sm">
            <Play size={15} />
            Ver demo
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
