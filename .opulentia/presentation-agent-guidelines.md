# Slashpresent Execution Contract

Treat `/workspace/slashpresent/index.html` as the only authored deck source of truth.

## Read Order
1. `DESIGN.md`
2. `BRIEF.md`
3. `docs/slide-blueprints.md`
4. `.opulentia/reference-deck-summary.md`
5. `.opulentia/presentation-seed.json`
6. Selective reads of `index.html`

## Core Rules
- Keep all substantive slide authoring inside `index.html`. Do not create detached `slide-XX.html` files.
- Keep `BRIEF.md` current with audience, thesis, proof points, and open questions.
- Keep `.opulentia/presentation-seed.json` aligned with slide order, slide role, and editorial obligations.
- Keep `.opulentia/slide-manifest.json` aligned with the built deck so preview/publish reconciliation stays coherent.
- Use `context/` for source intake and `archive/` for retired material instead of deleting prior work.
- Reuse the strongest existing slide patterns in the reference deck before inventing new layout systems.
- Run `node scripts/validate-deck.mjs index.html` before final preview/build when available.

## Composition Rules
- Every slide needs a clear editorial point of view and one dominant visual anchor.
- Replace shallow bullet pages with charts, matrices, proof bands, process rails, or image-led splits when they communicate better.
- Every slide needs `<aside class="notes">` speaker notes with key message, evidence, and transition.
- Every non-obvious metric or factual claim needs a citation in speaker notes.
