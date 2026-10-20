---
name: claim-sourcing
kind: pass
lens: Palmer, Doctorow
source: added with Doctorow; Palmer's lens (provenance only)
---

# Claim sourcing

## What it checks
*What does each claim rest on?* For every claim in the [claim inventory](claim-inventory.md), whether the text gives its basis: the mechanism (a section of this text), evidence (a source, a case), or nothing (an assertion).

## When to run
After rewriting. Essential on introductions and abstracts, which assert what later sections support.

## How
1. Take the claim inventory.
2. For each claim, mark its basis: `mechanism §n` · `case n` · `external source` · `assumption` · `none`.
3. For claims about the world (media herding, platform behaviour), check whether an external source is needed and given.
4. For assumptions, check they are stated once (e.g. trust assumptions in §6).
5. Flag claims marked `none`.

## Output
The claim inventory with a basis column, and a list of claims with no basis.

## Example
- "Writers have only a handful of places to publish" → claim about the world · basis: none in the text · flag (the monopsony argument needs either a source or a softer claim).
- "No single party can produce a valid rendering alone" → mechanism §6 · OK, given the trust assumption about colluding nodes is stated.

## Source
Added with Doctorow (claim sourcing); Palmer's lens (what each claim rests on).
