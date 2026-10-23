---
name: sentence-pass
kind: pass
runs: once per finished section
source: added from use
---

# Sentence pass

## What it checks
The sentence level, done once over a finished section rather than chosen per paragraph. In practice the sentence work that matters is diction, terms and accuracy; rhythm matters mostly at closes.

## When to run
After a section's paragraphs are settled, before the whole-text passes.

## How
1. **Diction.** Every word the intended reader would stop at: replace it or explain it in the same breath. See [plain-diction](../sentence/plain-diction.md).
2. **Terms.** Every key term in its glossary form, with no synonyms. See [term-discipline](../sentence/term-discipline.md).
3. **Referents.** Every "this", "they" and "the" points at something the reader can find, especially after cuts.
4. **Accuracy.** Every small qualifier is true ("anyone", "always", "only"). Flag doubts for the [author fact check](author-fact-check.md).
5. **Rhythm against the settings.** Check the document's rhythm setting, sentence by sentence only where it matters: runs of same-length sentences, a periodic sentence where the settings don't allow one. At paragraph and section closes, apply the method in [cadence](../sentence/cadence.md).
6. **Echoes.** Where a phrase from earlier can be picked up deliberately, keep it; where a repetition is accidental, cut it.

The files in [sentence/](../sentence/) are this pass's reference, not separate choices in the plan.

## Plain technical checklist

Apply strictly to technical description, requirements and lists (for example a [guarantee list](../section/guarantee-list.md)), and loosely to argument prose, where rhythm and emphasis matter as well. Paraphrased and adapted from ASD-STE100 Simplified Technical English, with ISO 24495-1 (plain language) and the US Federal Plain Language Guidelines as broader references. This is not an implementation of STE100, whose approved-word dictionary is too narrow for argument.

1. **One word, one meaning.** Don't use a word in two senses, and don't use two words for one thing.
2. **Common words, defined terms.** Prefer the everyday word; use a technical term only when it is the exact name and is defined.
3. **Short sentences.** Aim for at most 20 words in an instruction or requirement and 25 in a description. Longer is allowed in argument prose, but never two long sentences in a row.
4. **One idea per sentence.** One instruction, one requirement, or one claim.
5. **Active voice**, with the actor named, unless the actor really doesn't matter.
6. **Conditions first** in rules and instructions: "If the agreement ends, the site is rebuilt."
7. **No telegraph style.** Keep articles and small words; don't drop them to save length.
8. **No noun stacks** of more than three nouns ("publication agreement record entry").
9. **Simple verb forms.** Prefer plain present and past; avoid ambiguous -ing forms and stacked modals ("could potentially be able to").
10. **Lists for parallel items.** Put three or more parallel conditions or steps in a vertical list.
11. **Short paragraphs** with one topic each; in technical sections, about six sentences at most.

## Output
A list per paragraph: location · issue · fix.

## Example
On a white paper introduction: "disposition" → "habit" (diction); "a pseudonym" → "pseudonymous" (terms); "the neighbors" cut once what it referred to was gone (referents); "for anyone" cut because only authorised parties could act (accuracy).

## Source
Added from use: in practice, sentence-level work was diction, terms and accuracy far more than rhythm.
