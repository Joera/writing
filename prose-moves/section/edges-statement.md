---
name: edges-statement
level: section
tags: [certainty: flat, with limits]
kind: safe
source: Robinson, Palmer (provenance only)
---

# Edges statement

## Use when
- A reader could reasonably think the proposal does more than it does.
- The text has scope limits, trust assumptions or unbuilt parts that are scattered or implicit.

## Don't use when
- The limits are already stated once, clearly. State them once; don't repeat.

## Conflicts with
- [cost-inside](../document/cost-inside.md) for the same limit: a limit is either placed where the claim is made, or gathered in an edges statement. Scope limits suit an edges statement; costs suit cost-inside.

## Tags
`certainty: flat, with limits` or `calibrated`.

## Safe or adds
Safe.

## The move
Gather what the proposal does not do into one short passage, stated flat, without apology: what it addresses, what it leaves alone, what it assumes, what is not yet built. Then one sentence on why the narrowness is deliberate.

## Before
> What the protocol offers is deliberately narrow. It addresses the parties to a publication — the writers, the name, the readers — and not the state: courts can compel the parties to any arrangement, this one included, and the independence on offer is from each other, not from the law.

## After
> What the protocol offers is deliberately narrow. It addresses the parties to a publication (the writers, the name, the readers) and not the state. Courts can compel the parties to any arrangement, this one included. The independence on offer is from each other, not from the law. It is built for places where the threat to editorial independence is less the state than whoever owns the infrastructure.

*(The last sentence is the one the session agreed to add.)*

## Pitfalls
- Hedging every claim in the body instead of stating limits once.
- An edges statement that sounds like an apology.
- Leaving out the limit that matters most (in the Polyphony paper: the trust assumptions about colluding nodes and the sealed runtime).

## Combines with
[calibrated-certainty](../paragraph/calibrated-certainty.md), [plain-close](../paragraph/plain-close.md)

## Source
Robinson (honest limits; concession as credibility; "better, not perfect"). Palmer (calibrated certainty). Cast in the Polyphony paper to Palmer, "deliberately narrow".
