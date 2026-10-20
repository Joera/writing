# Properties

Seven generic properties describe a text at document level. They were found while resolving real conflicts between moves, and they are the only basis for selection. Add a property only when a real conflict appears that none of these describes.

## The seven

| Property | Question it answers | Values in use |
|---|---|---|
| **Address** | Who is the reader made to be? | impersonal · "you" · any |
| **Presence** | Is the writer visible in the text? | invisible · visible · strongly visible |
| **Rhythm** | How do sentences and paragraphs move? | paratactic · paratactic, short · periodic · cadenced · cumulative, digressive\* |
| **Register** | How formal is the diction? | plain · elevated · colloquial · technical-colloquial\* |
| **Certainty** | How firmly are claims held? | flat, with limits · calibrated · flat, polemical · open, holds ambiguity · flat, confident\* |
| **Persuasion** | What does the arguing? | mechanism · objection · mechanism + case · thought experiment · first principles + worked example\* |
| **Figuration** | How much imagery? | literal · moderate · everyday analogy · sparse, precise, central image · sustained conceit\* |

\* Values added with Neal Stephenson, after the session. Not yet reviewed by the author.

Notes on values:

- **Paratactic**: clauses side by side, joined by "and", semicolons or full stops rather than subordination. **Periodic**: the main clause held back to the end. **Cadenced**: tuned for sound, with a deliberate fall at the close.
- **Technical-colloquial**: exact technical terms in an otherwise casual, often comic voice. **Sustained conceit**: one analogy extended across several paragraphs, part for part.
- **Flat, with limits**: claims stated without hedging, and the limits stated explicitly and once. **Calibrated**: each claim carries the confidence it deserves ("probably", "we know", "no one knows").
- **Literal** figuration may still carry images the text already uses; it does not introduce new ones.

## Where each property is decided

Settings are document-level and bind everything below. Two properties are also *exercised* lower down:

- **Voice** (address + presence + register) is decided once, for the whole document.
- **Rhythm** is set for the document but realised per paragraph, so rhythm conflicts are resolved at paragraph level: a paragraph is cumulative or periodic, not both.

## Writers' defaults

Provenance only. These describe each writer's habits, not what a document should choose.

| Property | Robinson | Palmer | Doctorow | Le Guin | Stephenson\* |
|---|---|---|---|---|---|
| Address | impersonal | "you" | "you" | any | impersonal (fiction) / "you" (essays) |
| Presence | invisible | visible | strongly visible | invisible (fiction) / visible (essays) | visible, wry |
| Rhythm | paratactic | periodic | paratactic, short | cadenced | cumulative, digressive |
| Register | plain | elevated | colloquial | plain | technical-colloquial |
| Certainty | flat, with limits | calibrated | flat, polemical | open, holds ambiguity | flat, confident |
| Persuasion | mechanism | objection | mechanism + case | thought experiment | first principles + worked example |
| Figuration | literal | moderate | everyday analogy | sparse, precise, central image | sustained conceit |

## Tagging moves

A move is tagged only on the properties it depends on, written `property: value`. A move tagged `address: "you"` is out in an impersonal document. A move with no rhythm tag works in any rhythm.
