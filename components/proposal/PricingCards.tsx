"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PricingPlan } from "@/lib/types";
import clsx from "clsx";

interface PricingCardsProps {
  plans: PricingPlan[];
  cta: { primaryButton: string };
}

export function PricingCards({ plans, cta }: PricingCardsProps) {
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
            Inversión
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Planes y precios
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl">
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
                  ? "bg-[#3E157B] border-[#3E157B] text-white shadow-xl shadow-[#3E157B]/20"
                  : "bg-white border-[#E4D4FF] text-slate-900"
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
                    plan.featured ? "text-[#C9ADFF]" : "text-[#3E157B]/50"
                  )}
                >
                  {plan.name}
                </p>
                <p
                  className={clsx(
                    "text-4xl font-bold tracking-tight",
                    plan.featured ? "text-white" : "text-slate-900"
                  )}
                >
                  {plan.price}
                </p>
              </div>

              <p
                className={clsx(
                  "text-sm leading-relaxed flex-1 mb-6",
                  plan.featured ? "text-[#C9ADFF]" : "text-slate-500"
                )}
              >
                {plan.description}
              </p>

              <button
                className={clsx(
                  "w-full py-2.5 rounded-lg font-semibold text-sm transition-colors",
                  plan.featured
                    ? "bg-[#FFE566] text-[#3E157B] hover:bg-[#FFD700]"
                    : "bg-[#3E157B] text-white hover:bg-[#2D0F5C]"
                )}
              >
                {cta.primaryButton}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
