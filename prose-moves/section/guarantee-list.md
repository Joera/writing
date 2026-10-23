---
name: guarantee-list
level: section
tags: [persuasion: mechanism]
kind: safe
source: joera, with Palmer and Robinson (Polyphony section 2, 23 October)
---

# Guarantee list

## Use when
- A section describes a component (author, publication, reader) of a protocol or system, and readers need to know exactly what it guarantees.
- The prose repeats itself because it is trying to both explain *why* and enumerate *what*.
- Several sections describe parallel components: they should share this shape.

## Don't use when
- The guarantees aren't enforced by the mechanism. A right that rests on goodwill is a promise: put it in the prose, not the list.
- The section is narrative or argument, not a component description.

## Conflicts with
- [numbered-mechanism](numbered-mechanism.md) in the same section: the list states what is guaranteed, not how it works step by step.

## Tags
`persuasion: mechanism`

## Safe or adds
Safe if every item is in the source. A new item is the author's call.

## The move
Two or three paragraphs of prose that explain why, then a numbered list that states what, under a plain heading ("What the protocol guarantees an author"). Write every item as a testable requirement on an implementation: "An implementation must let every author: …". Use *must* only; if something is optional, it belongs in the prose as "may", not in the list. Give each item a short **enforced by** pointer (the ledger, the second gate, the renderer's key) so the reader sees it's guaranteed by machinery. The prose and the list must not repeat each other.

## Before
> Four short principles, then two subsections that say much of the same again; the key-rotation line twice, "offer, not a transfer" twice.

## After
> [Three paragraphs: writing and sharing; identity; the portable byline.]
>
> **What the protocol guarantees an author**
>
> An implementation must let every author:
> 1. Write and revise without the network; publishing is a separate, deliberate act.
> 2. Keep their work encrypted to their own account, readable by a publication only under an agreement.
> 3. End any agreement alone, at any time, and have the site rebuilt without the work. *Enforced by: the ledger; the first gate.*
> [...]

## Pitfalls
- "Bill of rights" as a heading: it brings a state and a constitution with it.
- Extending rights to parties who aren't peers (governors aren't).
- Items that can't be tested against an implementation.

## Combines with
[edges-statement](edges-statement.md), [define-the-term](define-the-term.md)

## Source
joera's structure for the Polyphony component sections, with Palmer (must-only, testable items) and Robinson (enforced-by pointers), 23 October 2026.
