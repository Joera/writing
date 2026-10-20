# writing

A structured set of writing skills, built as plain Markdown so they can be read by people and loaded by Claude as a skill.

The first and so far only skill is **prose-moves**: a catalogue of moves (things a writer does to a passage) and passes (checks run on every text), drawn from five writers and organised by the level of text they act on.

```
prose-moves/
├── SKILL.md        # the router: settings → selection → plan → rewrite → passes
├── properties.md   # the seven document-level properties, and each writer's values
├── catalogue.md    # every move and pass on one page, with tags
├── anti-patterns.md # eight things to avoid, and which pass catches each
├── document/       # moves that shape the whole text
├── section/        # moves for a section or group of paragraphs
├── paragraph/      # moves for one paragraph
├── sentence/       # moves for one sentence
├── passes/         # checks run on every text, after rewriting
├── extensions/     # moves that add material; used only with the author's approval
└── examples/       # worked applications
```

## How it came about

The design was worked out in a session of 14–15 October 2026 while revising the Polyphony white paper. Each writer was analysed, their style turned into **moves** (chosen per passage) and their critical lens turned into **passes** (run on every text). The writers are recorded as provenance only. Moves are selected on properties, never on whose they are.

| Writer | Style becomes moves for | Lens becomes a pass for |
|---|---|---|
| Kim Stanley Robinson | mechanism, parataxis, plain exposition | is the mechanism actually explained? |
| Ada Palmer | staged objections, calibrated certainty, direct address | what does each claim rest on; what objections are unanswered? |
| Cory Doctorow | naming, stage models, reframes, remedies | are key ideas named; do terms drift? |
| Ursula K. Le Guin | thought experiments, costs, cadence, images | what does the language presuppose; how does it sound aloud; are costs hidden? |
| Neal Stephenson\* | first principles, worked attacks, digressions, sustained conceits | could someone break it, and does the text say why they can't? |

\* Added after the session and not yet reviewed; see [GAPS.md](GAPS.md).

## Status

Built from the session record, which holds the design in full but the writer analyses only in summary. Where a file goes beyond what the record supports, it says so. See [GAPS.md](GAPS.md) for the list.

## Using it as a Claude skill

Copy or symlink `prose-moves/` into `.claude/skills/` (project) or `~/.claude/skills/` (personal). `prose-moves/SKILL.md` carries the frontmatter Claude needs.
