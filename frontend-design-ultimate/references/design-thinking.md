# Design Thinking Deep Dive

This reference expands the Intent Loop from SKILL.md with extended techniques, examples, and escape hatches for when you feel yourself defaulting.

## The Intent Questions (Expanded)

### Who is this human?

Go deeper than demographics. Ask:
- Where are they physically when they open this?
- What device? What posture? (Lean-back tablet vs lean-forward desktop)
- What did they do 5 minutes ago?
- What will they do 5 minutes after?
- What emotional state are they likely in?
- What do they already know? What jargon do they use?

### What must they accomplish?

Find the verb. Not "use the dashboard" but:
- "Find the deployment that failed"
- "Approve the invoice that needs paying"
- "Compare this quarter to last quarter"
- "Create a post that gets engagement"

The verb shapes hierarchy. The most frequent verb should be the most accessible.

### What should this feel like?

Ban these words: clean, modern, sleek, professional, user-friendly, intuitive.

Use these instead:
- Warm like a bakery notebook / cold like a Bloomberg terminal
- Dense like a trading floor / calm like a reading app
- Playful like a toy store / serious like a legal brief
- Organic like a garden / geometric like a circuit board
- Raw like a workshop / refined like a gallery

Write 2-3 sentences that describe the feeling in terms of physical spaces, materials, temperatures, or textures.

## The Four Required Outputs (Expanded)

### Domain

Mine 5+ concepts from the product's world. Not features — territory.

Example for a bakery management tool:
- Dough, fermentation, scoring, crumb structure, steam, oven spring
- Morning rush, pre-orders, wholesale accounts, seasonal menus
- Warm hands, flour dust, the smell of yeast, the sound of the timer

Example for a devops monitoring dashboard:
- Incident response, on-call rotation, MTTR, blast radius, runbooks
- Alert fatigue, noise vs signal, correlation, cascading failures
- The feeling of a pager going off at 3am, the adrenaline of a rollback

### Color World

What colors exist naturally in this product's domain if it were a physical space?

Example for a bakery:
- Golden crust, cream butter, dark molasses, pale flour, deep coffee brown, copper pots, soft linen

Example for a devops tool:
- Server rack black, status LED green/amber/red, cable blue, terminal phosphor, steel gray, warning orange

Your final palette should feel like it was extracted from this list, not imported from a color wheel.

### Signature

One element that could only exist for this product. It must be:
- **Visual** (a unique data visualization, a custom cursor, a texture)
- **Structural** (an unusual navigation model, a non-rectangular layout)
- **Interaction** (a gesture, a transition, a micro-interaction tied to domain)

If you can't name one, keep exploring the domain. The signature emerges from deep understanding.

Examples:
- Bakery tool: A "crumb structure" visualization for order density throughout the day
- Devops tool: A "blast radius" map that shows downstream impact of a failing service
- Portfolio: A cursor that leaves a fading ink trail (for a calligrapher)

### Defaults to Reject

Name 3 obvious choices. You can't avoid patterns you haven't named.

Common defaults to reject by interface type:

**Dashboards:**
- Sidebar + topbar + card grid
- Metric cards with icon-left-number-big-label-small
- Blue primary color + gray secondary

**Landing pages:**
- Hero with gradient background + 3 feature cards below
- Inter font + purple accents
- Generic "trusted by" logo bar

**E-commerce:**
- Product grid with equal-height cards
- Star ratings + "add to cart" buttons
- Standard category sidebar

For each default, propose a specific alternative rooted in your domain research.

## Self-Check Techniques

### The Swap Test

If you swapped the typeface for your usual one, would anyone notice? The places where swapping wouldn't matter are the places you defaulted.

Apply this to:
- Typeface
- Layout structure
- Color palette
- Spacing scale
- Component patterns

### The Squint Test

Blur your eyes. Can you still perceive hierarchy? Is anything jumping out harshly? Craft whispers. If something screams for attention, it is probably unrefined.

### The Signature Test

Can you point to specific elements where your signature appears? Not "the overall feel" — actual components, CSS rules, or DOM structures. A signature you can't locate doesn't exist.

### The Token Test

Read your CSS variables out loud. Do they sound like they belong to this product's world?

```css
/* Default (bad) */
--color-primary: #3b82f6;
--color-surface: #f8fafc;
--color-text: #1e293b;

/* Domain-evocative (good) */
--dough: #e8d5b5;
--crust: #c17f4e;
--flour: #faf6f0;
--oven: #2a2520;
--steam: rgba(255, 255, 255, 0.4);
```

## When You Feel Yourself Defaulting

Signs you're defaulting:
- You reach for the same font you used last time
- The layout looks like the last project with different colors
- You describe choices as "clean" or "it works"
- You're explaining decisions with "usually" or "most apps"

Escape hatches:
1. **Change the medium.** If you're thinking in rectangles, sketch in circles. If you're thinking in 2D, add depth.
2. **Change the constraint.** What if there were no sidebar? No navigation? No cards?
3. **Change the metaphor.** What if this were a physical object? A book? A tool? A toy?
4. **Zoom in.** Pick one element and design it as if it were the whole interface.
5. **Look at unrelated references.** A perfume website, a construction equipment manual, a children's book.

## Domain → Design Translation Examples

| Domain | Metaphor | Layout | Typography | Color | Signature |
|---|---|---|---|---|---|
| DevOps monitoring | Control room | Dense, grid-based, status-driven | Monospace data + clean sans labels | LED greens, warning amber, alert red, rack black | Blast radius map |
| Bakery management | Workshop + kitchen | Warm, irregular, hand-arranged | Serif headings + rounded sans body | Golden browns, cream, copper, flour white | Fermentation timeline as visual |
| Legal document review | Library + desk | Split pane, focused reading | Serious serif, precise spacing | Parchment, ink, mahogany, gold leaf | Margin annotations with ink texture |
| Fitness tracking | Laboratory + field | High contrast, metric-forward | Athletic condensed + clean body | Neon accent on dark, sweat-warm tones | Heartbeat pulse as progress indicator |
| Creative portfolio | Gallery + studio | Asymmetric, whitespace-driven | Expressive display + neutral body | White walls, concrete, one artwork accent | Cursor as brush stroke |

## Final Rule

If you remove the product name from your design description and it could apply to anything, it is generic. Start over.
