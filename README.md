# Cedarline Claims Operations Dashboard

An internal **enterprise UX case study** for claims representatives managing a high-volume workload across auto and property claims.

**Enterprise UX · Workflow design · Information architecture · Accessibility · Data-rich interfaces · HTML/CSS/JavaScript**

> **Cedarline Mutual is fictional.** The 300-claim dataset is fully synthetic and contains no real customer or claim information.

## At a glance

| | |
| --- | --- |
| **Role** | UX Designer + front-end prototyper |
| **Project type** | Rapid enterprise UX portfolio concept |
| **Primary user** | Claims representative managing a mixed caseload |
| **Core problem** | Help the rep identify what needs action next, why, and what information is needed |
| **Prototype** | Searchable/filterable work queue + claim detail workspace |
| **Dataset** | 300 synthetic auto/property claims |
| **Tools / tech** | Figma, HTML, CSS, JavaScript, JSON, GitHub |

## Project thesis

Claims representatives do not primarily need “more charts.” They need to know:

> **What needs my attention next, why does it need attention, and what information do I need to act?**

The dashboard therefore prioritizes **action required** rather than decorative analytics.

The queue surfaces visible operational reasons for attention:

- overdue actions;
- customer-contact gaps;
- missing documentation;
- aging claims;
- high-severity losses;
- claim priority and stage.

The prototype deliberately avoids an unexplained AI or risk score. Urgency is visible and inspectable.

## Why this complements Project 1

The [Cedarline Claim Reporting UX](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) demonstrates customer-facing FNOL design.

This project tackles the other side of the workflow: **internal enterprise software used repeatedly by employees under time pressure.**

Together, the projects demonstrate both customer-facing and employee-facing UX in the same insurance domain.

## Current prototype

The working prototype includes:

- **My Work** dashboard;
- action-based claim queue;
- search by claimant or claim number;
- filters for priority, stage, line of business, and operational signal;
- sorting by operational urgency, due date, age, or contact gap;
- quick filters for Needs Action, Overdue, Contact Gap, and Missing Documents;
- keyboard-openable claim rows;
- selected-claim detail panel;
- next-action context;
- customer contact context;
- missing-document list;
- operational flags;
- reserve/payment snapshot;
- recent activity.

## Information architecture

```text
My Work
├── Workload summary
├── Queue controls
├── Claims work queue
└── Selected claim workspace
    ├── Next action
    ├── Operational signals
    ├── Claim/customer context
    ├── Financial snapshot
    ├── Missing documents
    └── Recent activity
```

The repeated task loop is:

**Scan queue → identify reason for attention → open claim → review context → act / schedule next action → update claim → return to queue**

## Research integrity

This is a rapid portfolio concept, not a production engagement.

I **do not claim** interviews with real claims representatives, access to internal insurer systems, or usability-study results.

The internal-user model and workflow are documented as hypotheses to validate with claims subject-matter experts in a production project.

## Design principles

**Action before analytics**  
Operational dashboards should lead with work to do, not vanity metrics.

**Explain urgency**  
A claim should never look urgent without showing the reason.

**Status and next action are different**  
“Inspection” describes where the claim is. “Review field notes” describes what the rep should do next.

**Keep customer context nearby**  
Efficiency should not make the claimant disappear behind IDs and status codes.

**Dense, not cramped**  
Enterprise software can carry substantial information, but grouping and hierarchy still need to reduce scanning effort.

## Process artifacts

- [Project brief](docs/project-brief.md)
- [Information architecture & task model](docs/information-architecture.md)
- [Figma case-study file](https://www.figma.com/design/a39WIHybdkzXWZ8kWQOGry)

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── claims.json
└── docs/
    ├── project-brief.md
    └── information-architecture.md
```

## Run locally

The prototype loads the synthetic dataset with `fetch()`, so serve the repository locally:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Next design passes

The next iterations will focus on:

1. task-based heuristic evaluation of the work queue;
2. clearer queue-to-detail interaction states;
3. claim-detail workflow depth;
4. accessibility testing for the dense table experience;
5. responsive alternatives for smaller screens;
6. polished high-fidelity Figma screens;
7. GitHub Pages deployment;
8. a documented before/after iteration story.

## Portfolio goal

Project 1 answers:

> **How should a customer report a loss?**

Project 2 answers:

> **How should a claims representative manage the work that follows?**

That gives the Cedarline portfolio a connected end-to-end service story without turning the two projects into duplicates.
