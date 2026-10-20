---
name: mechanism-then-consequence
level: document
tags: [persuasion: mechanism]
kind: safe
source: Robinson (provenance only)
---

# Mechanism, then consequence

## Use when
- The text proposes a system, and its claims about outcomes depend on how the system works.
- Readers are likely to doubt the outcome unless they can see the machinery.
- Ordering a whole document: parts first, what they add up to last.

## Don't use when
- The reader needs to know *why* before *how* (put cases or a thesis first, then use this move for the body).
- The mechanism is not the point, only the outcome is.

## Conflicts with
- [staged-objection](../section/staged-objection.md) as the organising principle of the same section. One section can be built on mechanism or on objections, not both.

## Tags
`persuasion: mechanism` (also fits `mechanism + case`).

## Safe or adds
Safe.

## The move
Explain how the thing works, step by step, in the order things happen. Only then state what follows from it. The consequence should read as something the reader could almost have derived. At document level, order sections from the inside out: the smallest part first, each later section built on the ones before.

## Before
> Editorial judgment survives. What goes is the leverage, which was never the craft. [...] The protocol's move is to separate editorial judgment from the position it currently rides on. An author keeps cryptographic ownership of the work and can revoke it at any time.

## After
> The protocol's move is to separate editorial judgment from the position it currently rides on. It works like this. An author keeps cryptographic ownership of the work and can revoke it at any time. [...] The generator is governed, and the governing is public.
>
> Editorial judgment survives. What goes is the leverage, which was never the craft.

## Pitfalls
- Mechanism with no consequence: the reader has the parts and no reason to care.
- A consequence the mechanism does not actually produce. Run [abstraction-audit](../passes/abstraction-audit.md).
- Mechanism written as abstraction ("the system ensures integrity") rather than as steps someone could follow.

## Combines with
[numbered-mechanism](../section/numbered-mechanism.md), [fact-qualification-consequence](../paragraph/fact-qualification-consequence.md), [colon-as-which-means](../sentence/colon-as-which-means.md)

## Source
Robinson (mechanism as persuasion; mechanism first, then principle). The Polyphony paper's inside-out order (author → publication → agreements → gates → protocol → money → costs → verification) is an instance.
