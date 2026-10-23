---
name: prose-moves
description: Revise or restyle expository prose (white papers, essays, explainers) by choosing document settings, then per-passage moves at section, paragraph and sentence level, then running fixed revision passes. Use when asked to rewrite a text in a style, tighten an argument, restructure a document, or check prose for drift, hidden claims or unexplained mechanism, without changing what the text claims.
---

# Prose moves

A catalogue of **moves** (what a writer does to a passage) and **passes** (checks run on every text). The aim is better prose that says exactly what the original said. Style is never allowed to change a claim.

## Levels

Choices are made top down. Each level is chosen within the limits the level above has set. But decisions also travel up: when work on a paragraph changes what it does (it needs a different position, or it takes over another paragraph's job), go back up a level and re-plan the section before carrying on.

1. **Document**: settings for the seven properties (see [properties.md](properties.md)), including voice. These bind everything below.
2. **Section / group of paragraphs**: how a run of paragraphs is organised.
3. **Paragraph**: how one paragraph moves from its first sentence to its last.
4. **Sentence**: syntax, diction, punctuation. Sentence work is done as one pass over a finished section ([sentence-pass](passes/sentence-pass.md)), not chosen per paragraph.

## Procedure

Follow these steps in order. Do not skip the plan.

1. **Claim inventory.** Run [passes/claim-inventory.md](passes/claim-inventory.md) on the source. This list is what the rewrite must preserve.
2. **Document settings.** Set address, presence, rhythm, register, certainty, persuasion and figuration for the whole text. If the author has fixed any, use theirs. Also settle terms (glossary) before touching prose.
3. **Divide into passages.** Usually a section or subsection. Name each passage's *job* in a few words ("diagnose the cause", "define publication", "state limits"). A job includes the passage's place in the document: an early passage states, a later one explains. A paragraph before the cases should not do the work of section 6.
4. **Cast and select moves.** For each passage, pick the writer who *leads* it (see Casting below) and, from the moves, those whose *Use when* fits the job and whose tags agree with the settings. At most two or three moves per paragraph. Sentence moves are not selected here; they serve the sentence pass. No two moves that list each other under *Conflicts with*. Moves under [extensions/](extensions/) add material: propose them, never apply them silently.
5. **Show the plan.** For each passage: its job, the moves chosen, and one line on why. Wait for approval.
6. **Rewrite.** Apply the plan passage by passage.
7. **Passes.** Run every file in [passes/](passes/) on the rewrite, including every writer's lens, whoever led the passage. Fix what they find. Together they catch the [anti-patterns](anti-patterns.md). Run the whole-text passes again once a section is finished, even if paragraphs were reworked one at a time in conversation.
8. **Author fact check.** Run [passes/author-fact-check.md](passes/author-fact-check.md): list every technical or factual statement the rewrite makes and put it to the author. No other pass can catch a claim that is fluent, consistent and wrong.
9. **Fidelity check.** Run [passes/fidelity-check.md](passes/fidelity-check.md) last: every claim from step 1 is present, unchanged in strength, and nothing has been added that was not approved.

## Selection rules

- **Settings bind.** A move tagged with a property value the document did not choose is out (for example, [paragraph/direct-address.md](paragraph/direct-address.md) in an impersonal document).
- **Tags are minimal.** A move is tagged only on properties it depends on. An untagged property means the move works under any setting.
- **Select on properties, not on writers.** The *Source* line in each file is provenance. Never pick a move because of whose it is.
- **The job decides.** A move qualifies for a passage only if its *Use when* names that passage's job.
- **Parallel passages share moves.** Passages doing the same job in parallel (three cases, two gates) get the same moves.
- **Safe vs adds.** *Safe* moves reshape what is there. *Adds* moves introduce material (a figure, an analogy, a historical frame) and need the author's approval in the plan.
- **New properties only on real conflict.** If two moves clash on something no property describes, add a property to [properties.md](properties.md); otherwise don't.

## Styles and lenses

Each source writer contributes two things. Their **style** becomes moves, chosen per passage. Their **lens** becomes a pass, run on every text:

- Robinson: is the mechanism actually explained? → [abstraction-audit](passes/abstraction-audit.md)
- Palmer: what does each claim rest on; which objections are unanswered? → [claim-sourcing](passes/claim-sourcing.md), [objection-check](passes/objection-check.md)
- Doctorow: are the key ideas named; do terms drift? → [term-consistency](passes/term-consistency.md)
- Le Guin: what does the language presuppose; how does it sound aloud; are costs hidden? → [presupposition](passes/presupposition.md), [read-aloud](passes/read-aloud.md), [crowding-and-leaping](passes/crowding-and-leaping.md)
- Stephenson: could someone break it, and does the text say why they can't? → [attack-surface](passes/attack-surface.md) *(added after the session, unreviewed)*

Taste does not transfer; lens does.

## Casting: one lead, every lens

Each passage gets **one lead writer**, whose style shapes it: the lead supplies the passage's structure and moves. Every **other writer's lens** then runs over the result as a check. One writer shapes, all of them correct.

- Use each writer's lens to find the passages where their style serves *this* text; they lead only there, within the document settings (see [examples/polyphony-white-paper.md](examples/polyphony-white-paper.md)).
- A passage is never shaped by two styles at once. Mixing structures in one paragraph is [anti-pattern 6](anti-patterns.md), mixed voices.
- In the Polyphony introduction, the renderer paragraph was Robinson's shape (one engine, then what it drives), corrected by Palmer (cut "for anyone", fix the order), Doctorow (trim, keep the callback) and Le Guin (split at the turn).

### The panel

Asking "the panel" means running each writer's lens on the passage and reporting what each **finds**: a specific fault and its fix, with a location. It is not a vote. "Four to none" carries no information; "Palmer: 'for anyone' is false, only authorised parties can trigger the renderer" does. A writer whose lens finds nothing says so in one line. Where findings conflict, the author decides.

## Plan format

```
Settings: address impersonal · presence invisible · rhythm paratactic · register plain ·
          certainty flat with limits · persuasion mechanism · figuration literal

§1 Introduction
  P1–P3  job: show the problem in three cases
         lead: Le Guin · lenses: all
         moves: cases-first, signpost, build-then-land
         why: three parallel situations; one shared outcome to land on
  P4     job: diagnose the cause
         lead: Robinson · lenses: all
         moves: two-step-diagnosis, plain-close
  ...
Adds proposed: none
```

## Files

- [properties.md](properties.md): the seven properties, their values, and each writer's defaults
- [catalogue.md](catalogue.md): every move and pass on one page
- [anti-patterns.md](anti-patterns.md): eight things to avoid in any text, and which pass catches each
- Move file template: *Use when · Don't use when · Conflicts with · Tags · Safe or adds · The move · Before · After · Pitfalls · Combines with · Source*
