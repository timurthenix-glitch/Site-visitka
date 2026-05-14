# Framework & Stack Reference

Use this reference to route implementation by framework and to avoid framework-specific anti-patterns.

## Choosing a Stack

If the user hasn't specified, propose based on project type:

| Project Type | Suggested Stack |
|---|---|
| Single landing page, portfolio, poster | HTML + CSS + vanilla JS |
| Component, widget, embed | React or Vue (user's choice) |
| Full web app, dashboard | React + TypeScript + Tailwind |
| Marketing site with blog | Next.js or Astro |
| E-commerce | Next.js or Shopify Hydrogen |
| Real-time collaborative app | React + WebSockets + state library |

## React / Next.js

### Patterns
- Use Server Components by default. Move to Client Components only when interactivity is needed.
- Use `use client` sparingly. Each client component adds bundle weight.
- Prefer composition over props drilling. Use context or state library for deep data.
- Custom hooks for reusable logic. Keep components focused on rendering.

### Styling
- Tailwind CSS v4 with CSS-first config (`@theme`) is preferred.
- Use CSS variables for theme tokens. Reference them in Tailwind with `bg-[var(--token)]`.
- `cn()` utility (clsx + tailwind-merge) for conditional classes.
- Never hardcode colors. Always use design tokens.

### Animation
- Framer Motion for React-specific orchestration (stagger, layout animations, gestures).
- CSS transitions for simple hover/focus states.
- `prefers-reduced-motion` wrapper for all motion.

### State
- Local state: `useState`, `useReducer`
- Shared state: Zustand (lightweight) or Jotai (atomic)
- Server state: TanStack Query (React Query)
- Form state: React Hook Form + Zod

### Accessibility
- All interactive elements must be keyboard accessible.
- Use semantic HTML. `button` for actions, `a` for navigation.
- ARIA labels only when semantic HTML is insufficient.
- Focus indicators must be visible.

## Vue

### Patterns
- Use Composition API with `<script setup>` for all new components.
- Composables for reusable logic (Vue's equivalent of hooks).
- Props should be typed with `defineProps<{}>()`.
- Emit events with `defineEmits<{}>()`.

### Styling
- Scoped styles are fine for component-specific CSS.
- Use CSS variables for theming.
- Tailwind works well with Vue via `@apply` or utility classes.

### State
- Pinia for global state (official, type-safe).
- Composables for shared reactive logic.
- Provide/Inject for deep component trees.

## HTML / CSS / Vanilla JS

### When to Use
- Prototypes, single pages, embeds, email templates, when framework overhead is unnecessary.

### Patterns
- CSS custom properties (variables) for theming.
- CSS Grid and Flexbox for layout.
- Progressive enhancement: core functionality works without JS.
- CSS-only animations where possible (performance).

### Animation
- `@keyframes` for orchestrated animations.
- `transition` for hover/focus states.
- `IntersectionObserver` for scroll-triggered effects (lightweight, no library needed).

## Tailwind CSS v4

### Config
- Use CSS-first configuration with `@theme`.
- Define custom tokens in CSS, not JS config.

```css
@theme {
  --color-crust: #c17f4e;
  --color-dough: #e8d5b5;
  --font-display: "Playfair Display", serif;
}
```

### Best Practices
- Use arbitrary values sparingly (`w-[123px]`). If used more than twice, make a token.
- Group related utilities. Extract to components when repeated.
- Don't disable Preflight without understanding the consequences.
- Use `@layer components` for repeated patterns.

### Anti-Patterns
- `!important` on utilities (`!bg-red-500`)
- Inline arbitrary values everywhere instead of tokens
- Disabling Preflight and then fighting browser defaults
- Not using `cn()` or `tailwind-merge` for dynamic classes

## shadcn/ui

### Setup
- Install with the CLI: `npx shadcn@latest add [component]`
- Customize CSS variables in `globals.css` before adding components.
- Components are copied to your codebase — modify them freely.

### Customization
- Override tokens, not individual component styles.
- Extend components with `className` prop when needed.
- Use the `cn()` utility for conditional overrides.

### Anti-Patterns
- Using default shadcn styles without customization (looks like every other shadcn app)
- Adding 30 components when you need 5
- Not overriding the default color tokens

## Design System Integration

### Tokens
Define tokens in this priority:
1. Colors (brand, semantic, neutrals)
2. Typography (font families, sizes, weights, line-heights)
3. Spacing (base unit, scale)
4. Radii (corner rounding)
5. Shadows (elevation system)
6. Motion (durations, easings)

### Components
Build in this order:
1. Primitives (button, input, card, badge)
2. Composites (form group, data table, modal)
3. Patterns (empty state, error boundary, loading skeleton)
4. Features (header, sidebar, footer)

### Documentation
- Every token needs a name that evokes the product world.
- Every component needs usage examples and prop documentation.
- Every pattern needs do/don't examples.

## Performance Checklist

- [ ] Images are optimized (WebP/AVIF, lazy loading, proper sizing)
- [ ] Fonts are subsetted and use `font-display: swap`
- [ ] CSS is purged of unused styles
- [ ] JS bundles are split by route
- [ ] Core Web Vitals are within thresholds (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] Animations use `transform` and `opacity` only (GPU-accelerated)
- [ ] No layout thrashing (read layout properties, then write)
