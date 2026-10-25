# Polyphony: A Publishing Protocol for Independent Authors and Collective Publications

Working draft, assembled 15 October 2026 from the session record (`style/polyphony-session-record.md`). Introduction is joera's version of 15 October; everything else is the 10 September draft, unedited. Open items are listed at the end.

## Abstract

Publishing together runs on dependency. The writer's byline, income, and audience sit in whatever system the publication or the platform controls, so the side that can afford to walk away sets the terms. This paper proposes a publishing protocol in which neither party holds that position: authors keep cryptographic ownership of their work and can revoke it at any time; a publication is a brand, and its editorial policy is governed by a threshold rather than by a single owner — the agreements between author and publication, which both produce and either may end, are recorded on a ledger neither party operates; and the generator that renders and signs each page is open code bound to a key, executed by independent nodes, so no single party can produce a valid rendering alone — where "valid" means the rendering the author and publication agreed to. The protocol has an upgrade path and is subject to governance by quorum. It is meant to function within the rule of law. It is not a tool for protecting journalists from a hostile state. The protocol offers the rails for a rewards and payment model without imposing one: no third party is required, no fiat on-ramp or off-ramp is needed for it to function, and revenue splits between author and publication without passing through a single hand first. The result is a relationship that is real and temporary at once: writers and publications associate on terms either can end, and an editorial line held by people free to leave means something a captive one cannot.

## 1. Introduction

Much of the media speaks in unison, and often no one has ordered it. Writers fall in line because disagreeing costs them too much, for two reasons. First, there are only a handful of places to publish, so a writer who falls out with one has few others to turn to. Second, leaving usually means leaving their work behind. Most writers find it safer to go along. Polyphony addresses both. First, anyone can start a publication with little effort, alone or with others. Second, writers keep their work when they leave. With more publications competing for writers, a writer who disagrees has somewhere to go, and the media has less reason to speak with one voice.

Polyphony is a protocol, not a platform. On a platform, whoever owns the infrastructure has, whatever the law says, practical control over a writer's work, their subscriber list and their income. In Polyphony, the work is stored encrypted. Only two parties can decrypt it: the author, and the renderer when it builds a publication's pages, which it can do only as the author's agreements allow. Readers see the finished pages, never the stored work. The machinery that publishes it is meant to be run not by one owner but by many independent parties.

Three situations show the problem as writers and editors meet it today. Two journalists work a beat together for years: the same sources, the same enemies, a running series of investigations that readers cite by the site's name rather than by either byline. The site belongs to one of them. Half the archive is the other's work. Then a question arrives that splits them cleanly, and one of them says so in public, about his own colleagues. Shortly after, he is gone. The departure is announced as a parting of ways, and for a while that is the story. When it finally breaks open, it breaks open on social media, and the two accounts don't meet. He says he was fired for dissent, and that his work was kept and his name managed without him. The owner says he was let go for cause. Whichever account is true, the outcome is the same. Years of his work still stand on the site, under the masthead of the owner he is accusing, and whether they stay, come down, or quietly change bylines depends on the owner's goodwill, not on anything he controls.

A group of writers runs a publication on a platform that promised to stay out of the way. It does, including when it starts carrying, and taking a cut from, writing that some of the group cannot stand beside. Half want to leave at once. Half say the audience is here, and principles don't pay rent. The email list can be exported. The rest cannot: the paying readers, who found them through the platform's own recommendations, and the years of links pointing at the platform's address. Whoever leaves takes a list and starts over. Whoever stays keeps the rest. The disagreement was about the writing. The split is about the platform's terms, which none of them set and none of them can change.

A war breaks out, or a law passes that divides a country, and an editor sets out to publish the widest range of serious views on it, side by side, under one name. The invitations go out. Some say yes at once, mostly people with little to lose, whose positions are already known. Others hesitate. They don't yet know who else will be in it, and once their piece is in, it stays beside whatever arrives next. If one contribution later becomes unbearable, leaving means asking the editor to take their piece down, and the editor can agree, delay, argue or refuse. A writer who is refused has one lever left, which is to go public, and then the withdrawal becomes the story. So the most careful writers stay out, and the range the editor wanted narrows before the first piece appears.

In all three cases, the disagreement is settled by something other than the writing: by who owns the infrastructure. Writers and editors who publish together have two options today, and both end there. They can join a platform, whose terms can change or end without them. Or they can host their own site, which puts the site, the subscriber list, the archive and the revenue in the hands of whoever holds the credentials. Either way, a falling-out costs the writer most: their income, their work and the home of their byline. Editors lose too: the careful writers they most want stay out. What accumulates is not a policy but a habit: writers learn to either align or stay out. The result is a publication that speaks with one voice and can point to no instance of having enforced it.

Publishing has always had three parties: the author, the publication, and the press that turns a work into something readers can see. The relationship was never equal. The author could not take a work to the press directly. The publication controlled the relationship with the press, and much of its power over the author came from that. Online, the press is the server, the publishing software or the platform. Polyphony moves the press into a neutral position between the two. Its press is an HTML renderer: open code that does what the code says and nothing else. It decrypts a work, renders the page and signs it with a key of its own, and it does so only while an agreement covers that work. The renderer is designed to be impartial, and its key is beyond the reach of any single party, so that no one can produce a valid page alone: not the author, not the publication, not whoever runs the machines.

The rest follows from that. The work stays encrypted to the author, who shares it with a publication under an agreement. Each agreement is recorded on a public ledger that neither party operates, so ending one is a fact, not a request. Once the author ends their agreement, the work can no longer be decrypted for the publication's pages, and the author, or anyone acting for the publication, can have the renderer rebuild the site without it, so what readers see follows the agreements in force. No person stands in between who could delay, argue or refuse. The renderer itself is governed, and the governing is public: governors choose which code it runs, and any change is visible.

Because the renderer is impartial, its signature means something. Every page it produces carries that signature inside it, along with references to the author's own signatures: on the text, and on the agreement with the publication. Together they show who wrote the page, that author and publication agreed to publish it, and that the copy in front of the reader is unchanged since it was rendered. The author is identified by an account, which may be a pseudonym, but the account is public, and every page published under it points back to it. So a byline becomes something a reader can check, and a reputation becomes something an author builds over time and no one else can claim. That matters more as machine-written text becomes cheap and plentiful. The protocol cannot tell whether a person or a model wrote the words. It can show who stands behind them, and over time, that is what a reader has to go on.

The protocol's edges are worth stating plainly. It is built for places where the threat to editorial independence is less the state than whoever owns the infrastructure. It is no defence against a state-level adversary: a government that goes after a journalist can compel the parties to any arrangement, this one included. Nor does it decide how anyone gets paid, or how its own machinery is governed. Payment is up to each publication: the protocol leaves room for any model and removes the paymaster, so neither party is paid from the other's hand. Governance is up to each implementation of Polyphony, which chooses its governors and their rules. Where there is an upgrade path, which in practice is likely, governors can add restrictions, censorship included. They cannot do so silently, and anyone who objects can fork the protocol and run another implementation. Polyphony makes the conditions of publishing neutral and public. It does not promise a world without censorship.

Go back, then, to the three cases.

The journalist who was let go would still be in a dispute with the site's owner, and the protocol would not decide who was right. But his years of investigations would no longer depend on the owner's goodwill. He could end his agreement, and from the next rebuild the site would stop showing them, and he would be free to publish them elsewhere. No one but him could change a word or a byline.

The writers whose platform began carrying work they could not stand beside would not be on someone else's platform at all. The name and address their readers know would be their own, and payments would come to their own accounts. They might still disagree about what to do. But if they split, each half would keep its own work, and either could start a publication of its own without building one from scratch.

The editor gathering the widest range of views on the war, or the law, could get the careful writers to say yes. They would not need to know in advance who else would join, because if a later piece became unbearable, they could take their own out themselves, without asking the editor and without going public.

In each case, disagreement has somewhere to go. A publication that wants to keep its writers has to persuade them, and the writers who stay are there by choice. That is what polyphony means: many voices under one name, held together by argument rather than by ownership.

## 2. Authoring

Writing is local, and publishing is a separate, deliberate act. An author writes and revises on their own machine, and nothing in the protocol has to be reachable for that. The protocol defines an interface, not an application, so an author's work never depends on a single program: any number of writing tools can publish through it, ideally across implementations as well as within one. When the author publishes, they do not hand the work over. They encrypt it to their own account, place it on distributed storage, and share it with a publication under an agreement: the renderer can decrypt it only while that agreement is in force. It is an offer, not a transfer, and the author can make the same offer to anyone else.

Behind every byline is an account. The account is public and permanent; the keys beneath it are not. Keys can be rotated without losing the account, so an author's history does not hang on a single secret. The account may be pseudonymous. The protocol never holds a legal name, though an author is free to tell anyone they like. An account may also name a wallet, with a signature that links the two, so that any payment due to the author arrives there directly, not through the publication's hands.

Every author also keeps a public list of what they have published: their works and their agreements with publications, past and current, kept on the ledger and curated by the author alone. This makes the byline portable. Long after leaving a publication, an author can still show what they published there and when, and anyone can check it against the ledger.

### What the protocol guarantees an author

An implementation must let every author:

1. Write and revise without the network; publishing is a separate, deliberate act.
2. Keep their work encrypted to their own account, usable by the renderer only under an agreement.
3. End any agreement alone, at any time, and have the site rebuilt without the work.
4. Revise and reissue a work, with every version signed and recorded.
5. Rotate keys without losing their account, history or reputation.
6. Publish pseudonymously; the protocol never holds a legal name.
7. Receive their share of any payment directly, at a wallet linked to their account.
8. Publish the same work anywhere else; no publication gets exclusivity.
9. Keep a public list of their works and agreements, past and current, that only they curate and that survives leaving any publication.

## 3. Publication

A publication is a name, a look, a domain its pages are served from, and an editorial policy. The domain is self-owned: it is not a platform where you rent space. There are no constraints on design. It is its own thing and looks like it.

### Governance

It decides its own governance, with one holder or several and whatever threshold it sets for acting, and what the protocol guarantees is not the shape but the record of it, meaning the shape is explicit and no change to it is silent. Its decisions are acts rather than settings, so admitting a piece after review, whitelisting an author for direct publication, and changing the site's design all go through the same procedure. There is no privileged path to altering what a future render produces.

### How work is admitted

Whether a proposed work renders immediately or waits depends on whether the publication has whitelisted the author. A whitelisted author proposes and the work goes straight to the generator, while an author who is not whitelisted proposes and the work sits on a pending list where the publication can read it and decide whether to approve it for rendering. The protocol does not choose between these modes. The publication does, and can change its stance toward an author at any time. What the protocol requires is that no change is silent. The author's proposals are recorded as they happen, and the publication's approvals and refusals are too. The publication cannot rewrite a work, only decline to render it, on the record. Editorial disagreement is settled by argument, because position is no longer available to either side.

### What the record makes visible

The publication's decisions are public. Grants and revocations are written down as they happen, so what it currently permits is verifiable by anyone. Revenue goes to the publication's own address, and the address is public. The people behind the keys may be pseudonymous, but the trail of their decisions is not.

### What the publication does not own

The publication does not own the work, and that is what makes it worth joining. Its contributors can leave at any time, taking their work with them, so a publication that wants to keep them must persuade them. A line it cannot hold by position, it must hold by argument.

### What a reader sees

To a reader, the publication is a domain name that authenticates the content it serves. The page is the render of the agreements in force, signed by the author and vouched for by the publication, so what the domain serves conforms to the wishes of both. Because the bytes are content-addressed, no host can alter them without the alteration showing, and because the publication is its record, what the name points to is always its present state, readable as it is with nothing to maintain. A withdrawn work or an old version is no longer part of that state, though it may survive in copies elsewhere, and the name does not vouch for it. The path to that content is the domain, and while browsers do not support distributed domains, it is prone to the risks of DNS, where the name can be seized, poisoned, or made hard to resolve. The protocol makes the name the publication's own, but it does not make it immune to the risks of the path it rides on.

## 4. Agreements

An agreement is between an author and a publication, over a single work. It records who wrote it, that the publication may render it, and how revenue divides between them. It is entered by both parties and can be ended by either.

Agreements are recorded on a public ledger: neither party operates the record, neither can rewrite it, and there is no host to pull. This is what makes ending an agreement a fact rather than a request.

The set of agreements currently in force is what the publication consists of. There is no separate list of articles: a work is published because an agreement covers it, and ceases to be published when that agreement ends. Adding a work and permitting it are the same act.

What the record holds is not the work. Source material is stored encrypted and never made public: it exists in readable form only when it passes the gates, to be used in the render process or to be read by a publication owner. What a reader receives is the rendered page, not the source. Anyone can see that a work was revised and when; what is not under a current agreement is not rendered — and this applies to every version of a withdrawn work, not only the latest.

Neither party owns the record. An author appends a work and can retract it; a publication admits a work and can decline to keep carrying it. Each version an author publishes is recorded, so a publication can see that a piece has changed and an author can show what they published and when. Only the author of a work may revise or withdraw it; neither the publication nor another author can alter it in the record.

Ending an agreement is a single act with immediate effect. The author does not ask, and the publication does not need to agree. The next rendering is produced without that work, and no signer's standing extends to it any longer. What the ledger settles is what was agreed and when, not whether either party honored it. A page that keeps circulating after a withdrawal is a copy the name no longer vouches for.

## 5. Gates

The generator is open code, readable and runnable by anyone. What keeps it from being used for anything are the gates: conditions read from the public record at the moment the generator acts, which must pass before it can decrypt or sign. A gate is enforced by the machinery itself — by what the code will do and what the key will sign — not by any party's decision when the moment comes.

The first gate is the right to rerender the publication. It is open to the author of a work, an owner of the publication, or someone the publication has authorized; no one else may set the generator in motion to update the website. The second gate is the deal: a work's source material is decrypted only inside the generator, while rendering, and only while the work is under a current agreement between its author and the publication. Both gates must pass before the generator may use a work's source material.

The third gate governs disclosure. The rendered page — never the source material — is encrypted at render, and the generator releases it to a reader only when an on-chain check passes. The check is a gate, not a rule: a publication plugs in any logic it chooses — payment, membership, a whitelist — and the gate answers yes or no, on chain, without ever holding the value. What money means on that gate, and who pays for the machinery, are treated in the Money section.

## 6. Protocol

A publication runs on machinery it does not control. The protocol is that machinery: it renders pages, signs them, and records what it has done. Like the publication, it is two things — something governed, and something with a clear, open, auditable path of records and authentication. The two are kept apart: who governs the protocol and what the protocol may do are different questions, and this section treats them that way.

Everything about the protocol can be checked from the public end by walking the chain: a domain name, its owner, the Safe that owns it, the module that holds its records, and the records that say what the protocol may do. Nothing else is needed to see how it behaves — no private party vouches for it. The records hold two things: which actions the generator may run, and the public part of the protocol key. The private part exists only inside those actions, and is reached under on-chain conditions: the caller is the author of a piece, an owner of the publication, or someone the publication has authorized. No single party holds the protocol key: it exists as shares across a distributed network of independent nodes, and is used only when enough of them act together.

Actions are referenced by content-addressed ID, so none can be altered without the alteration showing. The IDs live on chain, reachable through the domain name the Safe owns, and the code they point to is open source and readable by anyone. The path from the name to the code that runs is short and public.

The generator runs two actions. The first renders. It is the only code that may use the protocol key to decrypt source material, and it does so only under the gates, set in motion by an author, a publication owner, or someone the publication has authorized. It decides which content passes from the encrypted state into the unencrypted state the templates draw on. Its output is the HTML of a new page and the path that page occupies in the site's structure.

The second action rebuilds the tree — a Merkle tree of content-addressed items carrying the updates. A change to one page can force changes to others, because that page is referenced on them; those patterns are declared in the publication's config. One publish can therefore update many pages at once, and all of them land in the new tree. When the tree is ready, the protocol key — usable only inside the action, only when an author or someone acting for the publication sets it in motion — signs the tree's root into the records on the smart contract, pointing the ENS name at the new root. The contract admits that write only from the protocol key.

The net effect is one chain of authorization: only approved code, running with the approved key, can produce something that is recorded on the smart contract and served from the domain name. Anything else — an altered page, a forged page, a page written outside the gates — fails somewhere along that chain: the key does not decrypt for it, the gates do not pass for it, or the record does not point at it.

### Gernerator

The generator runs in a runtime sealed against outside interference that can prove, to anyone checking, that it executed the code as written.

### Governance

The protocol has an upgrade path, which is subject to governance by quorum.

The upgrade path of the protocol is governed, deciding which code may use the protocol key to decrypt or sign with. The power governance hold is suppression, not forgery. No one can make the machinery produce a rendering that was not agreed to, because the gates, the key, and the record all have to align for a page to be served. The protocol, through its upgrade path, could introduce blacklists for authors or publications and that will be a public act

How many governors there are and at what threshold they act are choices for those who run the protocol, and this paper does not set them. What it commits to is that the choices are explicit and public.

The upgrade path is kept for maturation, not for control. A protocol that must grow into a working user experience has to be able to change while it is young, and you cannot battle-test an interface you can never amend. But a version with no upgrade path at all, one its own governors could not alter, is possible to build, and this protocol would be glad to be its inspiration.

## 7. Monetization

The protocol's approach to rewarding work is three rails and nothing more. A destination: every author account is an address and every publication is an address, so whatever a reader pays has somewhere to go, and no party has to be invented to receive it. A division: the agreement records how any payment splits, executed on chain, so neither party is paid from the other's hand. A disclosure mechanism: the third gate — an optional gate on the decryption of rendered content, into which any on-chain logic can be plugged, a payment, a membership, a subscription. The gate answers yes or no, on chain, and never holds the money. The business model is the publication's design on those rails; the protocol neither chooses it nor needs to know it. Where value enters and leaves is the account holder's choice, not the protocol's: no fiat on-ramp or off-ramp is required for any of this to function, and none is forbidden.

## 8. Costs

Using the protocol has a cost — blockchain writes, distributed storage, and the network functions that render — and it is separate from any rewards: each participant pays for its own use, the author for their own publishing, the publication for its own. A for-profit publication can make this easy by folding the cost into a subscription, so a reader's payment covers the machinery as well as the work. Anyone who does not want that model — a non-profit, a hobbyist, an author publishing alone — can bring their own: run the machinery themselves, pay their own way, and never enter the subscription economy.

## 9. Verification

Reading begins at a name. From the name to a page, the path runs through the name's record, the site that record addresses, and the page itself — and at no point is the reader asked to trust whoever happens to be serving the page.

The name is an ENS domain. Its record is a content hash — the CID of the site's current root, written by the generator when it publishes, and only then. The record addresses content, not a host or an operator, so what the name resolves to is the site as it is now — readable as it is, nothing to maintain.

The site is a tree of content-addressed pages. Each page's address is derived from its content, so any change to a page changes its address, and the root with it. A host can store and serve the site, but it cannot alter a page and have the record still point at it: the altered page no longer matches the address the name resolves to.

Each page is signed HTML. At render, the generator signs the page and embeds the proof in the page itself, so the document proves what it is without any external file: who wrote it, who published it, that it is what was rendered, and that it has not been altered.

---

## Open items (from the session record, not yet applied)

- **Glossary.** Draft in 1.3; "publication" is defined three ways (abstract, intro, section 3). "Holder" replaces "owner of the publication" in sections 4–6.
- **Abstract.** Still the 10 September version; predates the core argument.
- **Build status.** Third gate is described, not built; section 5 is in present tense. Section 6 describes the key as already held in shares by independent nodes; per joera (23 Oct) the network of independent parties is the ambition, currently run by one company. Mark it as planned.
- **Trust assumptions.** State once in section 6 (colluding nodes below threshold; sealed runtime guarantees).
- **Known fixes.** Stray "you" in section 3 ("rent space") and section 6 ("you cannot battle-test"); "would be glad" in section 6; "[...]" placeholder in section 2; heading "Gernerator"; "The power governance hold" (grammar, no full stop).
- **Introduction.** See intro-review.md.
- **Key custody (section 6).** joera, 23 Oct: the renderer key is generated inside a TEE and never leaves it; TEE operators get a recovery secret, not the key. State as trust assumptions: the TEE vendor's guarantees, and that the recovery secret cannot rebuild the key outside a TEE (or is split so no single operator holds it). Otherwise "beyond the reach of any single party" in the intro does not hold.
