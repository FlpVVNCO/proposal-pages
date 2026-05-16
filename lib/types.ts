export interface ProposalSummary {
  problem: string;
  solution: string;
  expectedResult: string;
}

export interface ProposalModule {
  title: string;
  description: string;
  impact: string;
}

export interface TimelineItem {
  label: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
}

export interface ProposalCTA {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface ProposalConfig {
  slug: string;
  client: string;
  title: string;
  mainProblem: string;
  summary: ProposalSummary;
  problems: string[];
  modules: ProposalModule[];
  timeline: TimelineItem[];
  stack: string[];
  methodology: string[];
  pricing: PricingPlan[];
  includes: string[];
  notIncluded: string[];
  cta: ProposalCTA;
}
