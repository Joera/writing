---
name: epigram-audit
kind: pass
source: lessons from the Polyphony naming work
---

# Epigram audit

## What it checks
That short, quotable sentences say something a reader can understand on first reading. Finds sentences that are clever, cryptic, or need the surrounding argument to decode.

## When to run
After rewriting, especially on abstracts, theses, section closes and coined terms.

## How
1. Pick out every sentence under about twelve words that ends a paragraph or carries a key idea.
2. Read each one in isolation. Ask: would someone who has not read the text know what it means?
3. If not, either expand it into plain sentences (three plain sentences beat one epigram), or keep it only if the sentence before it does the explaining.
4. Check for doubled-loss phrasing: a remedy that sounds like a harm ("makes leaving cost both sides"). Say the good news; leave the mechanism for the unpacking.

This pass catches [anti-patterns 7 and 8](../anti-patterns.md): cleverness that needs decoding, and announcing the mechanism instead of the benefit.

## Output
A list: sentence · understood alone? · fix.

## Example
- "The unison is not enforced. It is priced." → not understood alone. Expand: "Nobody forces the media to speak in unison. Disagreement just costs writers more than they can afford."
- "Polyphony makes leaving cost both sides." → reads as a doubled loss. Say the good news: "Polyphony makes staying a choice."

## Source
Lessons recorded from the session: sentences must not be too clever or cryptic; plain three-sentence explanations beat short epigrams; say the good news, leave the mechanism for the unpacking.
