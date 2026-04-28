# Slashpresent Design Brief

This file is the visual source of truth for deck work in this repo.

## Core Rules
- Keep the deck editorial, evidence-led, and context-specific. Generic consultant filler is a failure.
- Choose one dominant heading/body pairing and keep hierarchy obvious.
- Prefer one accent family per deck. Avoid lazy purple-on-white defaults.
- Alternate proof-dense slides with cleaner slides so the deck has rhythm.
- Every slide needs one visual anchor: thesis statement, KPI rail, chart, comparison table, diagram, or image-led composition.
- Treat each slide as a 1280x720 editorial frame with one primary idea. One strong viewpoint plus one strong visual beats three weak ideas competing for space.
- Write assertion-led headlines. A slide title should sound like a conclusion, claim, or decision, not a filing-system label.
- Use light/dark contrast intentionally across adjacent slides to create pace, but keep spacing, gutters, and type scales disciplined so the deck still feels like one system.

## Component Rules
- Component-first, inline-style-last.
- Reuse slashpresent primitives before inventing bespoke markup:
  - `slashpresent-kicker`
  - `slashpresent-shell`
  - `slashpresent-grid-2`
  - `slashpresent-grid-3`
  - `slashpresent-stat-row`
  - `slashpresent-proof-band`
  - `slashpresent-comparison`
  - `slashpresent-matrix`
  - `slashpresent-timeline`
  - `slashpresent-quote`
- If `docs/components.md` exists, use it as the cookbook for exact HTML patterns.

## Data + Motion
- Use charts or comparison structures when they communicate better than bullets.
- Every non-obvious claim needs a citation in speaker notes. Prefer visible source lines on dense data slides.
- Use Reveal motion sparingly. Auto-animate and restrained staggered reveals should reinforce continuity, not distract.
- Start from the closest existing reference slide and adapt its structure before inventing a new layout from scratch.
- Use bridge language intentionally. When a slide needs a closer or transition sentence, make it a narrative handoff, not a redundant summary.
- Keep copy blocks tight. If a slide starts to carry too much text, convert the argument into a chart, matrix, process rail, or card system.

## Validation
- Keep `/workspace/slashpresent/index.html` as the only authored deck root.
- Keep `BRIEF.md` current with audience, thesis, and proof obligations.
- Read `docs/slide-blueprints.md` before changing slide order or role.
- Keep `.opulentia/presentation-seed.json` and `.opulentia/slide-manifest.json` coherent with the current slide order so the viewer and publish path stay aligned.
- Run `node scripts/validate-deck.mjs index.html` before final preview/build when possible.
