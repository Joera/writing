---
name: register-check
kind: pass
source: unattributed in the record
---

# Register check

## What it checks
That diction, address and presence match the document settings everywhere. Finds stray "you", stray "we", colloquialisms in a plain text, elevated words in a plain one, and things given feelings they cannot have.

## When to run
After rewriting, over the whole document.

## How
1. Search for second-person pronouns in an impersonal document, and first-person ones where presence is invisible.
2. Search for words above or below the chosen register.
3. Search for personification of systems ("the protocol would be glad", "the network wants").
4. Check each paragraph for **mixed voices** ([anti-pattern 6](../anti-patterns.md)): paratactic and periodic sentences, or "you" and impersonal address, inside one paragraph.
5. Check exceptions the settings allow ("this paper" for scope and intent).

## Output
A list of locations, each with the stray word and a replacement.

## Example
From the Polyphony draft (settings: impersonal, invisible, plain):
- §3 "it is not a platform where **you** rent space" → "it is not space rented on a platform"
- §6 "**you** cannot battle-test an interface you can never amend" → "an interface that can never be amended cannot be tested against real use"
- §6 "this protocol **would be glad** to be its inspiration" → "this protocol could be its starting point"

## Source
Not attributed in the session record. The examples are the fixes found in the session.
