---
name: claim-inventory
kind: pass
runs: first, on the source text
source: Robinson rewrite rule from the session ("you can't change the meaning or the argumentation")
---

# Claim inventory

## What it checks
What the source text actually claims. Nothing else in the procedure can run without it: the rewrite must preserve every item on this list, at the same strength.

## When to run
First, before any settings or moves, on the source text. Again inside [fidelity-check](fidelity-check.md), on the rewrite.

## How
1. Go paragraph by paragraph. For each, list every claim as one plain sentence: what is asserted to be true, possible, required or excluded.
2. Record its strength (guaranteed / designed to / expected / possible / not yet built).
3. Record its scope (who or what it applies to).
4. Mark claims that depend on another claim.
5. Mark anything that looks like a claim but is only framing (an image, an example).

## Output
A numbered list, one claim per line: `C12 · §5 P2 · The source material is decrypted only inside the generator, while rendering, and only under a current agreement · guaranteed · all works`.

## Example
From the Polyphony introduction, P6:
- C1 · The protocol addresses the parties to a publication, not the state · flat
- C2 · Courts can compel the parties to any arrangement, this one included · flat
- C3 · The protocol does not impose a payment model · flat
- C4 · An optional reading gate is described and not yet built · build status
- C5 · Dividing a payment does not make money harmless · flat (concession)
- C6 · It removes the paymaster: neither party is paid from the other's hand · flat
- C7 · A byline may be a legal name or a pseudonym · flat

## Source
The session's first correction: a style rewrite that changed meaning was rejected. This pass makes that rule checkable.
