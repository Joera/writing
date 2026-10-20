---
name: calibrated-certainty
level: paragraph
tags: [certainty: calibrated]
kind: safe
source: Palmer (provenance only)
---

# Calibrated certainty

## Use when
- A paragraph mixes claims of different strength (what the code guarantees; what the authors expect; what no one knows yet), and they are all stated in the same flat voice.
- Build status varies: some parts built, some described only.

## Don't use when
- The document setting is flat certainty and the limits are already stated once. Then mark build status, but don't hedge claim by claim.

## Conflicts with
- Polemical flat certainty in the same passage.

## Tags
`certainty: calibrated`. A light version (build status only) works under `flat, with limits`.

## Safe or adds
Safe, as long as each marker matches what the source supports. Strengthening or weakening a claim is a fidelity failure.

## The move
Give each claim the confidence it deserves, using a small, consistent set of markers: guaranteed / designed to / expected to / not yet known. Mark what is built and what is described. Never hedge a claim the mechanism actually guarantees.

## Before
> The third gate governs disclosure. The rendered page — never the source material — is encrypted at render, and the generator releases it to a reader only when an on-chain check passes.

## After
> The third gate governs disclosure. It is described here and not yet built. As designed, the rendered page (never the source material) is encrypted at render, and the generator releases it to a reader only when an on-chain check passes.

## Pitfalls
- Hedging everything, so the strong claims look weak.
- Inconsistent markers ("should", "will", "is designed to" for the same status).

## Combines with
[edges-statement](../section/edges-statement.md), [qualifying-parenthesis](qualifying-parenthesis.md), [claim-sourcing](../passes/claim-sourcing.md)

## Source
Palmer's essays (calibrated certainty; admitting what is not known). Linked to the Polyphony document choice "mark build status consistently".
