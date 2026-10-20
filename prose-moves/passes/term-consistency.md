---
name: term-consistency
kind: pass
lens: Doctorow
source: Doctorow's lens (provenance only)
---

# Term consistency

## What it checks
*Are the key ideas named, and do the terms drift?* Finds key terms used in more than one sense, and ideas referred to by more than one word.

## When to run
After rewriting, over the whole document, with the glossary at hand.

## How
1. List the glossary terms and any coined terms.
2. For each, find every occurrence and every near-synonym (owner / holder / publication owner; record / ledger / chain).
3. Flag each place where a synonym stands in for the term, or the term is used in a different sense.
4. List ideas that recur three or more times without a name. They may need [coin-the-term](../document/coin-the-term.md).

## Output
A table: term · intended sense · stray variants found (with locations) · fix.

## Example
| Term | Variants found | Fix |
|---|---|---|
| holder | "owner of the publication" (§5), "publication owner" (§4, §6) | replace with "holder" |
| record | "ledger" (§4, abstract), "chain" (§1, §6) | decide: record for the concept, chain for the technology |
| publication | defined three ways (abstract, §1, §3) | one definition, from the glossary |

## Source
Doctorow's lens: naming and repetition. Polyphony's open glossary list is the test case.
