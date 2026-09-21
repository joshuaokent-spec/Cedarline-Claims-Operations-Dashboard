# Heuristic Evaluation & Revision Log

This portfolio sprint did not include moderated testing with claims representatives. Instead of inventing findings, I reviewed the prototype against enterprise-UX heuristics and documented the revisions.

## Evaluation questions

- Can a representative tell what needs attention without opening every file?
- Is urgency explained rather than hidden behind a score?
- Are claim stage and next action distinguishable?
- Can the user narrow a large queue quickly?
- Does the detail workspace keep claimant context near operational data?
- Can keyboard users reach the same core queue/detail workflow?
- Are controls honest about what the prototype actually supports?

## Findings and revisions

| Finding | UX risk | Revision |
| --- | --- | --- |
| A dashboard can easily become KPI-first rather than work-first. | Users spend time interpreting charts instead of acting. | Kept four summaries as filters and made the claim queue the primary workspace. |
| “Priority” alone does not explain why a file needs attention. | Users may distrust or ignore prioritization. | Added explicit signals: overdue action, contact gap, missing documents, high severity, and aging claim. |
| Stage and task were easy to conflate. | “Inspection” does not tell the rep what to do. | Displayed claim stage separately from a concrete next action. |
| Dense tables can hide important context. | Scanning becomes slow and error-prone. | Grouped claimant/claim ID, action/age, due state, and signals into predictable columns. |
| The first prototype lacked motion preferences. | Users who prefer reduced motion received unnecessary UI transitions. | Added reduced-motion handling. |
| Action buttons originally behaved like placeholders. | Dead controls make a prototype feel unfinished and misrepresent scope. | Core claim-detail actions now update the synthetic workspace state during the session. |
| Smaller screens collapse the detail panel below the queue. | Context can feel disconnected after selection. | The selected file remains highlighted and the detail workspace becomes a full-width section. |

## What remains unvalidated

This review does not prove that claims professionals would adopt the prioritization model. Production work would require interviews, observation, task-based usability testing, and validation of operational rules with claims subject-matter experts.
