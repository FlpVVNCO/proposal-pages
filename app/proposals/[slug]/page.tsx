import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProposalBySlug, getAllSlugs } from "@/lib/proposals";
import { ProposalHero } from "@/components/proposal/ProposalHero";
import { ExecutiveSummary } from "@/components/proposal/ExecutiveSummary";
import { ProblemCards } from "@/components/proposal/ProblemCards";
import { SolutionModules } from "@/components/proposal/SolutionModules";
import { Timeline } from "@/components/proposal/Timeline";
import { StackSection } from "@/components/proposal/StackSection";
import { PricingCards } from "@/components/proposal/PricingCards";
import { IncludesChecklist } from "@/components/proposal/IncludesChecklist";
import { ExclusionsChecklist } from "@/components/proposal/ExclusionsChecklist";
import { FinalCTA } from "@/components/proposal/FinalCTA";
import { QuboLogo } from "@/components/brand/QuboLogo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    return { title: "Propuesta no encontrada" };
  }

  return {
    title: `${proposal.title} · ${proposal.client}`,
    description: `Propuesta privada de desarrollo de software para ${proposal.client}.`,
    robots: { index: false, follow: false },
  };
}

export default async function ProposalPage({ params }: PageProps) {
  const { slug } = await params;
  const proposal = getProposalBySlug(slug);

  if (!proposal) {
    notFound();
  }

  return (
    <main>
      <ProposalHero proposal={proposal} />
      <section className="bg-[#140731] border-b border-[#2E1266] px-6 py-6">
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <p className="text-[#C9ADFF]/70 text-xs tracking-widest uppercase font-semibold">
            Propuesta preparada por
          </p>
          <QuboLogo variant="icon" theme="dark" className="shrink-0" />
          <span className="text-white/85 text-sm font-semibold tracking-tight">Qubo</span>
        </div>
      </section>
      <ExecutiveSummary summary={proposal.summary} />
      <ProblemCards problems={proposal.problems} />
      <SolutionModules modules={proposal.modules} />
      <Timeline items={proposal.timeline} />
      <StackSection stack={proposal.stack} methodology={proposal.methodology} />
      <PricingCards plans={proposal.pricing} proposalSlug={proposal.slug} />
      <IncludesChecklist items={proposal.includes} proposalSlug={proposal.slug} />
      <ExclusionsChecklist items={proposal.notIncluded} />
      <FinalCTA cta={proposal.cta} client={proposal.client} />
    </main>
  );
}
