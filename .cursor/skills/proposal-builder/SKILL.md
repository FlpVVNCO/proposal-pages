---
name: proposal-builder
description: Creates Qubo client proposal configs from structured client information. Use when the user asks to create, draft, add, or prepare a new proposal for a client in this proposal-pages project.
---

# Proposal Builder

## Purpose

Turn client/project information into a new `ProposalConfig` file without changing the reusable template.

## Workflow

1. Gather or infer the required proposal inputs:
   - client name
   - project name
   - main problem
   - business context
   - proposed modules
   - timeline
   - stack
   - methodology
   - pricing
   - includes
   - exclusions
   - CTA / next step

2. If price, timeline, or scope is missing, ask before inventing it. If the user asks for a draft anyway, mark uncertain content clearly as pending validation.

3. Create a new file in `lib/proposals/` named with a professional slug:
   - Use lowercase kebab-case.
   - Prefer client + project context, e.g. `acme-operations-platform.config.ts`.
   - For private-by-link delivery, suggest a less guessable slug if privacy matters.

4. The file must export a `ProposalConfig` object and match `lib/types.ts` exactly.

5. Register the proposal in `lib/proposals/index.ts`.

6. Validate:
   - Check imports and object shape.
   - Run linter/diagnostics for touched files when available.
   - Report the local route: `/proposals/[slug]`.

## Writing Guidelines

- Use Spanish by default unless the client content is in another language.
- Keep tone consultative, precise, and commercial.
- Write benefits in operational terms: traceability, speed, control, scalability, conversion, reliability.
- Avoid overpromising outcomes.
- Do not include sensitive internal notes in client-facing copy.
- Use visible brand casing `Qubo`.

## Output Expectations

When done, summarize:

- Proposal file created.
- Slug and route.
- Any assumptions or pending validations.
- Whether validation/lint passed.

Do not modify visual components, layout, branding assets, routes, or authentication unless the user explicitly asks.
