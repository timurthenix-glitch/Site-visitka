# App Design Reference

Use this reference when building:
- Dashboards and admin interfaces
- Settings panels and configuration screens
- Internal tools and SaaS products
- Data-heavy interfaces with tables, forms, lists
- Any interface where users work repeatedly

## App Design Principles

### Density Is a Feature

Users spend hours in these interfaces. Optimize for efficiency:
- Information density should match task frequency. High-frequency tasks = high density.
- Reduce clicks for common actions. Inline editing > modal forms for frequent changes.
- Keyboard shortcuts and focus management matter.

### Navigation Is the Product

Navigation isn't scaffolding — it IS the product. It teaches users how to think about the space.
- Group by workflow, not by entity type.
- Show where the user is. Show where they can go.
- Collapse what is irrelevant, expand what is contextually useful.
- Consider command palettes (Cmd+K) for power users.

### Data Feels Like Presentation

You have numbers, show numbers — but show what they mean:
- A number on screen is not design. The question is: what will they do with it?
- Use sparklines for trends, progress rings for status, deltas for comparisons.
- Empty states should guide action, not just say "No data."
- Error states should explain what happened and how to fix it.

### Tables

- Default to readable density. Not too cramped, not too spacious.
- Sticky headers are non-negotiable for scrollable tables.
- Column widths should reflect content type (dates narrow, descriptions wide).
- Row hover states help with scanability.
- Actions should be discoverable but not noisy. Hover-reveal or compact icon buttons.
- Sort and filter should be obvious, not hidden in menus.

### Forms

- Label above input (not inline, not placeholder-only).
- Group related fields visually.
- Inline validation on blur, not on every keystroke.
- Error messages should be specific and actionable.
- Primary action should be visually dominant; secondary actions should be muted.
- Consider multi-step forms for complex data entry. Show progress.

### Dashboards

- The most important metric should be the biggest.
- Related metrics should be visually grouped.
- Charts should default to the most useful time range.
- Real-time data needs subtle update indicators (not flashing).
- Customizable layouts are appreciated by power users.

### Settings

- Organize by frequency of change, not by technical category.
- Dangerous actions (delete, deactivate) should be visually separated and require confirmation.
- Defaults should be sensible. Most users never change settings.
- Search within settings for large configuration surfaces.

### Spacing & Density for Apps

- Tighter spacing than marketing sites. Users scan, they don't read.
- Consistent rhythm: 4px or 8px base grid.
- Section separation via subtle background shifts or hairline borders, not large gaps.
- Information hierarchy through size, weight, and color — not just size.

### Feedback & States

Every interactive element needs defined states:
- Default, hover, active, disabled, loading, error, success
- Loading states should show progress, not just spinners
- Success states should be brief and unobtrusive (toast > modal)
- Error states should recover gracefully

## App Anti-Patterns

- Dashboards that are just grids of unrelated charts
- Tables with 20+ visible columns
- Forms with 50 fields on one page
- Settings organized by database schema
- Navigation with 15+ top-level items
- Modals on top of modals
- No keyboard navigation support
- Destructive actions without confirmation
- Success messages that require dismissal
- Loading screens with no progress indication
