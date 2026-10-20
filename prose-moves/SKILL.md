---
name: prose-moves
description: Revise or restyle expository prose (white papers, essays, explainers) by choosing document settings, then per-passage moves at section, paragraph and sentence level, then running fixed revision passes. Use when asked to rewrite a text in a style, tighten an argument, restructure a document, or check prose for drift, hidden claims or unexplained mechanism, without changing what the text claims.
---

# Prose moves

A catalogue of **moves** (what a writer does to a passage) and **passes** (checks run on every text). The aim is better prose that says exactly what the original said. Style is never allowed to change a claim.

## Levels

Choices are made top down. Each level is chosen within the limits the level above has set.

1. **Document**: settings for the seven properties (see [properties.md](properties.md)), including voice. These bind everything below.
2. **Section / group of paragraphs**: how a run of paragraphs is organised.
3. **Paragraph**: how one paragraph moves from its first sentence to its last.
4. **Sentence**: syntax, diction, punctuation.

## Procedure

Follow these steps in order. Do not skip the plan.

1. **Claim inventory.** Run [passes/claim-inventory.md](passes/claim-inventory.md) on the source. This list is what the rewrite must preserve.
2. **Document settings.** Set address, presence, rhythm, register, certainty, persuasion and figuration for the whole text. If the author has fixed any, use theirs. Also settle terms (glossary) before touching prose.
3. **Divide into passages.** Usually a section or subsection. Name each passage's *job* in a few words ("diagnose the cause", "define publication", "state limits").
4. **Select moves.** For each passage, pick moves whose *Use when* fits the job and whose tags agree with the settings. At most two or three moves per paragraph. No two moves that list each other under *Conflicts with*. Moves under [extensions/](extensions/) add material: propose them, never apply them silently.
5. **Show the plan.** For each passage: its job, the moves chosen, and one line on why. Wait for approval.
6. **Rewrite.** Apply the plan passage by passage.
7. **Passes.** Run every file in [passes/](passes/) on the rewrite. Fix what they find. Together they catch the [anti-patterns](anti-patterns.md).
8. **Fidelity check.** Run [passes/fidelity-check.md](passes/fidelity-check.md) last: every claim from step 1 is present, unchanged in strength, and nothing has been added that was not approved.

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

Taste does not transfer; lens does. When casting a writer to a passage (see [examples/polyphony-white-paper.md](examples/polyphony-white-paper.md)), use their lens to find the passages where their style serves *this* text, and apply the style only there, within the document settings.

## Plan format

```
Settings: address impersonal · presence invisible · rhythm paratactic · register plain ·
          certainty flat with limits · persuasion mechanism · figuration literal

§1 Introduction
  P1–P3  job: show the problem in three cases
         moves: cases-first, build-then-land, cadence (closing line only)
         why: three parallel situations; one shared outcome to land on
  P4     job: diagnose the cause
         moves: two-step-diagnosis, plain-close
  ...
Adds proposed: none
```

## Files

- [properties.md](properties.md): the seven properties, their values, and each writer's defaults
- [catalogue.md](catalogue.md): every move and pass on one page
- [anti-patterns.md](anti-patterns.md): eight things to avoid in any text, and which pass catches each
- Move file template: *Use when · Don't use when · Conflicts with · Tags · Safe or adds · The move · Before · After · Pitfalls · Combines with · Source*
