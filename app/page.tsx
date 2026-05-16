import Link from "next/link";
import { getAllSlugs, getProposalBySlug } from "@/lib/proposals";
import { ArrowRight, Lock } from "lucide-react";

export default function HomePage() {
  const slugs = getAllSlugs();

  return (
    <main className="min-h-screen bg-[#F5F0FF] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 bg-[#FFE566] rounded-lg flex items-center justify-center">
            <Lock size={15} className="text-[#3E157B]" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#3E157B]/50">
              Uso interno
            </p>
            <h1 className="text-slate-900 font-bold text-lg leading-none">
              Proposal Pages
            </h1>
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-8">
          Seleccioná una propuesta para previsualizar o compartir con el
          cliente.
        </p>

        <div className="space-y-3">
          {slugs.map((slug) => {
            const proposal = getProposalBySlug(slug);
            if (!proposal) return null;
            return (
              <Link
                key={slug}
                href={`/proposals/${slug}`}
                className="flex items-center justify-between bg-white border border-[#E4D4FF] rounded-xl px-5 py-4 hover:border-[#3E157B]/40 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-[#3E157B] transition-colors">
                    {proposal.client}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    /proposals/{slug}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#E4D4FF] group-hover:text-[#3E157B] group-hover:translate-x-1 transition-all"
                />
              </Link>
            );
          })}
        </div>

        <p className="text-[#3E157B]/30 text-xs mt-10 text-center">
          Para agregar una nueva propuesta, creá un archivo en{" "}
          <code className="bg-white border border-[#E4D4FF] text-[#3E157B]/60 px-1.5 py-0.5 rounded">
            lib/proposals/
          </code>
        </p>
      </div>
    </main>
  );
}
