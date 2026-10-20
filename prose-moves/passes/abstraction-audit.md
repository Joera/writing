---
name: abstraction-audit
kind: pass
lens: Robinson
source: Robinson's lens (provenance only)
---

# Abstraction audit

## What it checks
*Is the mechanism actually explained?* Finds sentences that name an outcome (integrity, independence, trust, sovereignty) without the steps that produce it.

## When to run
After rewriting. Most useful on mechanism sections and on abstracts.

## How
1. Highlight every abstract noun that names a good outcome or a guarantee.
2. For each, ask: could a careful reader say *how* this comes about, from this text alone? Who does what, in what order, enforced by what?
3. If not, either point to where the mechanism is given, or flag it: the mechanism is missing, or the claim is stronger than the mechanism.
4. Flag **lecturing** ([anti-pattern 1](../anti-patterns.md)): sentences that tell the reader what to think ("this is crucial", "clearly", "it should be obvious") instead of showing how something works.

## Output
A list: `§1 P5 "no single party can produce a valid rendering alone" → mechanism in §6 (key shares across nodes, threshold) · OK`, or `→ mechanism not given · flag`.

## Example
"Editorial judgment survives" is an outcome. The mechanism is that the protocol leaves the decision to admit or decline a work with the publication (§3, how work is admitted). OK, but the introduction could point to it.

## Source
Robinson's lens: mechanism as persuasion. A reader persuaded by an outcome they can't trace has been told, not shown.
