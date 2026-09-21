# Cedarline Claims Operations Dashboard

An internal **enterprise UX case study** for claims representatives managing a high-volume workload across auto and property claims.

**Portfolio focus:** enterprise UX · workflow design · information architecture · dashboard design · accessibility · data-rich interfaces · HTML/CSS/JavaScript

> Cedarline Mutual is fictional. The dataset in this repository is synthetic and contains no real customer or claim information.

## Project thesis

Claims representatives do not primarily need “more charts.” They need to know:

> **What needs my attention next, why does it need attention, and what information do I need to act?**

This project explores an internal workspace that prioritizes action required, aging/deadline risk, customer-contact gaps, missing documentation, claim stage, and escalation signals.

## Why this project

The first Cedarline portfolio project demonstrates consumer-facing claim intake. This second project intentionally demonstrates the other side of UX work: dense internal software used repeatedly by employees under time pressure.

## Initial scope

The first prototype includes:

- workload summary;
- action-based claim queue;
- search and filters;
- overdue / contact-gap / missing-document signals;
- claim-stage visibility;
- sorting by operational urgency;
- claim detail workspace;
- recent contact and next-action context;
- synthetic dataset with 300 claims.

## Research integrity

This is a rapid portfolio concept. It does not claim interviews with real adjusters or access to internal insurer systems.

The workflow model is informed by publicly described insurance-claims tasks and is documented as a set of design hypotheses to validate with subject-matter experts in a production project.

## Run locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Planned case-study chain

Problem framing → internal-user hypotheses → task model → requirements → IA → queue prioritization model → low-fi wireframes → heuristic review → high-fi dashboard → accessible coded prototype.
