---
name: author-fact-check
kind: pass
runs: before the fidelity check
source: added from use
---

# Author fact check

## What it checks
Whether what the text says about the system, the world and the build status is *true*, as only the author knows it. Every other pass checks the text against itself or against the source. This one checks it against reality. A sentence can be fluent, consistent with the source and wrong.

## When to run
After the passes, before the [fidelity check](fidelity-check.md), on every rewritten section. Always after a rewrite that reorders or compresses technical description, since that's where new errors appear.

## How
1. List every statement in the rewrite about how the system works, what exists today, and what is planned.
2. Mark each one: unchanged from the source, reworded, or new.
3. Put the reworded and new ones to the author as a short list, one line each. Ask "is this how it works?", not "is this okay?".
4. Mark build status explicitly: built, being built, planned.
5. Record corrections where later sections will need them (an open-items list), not only in the sentence at hand.

## Output
A list for the author: statement · location · unchanged / reworded / new · question.

## Example
Corrections an author made to a white paper's introduction (see [examples/polyphony-white-paper.md](../examples/polyphony-white-paper.md)), none of which a pass could have found:
- "When the author ends the agreement, the renderer stops" → wrong: the site has to be rebuilt, and the author can trigger that.
- "The work stays on the author's own machine" → incomplete: it is also on distributed storage, encrypted.
- "Its key is held in shares by independent nodes" → the network of independent parties is the ambition; the key is generated inside a TEE, and operators hold a recovery secret.

## Source
Added from use: the corrections that mattered most came from the author, not from any pass.
