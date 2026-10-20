---
name: attack-surface
kind: pass
lens: Stephenson
source: Stephenson's lens (new analysis, not from the session; unreviewed)
---

# Attack surface

## What it checks
*Could someone break it, and does the text say why they can't?* For every guarantee the text makes about a system, the cheapest way to defeat it, and whether the text answers that attack or states it as a limit.

## When to run
After rewriting, on any text that claims security, integrity or resistance to capture. Most useful on mechanism and verification sections.

## How
1. List every guarantee: sentences saying something cannot happen, or can only happen under conditions.
2. For each, write the cheapest attack a motivated adversary would try (collusion, a stolen key, a seized name, an insider).
3. Find where the text answers it: by mechanism (quote it), by a stated trust assumption, or by a stated limit.
4. Flag any attack the text doesn't answer. Suggest [worked-attack](../paragraph/worked-attack.md) where an answer exists but is abstract, and [edges-statement](../section/edges-statement.md) where the answer is a limit.

This differs from [objection-check](objection-check.md), which looks for the reader's doubts about the argument. This pass looks for an adversary's moves against the system.

## Output
A table: guarantee · cheapest attack · answered by (mechanism / assumption / limit / nothing).

## Example
| Guarantee | Cheapest attack | Answered by |
|---|---|---|
| No single party can produce a valid rendering alone | Enough node operators collude | Trust assumption; must be stated once in §6 (currently missing) |
| A host cannot alter a page and have the record still point at it | Host edits the bytes | Mechanism, §9 (content addressing) |
| The name is the publication's own | Seize the name at the DNS layer | Limit, §3 (DNS risk stated) |
| The generator runs the code as written | Tamper with the runtime | "Sealed runtime" asserted, §6 ("Gernerator"); its guarantees need stating as an assumption |

## Source
Stephenson's lens (the security mindset of *Cryptonomicon*). Added after the session; not reviewed by the author.
