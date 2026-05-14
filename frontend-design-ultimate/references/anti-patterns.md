# Anti-Patterns & AI Slop Detection

A catalog of generic output signals and how to avoid them. Reference this when self-checking before showing output to the user.

## What Is "AI Slop"?

AI slop is the visual equivalent of spam — output that follows all the rules but has no intent behind it. It is technically correct and emotionally empty. It happens when models default to the most common patterns in their training data.

## The Slop Checklist

Run this checklist on every output. If you check more than 2 boxes, iterate.

### Typography Slop
- [ ] Inter, Roboto, Arial, system-ui, or Space Grotesk as the primary font without justification
- [ ] Single font family for everything (no display/body pairing)
- [ ] Font weights only at 400 and 700
- [ ] No consideration of x-height, character, or personality
- [ ] Line-height always `1.5` or `1.6` without adjustment for measure or font

### Color Slop
- [ ] Purple-to-blue gradient on white background
- [ ] Default Tailwind palette used directly (`bg-blue-500`, `text-gray-700`)
- [ ] Five or more accent colors with no hierarchy
- [ ] Gray-scale neutrals that feel cold and clinical without intent
- [ ] No dark mode consideration, or dark mode that just inverts colors
- [ ] Gradients used as decoration rather than atmosphere

### Layout Slop
- [ ] Sidebar (250px) + topbar (64px) + card grid (3-col)
- [ ] Hero section + 3 feature cards + CTA section (the "SaaS starter" template)
- [ ] Metric cards with icon-left, number-big, label-small
- [ ] Equal-height cards in a grid for heterogeneous content
- [ ] Centered single-column text for everything
- [ ] Container max-width `1200px` or `1280px` without consideration of content

### Component Slop
- [ ] Rounded corners at `8px` or `12px` on everything
- [ ] Shadow `0 4px 6px -1px rgba(0,0,0,0.1)` on every card
- [ ] Borders that are either invisible or too strong (`1px solid #e5e7eb` everywhere)
- [ ] Buttons with the same style for primary, secondary, and tertiary
- [ ] Form inputs that are just rectangles with a border

### Motion Slop
- [ ] `fadeIn` animation on every element as it enters viewport
- [ ] Hover effects that only change opacity or scale slightly
- [ ] No animation-delay orchestration (everything animates at once)
- [ ] Transitions at `300ms` with `ease-in-out` on every property
- [ ] Parallax scroll on every section because it "adds depth"

### Structural Slop
- [ ] Navigation that is just a list of links across the top
- [ ] Footer with the 4-column link grid (Product, Company, Resources, Legal)
- [ ] Dashboard that is just a grid of charts
- [ ] Settings page that is just a vertical stack of form fields
- [ ] No empty states, loading states, or error states designed

## Universal Anti-Patterns

These are always wrong regardless of context:

1. **Dramatic drop shadows.** `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)` looks cheap and dated. Prefer subtle elevation or no shadow.
2. **Arbitrary asymmetric padding.** If padding values don't relate to each other (e.g., `13px` and `27px` with no system), they are arbitrary.
3. **Thick decorative borders.** Borders at `2px+` used for visual weight instead of structural separation.
4. **Multiple accent colors.** One accent, used consistently. Multiple accents without hierarchy create noise.
5. **Mixing depth strategies.** Pick borders OR shadows for elevation, not both randomly.
6. **Harsh borders.** If borders are the first thing you see, they're too strong.
7. **Dramatic surface jumps.** Elevation changes should be whisper-quiet. Study Linear, Vercel, Supabase.
8. **Inconsistent spacing.** The clearest sign of no system. Every gap should be a multiple of a base unit.
9. **Generic token names.** `--gray-700`, `--surface-2`, `--text-primary` say nothing about the product. `--ink`, `--parchment`, `--crust`, `--oven` do.
10. **Default thinking.** Reaching for familiar patterns without considering context. "Every dashboard needs a sidebar" is default thinking.

## Framework-Specific Slop

### Tailwind CSS
- Using `bg-gray-50` through `bg-gray-900` as-is without customizing the palette
- `rounded-lg` on every element
- `shadow-md` on every card
- `hover:bg-gray-100` as the only hover state
- Utility-class soup with no component abstraction

### shadcn/ui
- Using default component styles without overriding tokens
- Not customizing the CSS variables in `globals.css`
- Mixing shadcn defaults with a completely different aesthetic

### React / Next.js
- `useState` + `useEffect` for everything (default to simpler patterns)
- Server Components that don't need to be server components
- Client Components that don't need client interactivity
- Default `layout.tsx` with no thought to route structure

### Vue
- Options API for new components (prefer Composition API with `<script setup>`)
- Global state without Pinia or composables
- Scoped styles that duplicate utility classes

## How to Escape Slop

1. **Name your intent before you open the editor.** Write 3 sentences describing the feeling.
2. **Pick one constraint.** "No rectangles." "Only one color plus black and white." "No gradients."
3. **Steal from the physical world.** What material is this interface made of? Paper? Metal? Glass? Fabric?
4. **Design the loading state first.** If the loading state is interesting, the rest will be too.
5. **Remove something.** The best designs often come from subtraction, not addition.
