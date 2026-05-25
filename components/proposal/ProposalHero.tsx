"use client";

import { motion } from "framer-motion";
import { ProposalConfig } from "@/lib/types";
import { QuboLogo } from "@/components/brand/QuboLogo";

interface ProposalHeroProps {
  proposal: ProposalConfig;
}

export function ProposalHero({ proposal }: ProposalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1C0942] border-b border-[#2E1266]">
      {/* Soft radial glow top-left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#F5F0FF]/10 blur-3xl pointer-events-none" />
      {/* Soft radial glow bottom-right */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#FFE566]/20 blur-3xl pointer-events-none" />

      {/* Left border accent */}
      <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b from-[#3E157B] via-[#7B3FD4] to-[#FFE566]" />

      <div className="relative max-w-5xl mx-auto px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <QuboLogo variant="full" theme="dark" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#FFE566] border border-[#FFD700] text-[#3E157B] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E157B]" />
          Propuesta privada · {proposal.client}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl"
        >
          {proposal.title}{" "}
          <span className="text-[#C9ADFF] font-normal">para</span>{" "}
          <span className="relative inline-block">
            {proposal.client}
            <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#FFE566] -z-10 rounded" />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-lg md:text-xl text-[#C9ADFF] leading-relaxed mb-12 max-w-2xl"
        >
          Diseñamos esta propuesta para resolver el desafío de{" "}
          <span className="text-white font-medium">
            {proposal.mainProblem}
          </span>{" "}
          con una solución robusta, escalable y lista para crecer con el
          negocio.
        </motion.p>

        {/*
          Action (temporalmente desactivada):
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex"
          >
            <button className="inline-flex items-center gap-2 text-[#C9ADFF] hover:text-white font-medium px-4 py-3 transition-colors text-sm">
              <Play size={15} />
              Ver demo
              <ArrowRight size={14} />
            </button>
          </motion.div>
        */}
      </div>
    </section>
  );
}
