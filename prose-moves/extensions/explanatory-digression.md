---
name: explanatory-digression
level: section
tags: []
kind: adds
source: Stephenson (new analysis, not from the session; unreviewed)
---

# Explanatory digression

## Use when
- The argument depends on a technical idea (content addressing, threshold keys) that many readers don't know.
- Explaining it inside the paragraph would bury the paragraph's point.

## Don't use when
- The idea is already explained elsewhere in the text: point there instead.
- More than once or twice in a document.

## Conflicts with
- The anti-pattern [the unbroken exposition lump](../anti-patterns.md): a digression must be one bounded unit, not an open-ended block.

## Tags
None. In an impersonal document, set the digression apart under its own heading or as a boxed note rather than with a visible narrator ("A note on…").

## Safe or adds
Usually **adds**: the explanation goes beyond what the source says. Safe only if the source already contains it.

## The move
Break off from the argument explicitly. Explain the one idea fully, from the ground up, with one concrete example. Then return explicitly to where the argument left off. The digression should be complete enough that a reader who knew nothing can follow the next section.

## Before
> The site is a tree of content-addressed pages. Each page's address is derived from its content, so any change to a page changes its address, and the root with it.

## After
> The site is a tree of content-addressed pages.
>
> *A note on content addressing.* Run a page's bytes through a hash function and you get a short string of fixed length. Change one comma and the string comes out entirely different. Use that string as the page's address, and the address becomes a promise about the content: whatever arrives at it either matches or doesn't.
>
> So any change to a page changes its address, and the root with it.

*(The hash-function explanation is new; it would need the author's approval. The "you" would be removed in an impersonal document.)*

## Pitfalls
- A digression that's more fun than the argument and takes it over.
- Not coming back, so the reader loses the main line.

## Combines with
[first-principles](../section/first-principles.md), [one-before-many](../paragraph/one-before-many.md)

## Source
Stephenson (long explanatory tangents in *Cryptonomicon*, *Snow Crash* and *Anathem*). Added after the session; not reviewed by the author.
