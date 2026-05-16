"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { ProposalCTA } from "@/lib/types";
import { QuboLogo } from "@/components/brand/QuboLogo";

interface FinalCTAProps {
  cta: ProposalCTA;
  client: string;
}

export function FinalCTA({ cta, client }: FinalCTAProps) {
  return (
    <section className="bg-[#3E157B] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/50 mb-4">
            Próximos pasos · {client}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {cta.title}
          </h2>
          <p className="text-[#C9ADFF] leading-relaxed mb-10">
            {cta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 bg-[#FFE566] hover:bg-[#FFD700] text-[#3E157B] font-bold px-7 py-3.5 rounded-lg transition-colors">
              <CheckCircle size={17} />
              {cta.primaryButton}
              <ArrowRight size={15} />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg border border-white/20 transition-colors">
              <Calendar size={17} />
              {cta.secondaryButton}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 pt-8 border-t border-[#5B2FA0] text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <QuboLogo variant="full" theme="dark" className="scale-90" />
          <p className="text-white/30 text-xs">
            Esta es una propuesta privada y confidencial. Preparada exclusivamente
            para{" "}
            <span className="text-white/60 font-medium">{client}</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
