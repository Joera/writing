# Worked example: the Polyphony white paper

How the skill was applied to *Polyphony: A Publishing Protocol for Independent Authors and Collective Publications* (draft of 10 September 2026), in the session of 14–15 October 2026. Steps 1–5 of the procedure in [SKILL.md](../SKILL.md); the full rewrite has not been done yet.

## 1. Document settings

| Property | Setting |
|---|---|
| Address | Impersonal |
| Presence | Invisible; "this paper" allowed for scope and intent |
| Rhythm | Paratactic; cadenced at section closes; periodic only for gate conditions |
| Register | Plain |
| Certainty | Flat, with explicit limits; trust assumptions stated once (section 6) |
| Persuasion | Cases + mechanism (introduction); mechanism (sections 2–9) |
| Figuration | Literal; carry existing images only (keys, room, door, rails, gates, chain, paymaster) |

What these rule out: [direct-address](../paragraph/direct-address.md), [aside](../extensions/aside.md), [everyday-analogy](../extensions/everyday-analogy.md), [working-metaphor](../extensions/working-metaphor.md), [polyphony](../extensions/polyphony.md), [one-line-paragraph](../paragraph/one-line-paragraph.md) except sparingly, and periodic sentences outside gate conditions.

Other document-level choices:

1. Fix terms first (glossary). "Publication" is defined three ways (abstract, introduction, section 3).
2. Each formulation stated once in full; one deliberate repetition (the closing line).
3. Order stays inside-out (author → publication → agreements → gates → protocol → money → costs → verification); add a closing that returns to the cases.
4. Mark build status consistently (third gate: described, not yet built; section 5 uses present tense).
5. State trust assumptions explicitly (threshold not reached by colluding nodes; guarantees of the sealed runtime).
6. "Holder" instead of "owner" for the governance role.
7. Read-aloud pass on the introduction.

Open decisions: does "room" return at the end; is there a call to action; which concept name becomes fixed.

## 2. Casting

Each writer's lens found the passages where their style serves this text; their style applies only there, within the settings above. Unit: section or subsection. Parallel passages share one writer.

| Passage | Writer | Likely moves |
|---|---|---|
| Abstract | Doctorow | thesis-up-top, coin-the-term, plain-diction |
| 1. Three cases | Le Guin | cases-first, carry-the-image, cadence (closes) |
| 1. "Someone holds the keys" | Robinson | two-step-diagnosis, build-then-land |
| 1. The protocol's move | Robinson | mechanism-then-consequence, hinge-connectives |
| 1. Deliberately narrow | Palmer | edges-statement, qualifying-parenthesis |
| 1. To a reader / departure | Le Guin | cost-inside, balanced-pair |
| 2. Opening principles | Doctorow | numbered-mechanism, plain-close |
| 2. Identity | Palmer | define-the-term, calibrated-certainty |
| 2. Author's rights | Palmer | staged-objection ("is this DRM?") |
| 3. Publication definition | Palmer | define-the-term |
| 3. Governance | Robinson | one-before-many |
| 3. How work is admitted | Robinson | mechanism-then-consequence |
| 3. What the record makes visible | Doctorow | catalogue-paragraph |
| 3. What the publication does not own | Le Guin | cost-inside, plain-close |
| 3. What a reader sees | Palmer | fact-qualification-consequence |
| 4. Agreements | Robinson | colon-as-which-means, term-discipline |
| 5. Gates | Palmer | periodic-sentence (gate conditions), calibrated-certainty |
| 6. Protocol (chain, actions) | Robinson | numbered-mechanism, recap |
| 6. Governance | Palmer | edges-statement (trust assumptions) |
| 6. Why an upgrade path | Le Guin | held-pair |
| 7. Monetization | Doctorow | numbered-mechanism |
| 8. Costs | Le Guin | cost-inside |
| 9. Verification | Robinson | mechanism-then-consequence |
| Closing (new) | Robinson with Le Guin | return-to-cases, carry-the-image, cadence |

The *Likely moves* column is a starting point added when building this skill; the session fixed the writer per passage, not the moves.

Contested passages in the session: the platform case, costs, and the closing.

### Stephenson (proposed after the session, not reviewed)

His lens ([attack-surface](../passes/attack-surface.md)) points at the passages that make security guarantees. Under this document's settings his style can only enter through moves that keep figuration literal and voice impersonal, so [sustained-conceit](../extensions/sustained-conceit.md) and the visible narrator are out.

| Passage | Current writer | Proposal |
|---|---|---|
| 5. Gates | Palmer | add [worked-attack](../paragraph/worked-attack.md) after the gate conditions |
| 6. Protocol (chain, actions) | Robinson | add [worked-attack](../paragraph/worked-attack.md) for "the net effect is one chain of authorization" |
| 9. Verification | Robinson | contest: Stephenson, with [worked-attack](../paragraph/worked-attack.md) and [explanatory-digression](../extensions/explanatory-digression.md) on content addressing (adds) |
| 2. Identity | Palmer | add [first-principles](../section/first-principles.md) for "an account outlives its keys" |
| All sections | – | option: [glossary-epigraph](../document/glossary-epigraph.md) once the glossary is fixed |

The attack-surface pass on the current draft flags two unstated trust assumptions (colluding nodes; the sealed runtime), which matches document choice 5.

## 3. Fixes found by the passes

- [register-check](../passes/register-check.md): stray "you" in section 3 ("rent space") and section 6 ("you cannot battle-test"); section 6 "would be glad" (protocol given feelings).
- [crowding-and-leaping](../passes/crowding-and-leaping.md): "\[...\]" placeholder in section 2; empty block in section 6.
- Typos and grammar: heading "Gernerator"; "The power governance hold" (grammar, no full stop).
- [term-consistency](../passes/term-consistency.md): name / domain / ENS; record / ledger / chain; generator / protocol / machinery; account / identity / pseudonym; work / source material / page; "vouched record".

## 4. What the session learned about the method

- A staged debate between the four writers mostly projects each writer's taste onto the text. The useful findings came from their lenses. So lenses became passes and styles became moves.
- Plain three-sentence explanations beat short epigrams ([epigram-audit](../passes/epigram-audit.md)).
- Say the good news; leave the mechanism for the unpacking.
