---
name: first-principles
level: section
tags: [persuasion: mechanism]
kind: safe
source: Stephenson (new analysis, not from the session; unreviewed)
---

# First principles

## Use when
- A design choice looks arbitrary unless the reader sees the constraint that forces it.
- The constraint is something everyone already accepts (keys leak; a host can change bytes).

## Don't use when
- The design was a preference, not forced by a constraint. Deriving it would overstate.
- The reader only needs to know what the design is, not why.

## Conflicts with
- [mechanism-then-consequence](../document/mechanism-then-consequence.md) for the same passage. That move describes how a thing works; this one derives why it has to work that way. A section can use one, then the other.

## Tags
`persuasion: mechanism`

## Safe or adds
Safe, if the constraint and each step are in the source or are common knowledge. A constraint the source never mentions is an add.

## The move
Start from one basic fact the reader already accepts. Derive the design step by step from it ("If… then… so…"), each step a short sentence. Arrive at the design as the only reasonable answer, and then name it.

## Before
> An account is not a name, and it outlives its keys. The record holds an account. Keys sit beneath it and are replaceable — an identity that cannot survive a key rotation is an archive hostage to a single secret.

## After
> Start with a key. A key is a secret, and secrets get lost, leak, or have to be replaced. If an author's identity were the key, replacing it would make them a new author, and every past work would belong to someone who no longer exists. So the identity has to sit above the keys. That is the account: the record holds it, and the keys beneath it can be replaced.

## Pitfalls
- Pretending a choice was forced when alternatives existed. Say so if they did.
- Starting from a "first principle" the reader doesn't share.
- Too many steps; four or five is the limit before the reader loses the thread.

## Combines with
[hinge-connectives](../sentence/hinge-connectives.md), [worked-attack](../paragraph/worked-attack.md), [glossary-epigraph](../document/glossary-epigraph.md)

## Source
Stephenson (engineer's reasoning from the ground up, in the essays and in characters like Waterhouse in *Cryptonomicon*). Added after the session; not reviewed by the author.
