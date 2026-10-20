# Gaps

What this repository could not take from the session record (`polyphony-session-record.md`, 14–15 October 2026), and where files go beyond it. Each item says what is missing and what was done instead.

## Missing from the record

1. **The full writer analyses.** The record summarises the analyses of Robinson (step 3), Palmer (step 8), Doctorow (step 12) and Le Guin (step 14) in a paragraph each. The full Robinson analysis, which included a ten-point checklist, is not reproduced. *Done instead:* each move's *Source* line says only what the summaries support. A `sources/` folder with one file per writer would be the place to restore the analyses if they can be recovered from the original chat.

2. **Which writer each selected move came from.** Not a gap in the moves: every move selected into the merged folder structure (Part 1.7) is implemented. What's missing is provenance for some of them. The record names Doctorow's and Le Guin's moves (steps 12 and 14) but not Robinson's 14 or Palmer's 14 by name. *Done instead:* those attributions are reconstructed from the summaries and marked as inferred where unsure. Moves that were not picked are not in the record and are not needed.

3. **Before / After examples.** The record designs the move-file template but contains no move files. *Done instead:* every Before is quoted from the Polyphony draft or the user's case drafts in the record; every After is new, written for this repository, and keeps the source's claims unless the file says otherwise. These are illustrations, not approved rewrites.

4. **The `examples/` folder.** The structure lists it with no contents. *Done instead:* one worked example, [prose-moves/examples/polyphony-white-paper.md](prose-moves/examples/polyphony-white-paper.md), built from Parts 1.5 and 1.6 of the record.

## Recovered after the first build

- **Anti-patterns.** Missing from the record; joera supplied the list (step 6, plus items from steps 9–10, 12, 16–17 and 33–35). Now in [prose-moves/anti-patterns.md](prose-moves/anti-patterns.md), and each item is checked by a pass.

## Added after the session, not yet reviewed

- **Neal Stephenson.** Added at joera's request on 15 October 2026. Unlike the other four, he was not analysed in the session: his properties column, the new property values (marked \* in [properties.md](prose-moves/properties.md)), five moves ([glossary-epigraph](prose-moves/document/glossary-epigraph.md), [first-principles](prose-moves/section/first-principles.md), [worked-attack](prose-moves/paragraph/worked-attack.md), [explanatory-digression](prose-moves/extensions/explanatory-digression.md), [sustained-conceit](prose-moves/extensions/sustained-conceit.md)), the [attack-surface](prose-moves/passes/attack-surface.md) pass and the casting proposals in the worked example are new analysis from general knowledge of his work, and none of it has been reviewed.

- **Octavia Butler's lens.** Assessed and not added as a writer; her question (who is most exposed when it fails?) is step 6 of the [presupposition](prose-moves/passes/presupposition.md) pass. Matt Taibbi was assessed and skipped.

## Inferred, not recorded

- **Attribution of some moves.** The record lists these moves in the folder structure without saying whose they are: name-the-picture-first, define-the-term, fact-qualification-consequence, one-before-many, plain-close, balanced-pair, question-then-answer, triad, register-check, epigram-audit. Each file marks its attribution as inferred, or as unattributed.
- **Tags.** The record says moves are tagged on the properties they depend on but does not give the tags. All tags were assigned while building this repository.
- **Safe / adds.** The record marks the extensions as "adds". Whether each core move is safe was decided here; files whose move adds material under some conditions say so.
- **Specific works cited.** Titles beyond those named in the record (*The Dispossessed*, *The Left Hand of Darkness*, *Chokepoint Capitalism*, the Omelas story) come from general knowledge and should be checked.
- **The "Likely moves" column** in the worked example is new. The session cast writers to passages, not moves.

## Open questions for the author

- Should the skill stay single (`prose-moves/` with a router) or split into one skill per level?
- Should per-writer source notes live in the repository, given the selection rule says source is provenance only?
- Do the passes need an order beyond "claim inventory first, fidelity check last"?
