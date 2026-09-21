# Project Brief — Claims Operations Dashboard

## Design challenge

Claims representatives work across multiple claims at different stages. Each file may involve customer communication, inspections, policy or coverage review, damage estimates, documentation, payments, repair follow-up, and deadlines.

The enterprise UX problem is not simply “display claim data.” It is:

> **How can an internal workspace help a claims representative identify the next best action across a large caseload without losing the detail needed to make sound decisions?**

## Primary user hypothesis

### Claims Representative — Alex Morgan

Alex manages a mixed queue of auto and property claims. The workday includes new losses, scheduled inspections, unanswered customer communications, document review, coverage questions, estimates, and payment or repair follow-up.

Alex needs to answer these questions quickly:

1. What requires action today?
2. Which claim is becoming risky because of age, deadline, or contact gap?
3. What is blocking the next stage?
4. What changed since I last touched this claim?
5. What documents or information are missing?
6. What should I do next?
7. Where can I find the evidence supporting that action?

This is a proto-persona / workflow hypothesis, not an interview-derived persona.

## Business / operational goals

- reduce time spent hunting for the next file to work;
- make overdue actions and service gaps visible;
- support consistent follow-up;
- expose blockers before they become escalations;
- reduce repeated navigation between queue and file details;
- preserve enough context for sound reasoning rather than oversimplifying work into a score.

## UX principles

**Action before analytics.** Operational dashboards should lead with work to do, not decorative KPIs.

**Explain urgency.** A claim should never appear urgent without showing why.

**Keep customer context nearby.** Operational efficiency should not make the claimant disappear behind identifiers and status codes.

**Dense, not cramped.** Enterprise users can handle information density, but hierarchy and grouping must remain clear.

**Status and next action are different.** “Inspection” describes where the claim is. “Review field notes” describes what the rep should do next.

**Avoid black-box prioritization.** The prototype uses visible reasons such as overdue action, aging, missing documents, or contact gap instead of an unexplained AI score.
