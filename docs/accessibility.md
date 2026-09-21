# Accessibility Approach

This prototype is accessibility-informed but has not been formally audited.

## Implemented considerations

- Skip link to the main work queue.
- Visible keyboard focus treatment.
- Native search, select, and button controls.
- Quick-filter buttons expose pressed state with `aria-pressed`.
- Result count uses a live status region.
- Selected-claim detail updates in a live region.
- Claim rows support keyboard activation in addition to pointer selection.
- Color is not the only indication of overdue state: the table also displays the text “Overdue.”
- Responsive layouts collapse filters and the detail workspace rather than clipping them.
- Reduced-motion preferences are respected.

## Dense-table tradeoffs

Enterprise tables can be efficient for experienced users but create accessibility and reflow challenges. The prototype therefore treats the table as a desktop-first operational pattern and allows horizontal scrolling rather than shrinking text to unreadable sizes.

A production version should evaluate an alternate card/list presentation for high zoom and narrow viewports.

## Production testing needed

- Keyboard-only walkthrough of every queue/filter action.
- Screen-reader review of table navigation and selected-file updates.
- 200% and 400% zoom/reflow testing.
- Contrast validation for priority and signal badges.
- Validation of any modal, drawer, or inline-edit patterns added later.
- Testing with actual claims employees who use assistive technology.
