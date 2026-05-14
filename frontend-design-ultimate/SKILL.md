---
name: frontend-design-ultimate
description: Create distinctive, production-grade frontend interfaces with craft and intention. Use this skill when the user asks to build web components, pages, applications, dashboards, landing pages, marketing sites, posters, artifacts, or any UI that needs visual polish. Triggers for React/Vue/HTML/CSS/JS, Tailwind, shadcn/ui, animation, design systems, styling, beautifying, or any frontend work where avoiding generic AI aesthetics matters. Routes by project type (app vs marketing) and framework.
---

# Frontend Design Ultimate

A synthesis of proven frontend design skills from Anthropic, Microsoft, Josh Thomas, Spencer Goldade, and the community. Produces interfaces with intent — never generic AI slop.

## Before You Code: The Intent Loop

**Do not write code until this loop is complete.** Defaults win when you skip this.

1. **Answer three questions** (ask user if unclear):
   - **Who is the human?** Not "users" — the actual person. Where are they? What is on their mind?
   - **What must they accomplish?** The verb. Grade submissions. Approve payment. Find the bug.
   - **What should this feel like?** In words that mean something. "Clean and modern" is default. "Warm like a bakery notebook" or "Cold like a terminal" is intent.

2. **Produce four required outputs** (write them out):
   - **Domain:** 5+ concepts, metaphors, vocabulary from this product's world.
   - **Color world:** 5+ colors that exist naturally in this domain's physical space.
   - **Signature:** One element — visual, structural, or interaction — that could only exist for THIS product.
   - **Defaults to reject:** 3 obvious choices for this interface type. Name them so you can avoid them.

3. **Propose direction and confirm:**
   ```
   Domain: [...]
   Color world: [...]
   Signature: [...]
   Rejecting: [default 1] → [alternative], [default 2] → [alternative], [default 3] → [alternative]
   Direction: [...]
   Does that direction feel right?
   ```
   Wait for confirmation before coding.

4. **Self-check before showing:**
   - **Swap test:** If you swapped the typeface/layout for your usual one, would anyone notice?
   - **Squint test:** Blur your eyes. Is hierarchy still visible?
   - **Signature test:** Can you point to actual components where your signature appears?
   - **Token test:** Do CSS variable names sound like they belong to this product's world?

For the full deep-dive on intent-driven design, read [`references/design-thinking.md`](references/design-thinking.md).

## Routing: What Are You Building?

Load the right reference after confirming direction:

| Context | Load |
|---|---|
| Dashboards, admin panels, SaaS products, internal tools, data-heavy interfaces | [`references/app-design.md`](references/app-design.md) |
| Landing pages, marketing sites, creative artifacts, posters, public-facing pages | [`references/marketing-design.md`](references/marketing-design.md) |
| Choosing a framework or stack | [`references/frameworks.md`](references/frameworks.md) |
| Need to check if output looks generic | [`references/anti-patterns.md`](references/anti-patterns.md) |

## Aesthetic Pillars

Apply these to every pixel. They are non-negotiable.

### Typography
- Pick fonts that are beautiful, unique, and interesting. Avoid Inter, Roboto, Arial, system fonts, Space Grotesk.
- Pair a distinctive display font with a refined body font.
- Weight and personality shape how the product feels before anyone reads a word.

### Color & Theme
- Commit to a cohesive aesthetic. Use CSS variables for consistency.
- Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- Every palette should feel like it came FROM somewhere (the product's physical world), not applied TO something.
- One accent color, used with intention, beats five colors used without thought.
- NEVER use cliched schemes (purple gradients on white, default Tailwind palette without customization).

### Motion
- Prioritize CSS-only solutions for HTML. Use Motion/Framer Motion for React when available.
- Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- Use scroll-triggering and hover states that surprise.
- Respect `prefers-reduced-motion`.

### Spatial Composition
- Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements.
- Generous negative space OR controlled density — commit to one.
- NEVER default to sidebar + card grid with icon-left-number-big-label-small every time.

### Backgrounds & Visual Details
- Create atmosphere and depth rather than defaulting to solid colors.
- Use gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, grain overlays.
- Surfaces must be barely different but still distinguishable. Study Vercel, Supabase, Linear for whisper-quiet elevation shifts.
- Borders must be light but not invisible. If borders are the first thing you notice, they're too strong.

## Core Principles

1. **Every choice must be a choice.** If your answer to "why this font/color/spacing?" is "it's common" — you defaulted. Defaults are invisible and compound into generic output.
2. **Sameness is failure.** If another AI given a similar prompt would produce the same output, you failed. Design from intent; sameness becomes impossible.
3. **Intent must be systemic.** Saying "warm" and using cold colors is not following through. Every token, surface, border, and motion must reinforce the stated intent.
4. **Infinite expression.** Every pattern has infinite expressions. A metric display can be a hero number, sparkline, gauge, progress bar, trend badge, or something new. No two designs should look the same.
5. **Match complexity to vision.** Maximalist designs need elaborate animations and effects. Minimalist designs need restraint, precision, and obsessive attention to spacing.

## Universal Anti-Patterns (Always Wrong)

- Dramatic drop shadows (`0 25px 50px` looks cheap)
- Arbitrary asymmetric padding (every value must be intentional)
- Thick decorative borders (2px+ for visual weight)
- Multiple accent colors used randomly
- Mixing depth strategies (pick borders OR shadows, not both randomly)
- Harsh borders as the first visual element you see
- Dramatic surface jumps (elevation changes should be whisper-quiet)
- Inconsistent spacing (clearest sign of no system)
- Generic CSS variable names (`--gray-700`, `--surface-2`) instead of domain-evocative names (`--ink`, `--parchment`)

For the expanded anti-pattern catalog and "AI slop" detection checklist, read [`references/anti-patterns.md`](references/anti-patterns.md).

## Workflow Summary

1. Understand the user, their task, and the feel they need.
2. Output Domain / Color world / Signature / Defaults to reject.
3. Propose direction. Wait for confirmation.
4. Route to app-design or marketing-design reference.
5. Implement. Match complexity to the aesthetic vision.
6. Run self-checks (swap, squint, signature, token) before showing.
7. Iterate if any check fails.

## Communication Style

- Be invisible. Don't announce modes or narrate process.
- Never say: "Let me explore the domain...", "Running the checks..."
- Instead: Jump into work. State suggestions with reasoning.
- Present direction proposals clearly. Ask for confirmation before generating code.
