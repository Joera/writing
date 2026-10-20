---
name: numbered-mechanism
level: section
tags: [persuasion: mechanism, register: plain]
kind: safe
source: Robinson (provenance only)
---

# Numbered mechanism

## Use when
- A mechanism has a fixed number of parts (three rails, two gates, four guarantees), and the reader needs to know when the list is complete.
- The parts are currently run together in one long paragraph.

## Don't use when
- The parts are not separable, or their order matters more than their count (use a sequence, or [stage-model](stage-model.md) if the parts unfold in time).
- The register is elevated and lists would break it.

## Conflicts with
- [catalogue-paragraph](../paragraph/catalogue-paragraph.md) for the same content: choose a numbered section or a single catalogue paragraph.

## Tags
`persuasion: mechanism`, `register: plain`

## Safe or adds
Safe.

## The move
Announce the count ("The protocol does four things."), then give each part its own short paragraph or numbered item, opening with its name. Keep the parts parallel: same length, same shape. Close with one sentence on what the parts do together.

## Before
> The protocol's approach to rewarding work is three rails and nothing more. A destination: every author account is an address [...] A division: the agreement records how any payment splits [...] A disclosure mechanism: the third gate [...]

## After
> The protocol offers three rails for payment, and nothing more.
>
> **A destination.** Every author account is an address, and so is every publication. Whatever a reader pays has somewhere to go.
>
> **A division.** The agreement records how a payment splits, and the split runs on chain. Neither party is paid from the other's hand.
>
> **A disclosure gate.** The third gate is optional. A publication plugs in any on-chain check (a payment, a membership, a subscription), and the gate answers yes or no without holding the money.
>
> The business model is the publication's design on those rails.

## Pitfalls
- Numbering things that are not parallel.
- Announcing a count and then delivering a different one.

## Combines with
[mechanism-then-consequence](../document/mechanism-then-consequence.md), [one-before-many](../paragraph/one-before-many.md), [plain-diction](../sentence/plain-diction.md)

## Source
Robinson (exposition chopped into small units, as in *2312*; mechanism first). Attribution of the numbered form specifically is inferred.
