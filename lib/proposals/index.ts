import { ProposalConfig } from "@/lib/types";
import taskrabbitApp from "./taskrabbit-app.config";
import isoDrive from "./iso-drive.config";

/**
 * Registry of all available proposals.
 * To add a new proposal:
 *   1. Create a new file: lib/proposals/your-slug.config.ts
 *   2. Import it here and add it to the array below.
 */
const proposals: ProposalConfig[] = [taskrabbitApp, isoDrive];

export function getProposalBySlug(slug: string): ProposalConfig | undefined {
  return proposals.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return proposals.map((p) => p.slug);
}

export default proposals;
