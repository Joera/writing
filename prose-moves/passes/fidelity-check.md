---
name: fidelity-check
kind: pass
runs: last
source: session rule ("you can't change the meaning or the argumentation")
---

# Fidelity check

## What it checks
That the rewrite says what the source said: every claim present, at the same strength and scope, and nothing added that the author did not approve.

## When to run
Last, after all other passes, on the final rewrite.

## How
1. Run [claim-inventory](claim-inventory.md) on the rewrite.
2. Compare with the source inventory, claim by claim:
   - **Missing**: in the source, not in the rewrite.
   - **Changed**: present, but stronger, weaker, or wider or narrower in scope.
   - **Added**: in the rewrite, not in the source. Allowed only if approved in the plan (an *adds* move).
3. Check that any images, cases or figures not in the source were approved.
4. Check for **style projection** ([anti-pattern 5](../anti-patterns.md)): a move applied in a passage whose job the plan did not name for it.
5. Fix or report every difference. Don't call the rewrite done while any remain unexplained.

## Output
Three lists (missing / changed / added), each with locations, and a one-line verdict: faithful, or not and why.

## Example
- Changed: source "the independence on offer is from each other, not from the law" → rewrite "the protocol protects writers from each other". Narrower (writers only) and stronger ("protects"). Restore.
- Added: "The forty would have their room by Friday" in a new closing. Approved in plan (return-to-cases). OK.

## Source
The session's governing rule for every rewrite: style may change, meaning and argument may not.
