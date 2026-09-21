# Cedarline Claims Operations Dashboard

A working **enterprise UX case study** for claims representatives managing a high-volume mixed caseload.

**Enterprise UX · Workflow design · Information architecture · Accessibility · Data-rich interfaces · HTML/CSS/JavaScript**

[**Live prototype**](https://joshuaokent-spec.github.io/Cedarline-Claims-Operations-Dashboard/) · [**Project brief**](docs/project-brief.md) · [**Heuristic evaluation**](docs/heuristic-evaluation.md)

> **Cedarline Mutual is fictional.** The 300-claim dataset is synthetic and contains no real customer or claim information.

## At a glance

| | |
| --- | --- |
| **Role** | UX Designer + front-end prototyper |
| **Project type** | Rapid enterprise UX concept |
| **Primary user** | Claims representative managing a mixed Auto/Property caseload |
| **Core problem** | Identify what needs action next, why it needs attention, and what context is needed to act |
| **Deliverables** | User/workflow hypothesis, task model, IA, interface standards, heuristic evaluation, accessibility review, coded prototype |
| **Dataset** | 300 synthetic claims |
| **Tools / tech** | HTML, CSS, JavaScript, JSON, GitHub Pages |

## The problem

Claims representatives work across files at different stages: new intake, customer contact, inspections, estimates, coverage review, payment review, and repair follow-up.

A dashboard can easily become a pile of charts while the employee’s real question remains unanswered:

> **What needs my attention next, why, and what do I need before I can act?**

## Design response

The prototype makes the **work queue** the primary surface.

Visible operational signals explain why a claim deserves attention:

- overdue action;
- customer-contact gap;
- missing documents;
- high severity;
- aging claim;
- explicit priority and workflow stage.

The interface deliberately avoids an unexplained “AI urgency score.” The sorting logic uses these signals internally, while the reasons remain visible to the user.

## Core task loop

```text
Scan queue
  → identify reason for attention
  → select claim
  → review next action + blockers
  → act / log contact
  → update state
  → return to queue
```

The current prototype supports that loop directly. In-session actions can clear a contact gap or complete an overdue next action, and the queue/summaries update immediately.

## Why this is enterprise UX rather than a generic dashboard

### Action before analytics
The four summary cards are filters into work—not decorative KPI tiles.

### Status and next action are separate
“Inspection” tells the rep **where** the claim is. “Review field notes” tells them **what to do**.

### Urgency is explainable
Signals expose operational reasons instead of asking users to trust a hidden score.

### Customer context stays nearby
Claimant name, contact recency, preferred contact method, documents, and recent activity remain adjacent to operational data.

### Dense, not cramped
The layout accepts the information density of expert software while preserving stable columns, grouping, spacing, and hierarchy.

## Working prototype

The dashboard includes:

- workload summaries that act as quick filters;
- search by claim number or claimant;
- priority, stage, line-of-business, and signal filters;
- urgency, due-date, claim-age, and contact-gap sorting;
- keyboard-openable claim rows;
- selected-state persistence;
- detail workspace;
- next-action context;
- operational signals;
- missing-document view;
- financial snapshot;
- recent activity;
- functional **Log contact** and **Mark next action complete** demo actions;
- responsive layout behavior.

## Research integrity

This is a rapid portfolio concept, not a live insurer engagement.

I **do not claim** interviews with real claims representatives, access to internal carrier systems, or usability-study findings.

The employee model and operational rules are documented as hypotheses that would need validation with claims professionals and business stakeholders.

## Iteration evidence

The repository includes a [heuristic evaluation & revision log](docs/heuristic-evaluation.md).

Examples of issues addressed:

- keeping the interface work-first instead of KPI-first;
- showing reasons for urgency;
- separating stage from next action;
- making the detail actions functional rather than decorative;
- adding reduced-motion support;
- documenting dense-table accessibility tradeoffs.

## Accessibility

See [Accessibility Approach](docs/accessibility.md).

The prototype includes a skip link, visible focus, native filters/buttons, live result/detail status, explicit overdue text, keyboard row activation, responsive layouts, and reduced-motion handling.

The dense table remains a design tradeoff; a production version should validate an alternate list/card presentation at high zoom and narrow widths.

## Interface standards

See [Enterprise Interface Standards](docs/interface-standards.md) for the design rules behind workload summaries, signal badges, queue density, detail hierarchy, actions, and responsive behavior.

## Information architecture

```text
My Work
├── Workload summary
├── Queue controls
├── Claims work queue
└── Selected claim workspace
    ├── Next action
    ├── Operational signals
    ├── Customer/contact context
    ├── Financial snapshot
    ├── Missing documents
    └── Recent activity
```

See [Information Architecture & Task Model](docs/information-architecture.md).

## Cedarline portfolio

| Project | UX problem |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | How should a customer report a loss? |
| **Project 2 — Claims Operations** | How should an employee manage the work that follows? |
| [Project 3 — Policy & Coverage IA](https://github.com/joshuaokent-spec/Cedarline-Policy-Coverage-IA) | How should customers find policy and coverage information? |

Together they demonstrate transactional UX, enterprise UX, and information architecture.

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── claims.json
├── docs/
│   ├── project-brief.md
│   ├── information-architecture.md
│   ├── heuristic-evaluation.md
│   ├── accessibility.md
│   └── interface-standards.md
└── .github/
    └── workflows/
        └── validate.yml
```

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## What I would validate next

In a production engagement I would test:

- whether claims reps agree with the operational signals and sorting model;
- whether they can scan the queue faster than their current workflow;
- whether important claim context is missing from the detail workspace;
- how often users need cross-claim/calendar/document workflows;
- high-zoom and screen-reader alternatives to the table;
- whether action completion and contact logging need confirmations, undo, or audit detail.

The prototype is a design hypothesis designed to make those questions testable.
