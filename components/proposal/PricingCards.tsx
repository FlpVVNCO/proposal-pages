"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PricingPlan } from "@/lib/types";
import clsx from "clsx";

interface PricingCardsProps {
  plans: PricingPlan[];
}

function renderBoldText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderDescription(text: string) {
  return text.split("\n\n").map((paragraph, index) => (
    <p key={index} className={index > 0 ? "mt-4" : undefined}>
      {renderBoldText(paragraph)}
    </p>
  ));
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <section className="bg-[#140731] border-b border-[#2E1266] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9ADFF]/50 mb-2">
            Inversión
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Planes y precios
          </h2>
          <p className="text-[#C9ADFF] mt-3 max-w-xl">
            Elegí el plan que mejor se ajusta al alcance inicial de tu proyecto.
          </p>
        </motion.div>

        <div
          className={clsx(
            "grid gap-6",
            plans.length === 1
              ? "max-w-sm"
              : plans.length === 3
              ? "sm:grid-cols-3"
              : "sm:grid-cols-2"
          )}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={clsx(
                "relative rounded-2xl border p-7 flex flex-col",
                plan.featured
                  ? "bg-[#3E157B] border-[#5B2FA0] text-white shadow-xl shadow-[#000000]/30"
                  : "bg-[#2A1060] border-[#3D2080] text-white"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1 bg-[#FFE566] text-[#3E157B] text-xs font-bold px-3 py-1 rounded-full">
                    <Star size={11} fill="currentColor" />
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={clsx(
                    "text-xs font-semibold tracking-widest uppercase mb-1",
                    plan.featured ? "text-[#C9ADFF]" : "text-[#C9ADFF]/70"
                  )}
                >
                  {plan.name}
                </p>
                <p
                  className={clsx(
                    "text-4xl font-bold tracking-tight",
                    "text-white"
                  )}
                >
                  {plan.price}
                </p>
              </div>

              <div
                className={clsx(
                  "text-sm leading-relaxed flex-1 mb-6",
                  plan.featured ? "text-[#C9ADFF]" : "text-[#C9ADFF]"
                )}
              >
                {renderDescription(plan.description)}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
