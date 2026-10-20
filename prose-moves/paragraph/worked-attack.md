---
name: worked-attack
level: paragraph
tags: [persuasion: mechanism]
kind: safe
source: Stephenson (new analysis, not from the session; unreviewed)
---

# Worked attack

## Use when
- The text claims a system resists tampering, forgery or capture, and states this as a general guarantee.
- A reader with a security mindset would want to see one attack fail, step by step.

## Don't use when
- The text doesn't actually describe the defence. Run [attack-surface](../passes/attack-surface.md) and report it instead.
- The attack would teach readers something harmful that the text doesn't need.

## Conflicts with
- [staged-objection](../section/staged-objection.md) in the same paragraph. A staged objection answers a reader's doubt in principle; a worked attack walks one concrete attempt through the machinery.

## Tags
`persuasion: mechanism`

## Safe or adds
Safe, if every step of the defence is in the source. The attacker's moves are framing, not claims.

## The move
Name one concrete attacker and one concrete goal. Walk through what they do, step by step, and say at which step the system stops them and why. Start with the simplest attack, then one harder one. End with what neither attack could do.

## Before
> Anything else — an altered page, a forged page, a page written outside the gates — fails somewhere along that chain: the key does not decrypt for it, the gates do not pass for it, or the record does not point at it.

## After
> Take the simplest attack. A host serving the site changes one sentence in a page. The page now has a different address, so the root no longer matches, and the name still points at the old root. A reader who resolves the name gets the original page.
>
> Now a harder one. The attacker runs the generator themselves. The code is open, so they can. But the protocol key exists only as shares across independent nodes, so they cannot sign, and the record does not point at what they produce.
>
> An altered page, a forged page, a page written outside the gates: each fails somewhere along the chain.

## Pitfalls
- Only attacks the system easily defeats. Include the one that relies on a trust assumption, and say so.
- Attacks so detailed they read as instructions.

## Combines with
[first-principles](../section/first-principles.md), [edges-statement](../section/edges-statement.md), [attack-surface](../passes/attack-surface.md)

## Source
Stephenson (the security and cryptography reasoning in *Cryptonomicon*). Added after the session; not reviewed by the author.
