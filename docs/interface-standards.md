# Enterprise Interface Standards

A lightweight set of standards used to keep the claims workspace consistent.

## Interaction principles

**Action first** — Primary surfaces should help a user decide what to do next.

**Explain system judgments** — Never show an unexplained urgency or risk score when the underlying operational reason can be displayed.

**Preserve customer context** — Claimant name, contact recency, and preferred contact method remain close to operational information.

**Status is not action** — Workflow stage and next task are separate fields.

**Dense, not cramped** — Experienced users can handle density; hierarchy, spacing, and alignment still need to reduce visual search.

## Component rules

### Workload summary
Use as a filter into work, not as decorative analytics.

### Queue table
Keep columns stable. Avoid moving important signals between views.

### Signal badge
Always use explicit text. Color supports the label but never replaces it.

### Detail workspace
Lead with next action, then supporting context and blockers.

### Primary action
Use only for the most likely next workflow action. Secondary actions should not visually compete.

## Responsive rules

- Keep the operational table scrollable rather than compressing critical content below readable size.
- Collapse the detail panel below the queue when side-by-side space is unavailable.
- Stack filter controls progressively.
- Preserve selected state when layout changes.
