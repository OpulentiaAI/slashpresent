# Slide Blueprints

Use this file as the per-slide composition contract for slashpresent work.

The deck still lives in one authored file: `index.html`. This blueprint exists to keep each slide specific, evidence-led, and structurally complete.

## Preferred Editorial Sequence
| Slide | Label | Purpose | Layout Hint |
| --- | --- | --- | --- |
| 1 | Cover | Open with a clear thesis, audience fit, and a memorable visual stance. | `cover` |
| 2 | Context | Frame the market, problem, or operating context with evidence. | `intro_context` |
| 3 | Core Capabilities | Show the offer or core system with proof-bearing metrics. | `content_with_stats` |
| 4 | Deep Dive 1 | Develop the first strategic pillar with a concrete mechanism or workflow. | `pillar_grid` |
| 5 | Deep Dive 2 | Expand the second pillar with a different composition and stronger contrast. | `comparison_or_timeline` |
| 6 | Deep Dive 3 | Carry the argument into implementation detail, operating model, or user-facing value. | `diagram_or_matrix` |
| 7 | Deep Dive 4 | Close the strategic section with final proof or synthesis. | `proof_band` |
| 8 | Architecture | Explain the underlying system, infrastructure, or governance model. | `architecture` |
| 9 | Flow / Synergy | Show how the pieces work together across teams, steps, or lifecycle. | `flow` |
| 10 | Audience / Markets | Translate the offer into the audiences or verticals where it lands best. | `markets` |
| 11 | Proof | Provide the strongest case studies, results, or before/after evidence. | `proof_points` |
| 12 | Decision / CTA | Close with the decision, next step, or call to action. | `summary_cta` |

## Sequence Rules
- Prefer the full 12-slide sequence for thoughtful editorial decks unless the user explicitly asks for a shorter structure.
- Keep adjacent slides visually distinct. Rotate between grids, charts, diagrams, image-led panels, proof bands, and cleaner thesis slides.
- Use the blueprint as a rigor tool, not a rigidity trap. If the story needs a different title or proof pattern, adapt while preserving the role that slide plays in the sequence.
- Keep `.opulentia/presentation-seed.json` and `.opulentia/slide-manifest.json` aligned with any major slide-order or slide-role changes.
- The slides viewer, preview metadata, and publish reconciliation assume slide numbering and role continuity. Preserve that continuity when revising the deck.

## Slide 1: Cover
- Purpose: Open with a clear thesis, audience fit, and a memorable visual stance.
- Title hint: Turn the deck title into a sharp point of view, not a generic topic label.
- Required elements:
  - kicker or pre-title
  - assertive headline
  - tagline or framing line
  - accent bar
  - meta rail
  - speaker notes
- Composition guidance: Keep copy sparse, make the headline editorial, and anchor the slide with one decisive visual treatment rather than several weak ones.
- Speaker notes contract: Hook -> why this deck matters now -> transition into context.

## Slide 2: Context
- Purpose: Frame the market, problem, or operating context with evidence instead of generic scene-setting.
- Title hint: State the pressure, shift, or opportunity that makes the deck necessary.
- Required elements:
  - section label
  - framing headline
  - 2-3 evidence-backed context points
  - supporting visual or chart
  - speaker notes
- Composition guidance: Lead with a fact pattern, not a platitude. Use one chart, table, or annotated signal that makes the context feel grounded.
- Speaker notes contract: Context -> evidence -> why this pressure sets up the next slide.

## Slide 3: Core Capabilities
- Purpose: Show the offer or core system clearly with evidence-bearing metrics or proof rails.
- Title hint: Describe the core advantage in operational terms.
- Required elements:
  - headline
  - 3-4 stat or capability cards
  - short supporting interpretation
  - speaker notes
- Composition guidance: Treat this as the deck's first proof surface. Numbers should be specific and paired with why they matter, not left as decorative counters.
- Speaker notes contract: Capability claim -> evidence -> transition into how it works.

## Slide 4: Deep Dive 1
- Purpose: Develop the first strategic pillar with a concrete mechanism or workflow.
- Title hint: Name the first pillar as an action or system behavior.
- Required elements:
  - pillar headline
  - feature grid or process segment
  - one proof marker
  - speaker notes
- Composition guidance: Use cards, steps, or a split narrative to show how the pillar works. Avoid dumping paragraphs where a process or matrix would communicate faster.
- Speaker notes contract: What this pillar is -> evidence or example -> bridge to next pillar.

## Slide 5: Deep Dive 2
- Purpose: Expand the second pillar with a different composition so the deck gains rhythm.
- Title hint: Frame the second pillar as a contrast, progression, or decision advantage.
- Required elements:
  - pillar headline
  - comparison table, timeline, or structured visual
  - speaker notes
- Composition guidance: Change the shape of the slide from the previous one. Use structured comparisons or sequence if the story is about tradeoffs or momentum.
- Speaker notes contract: What changed -> why it matters -> transition to the next pillar.

## Slide 6: Deep Dive 3
- Purpose: Carry the argument into implementation detail, operating model, or user-facing value.
- Title hint: Make the third pillar feel tangible and operational.
- Required elements:
  - headline
  - diagram, matrix, or annotated visual
  - decision-relevant takeaway
  - speaker notes
- Composition guidance: Use a diagram when the relationship between parts matters. Make labels specific and keep the visual readable from a distance.
- Speaker notes contract: Mechanism -> implication -> setup for final pillar or synthesis.

## Slide 7: Deep Dive 4
- Purpose: Close the strategic section with a final pillar, synthesis view, or operational proof.
- Title hint: Land the last major pillar with conviction and evidence.
- Required elements:
  - headline
  - proof band, KPI rail, or image-led split
  - speaker notes
- Composition guidance: This slide should feel conclusive, not repetitive. Use a proof-dense arrangement that prepares the audience for the structural view that follows.
- Speaker notes contract: Closing pillar -> proof -> transition into architecture or system view.

## Slide 8: Architecture
- Purpose: Explain the underlying system, infrastructure, or governance model in a way decision-makers can trust.
- Title hint: Explain how the system holds together and why it is credible.
- Required elements:
  - headline
  - architecture or process diagram
  - security, reliability, or governance callouts
  - speaker notes
- Composition guidance: Use a clean diagram with labeled layers, flows, or modules. Reduce noise and highlight the decision-critical parts of the system.
- Speaker notes contract: System shape -> trust or reliability proof -> transition into cross-functional flow.

## Slide 9: Flow / Synergy
- Purpose: Show how the pieces work together across teams, steps, or lifecycle.
- Title hint: Translate the architecture into an operating loop, customer journey, or collaboration model.
- Required elements:
  - headline
  - flow diagram, lifecycle, or operating loop
  - speaker notes
- Composition guidance: Make the motion of the system obvious. This slide should answer how work, value, or information moves from one stage to the next.
- Speaker notes contract: Flow explanation -> payoff -> bridge to audience or market fit.

## Slide 10: Audience / Markets
- Purpose: Translate the offer into the audiences, segments, or verticals where it lands best.
- Title hint: Name the audiences or markets with the highest-fit problem and value exchange.
- Required elements:
  - headline
  - segment cards, market table, or persona matrix
  - speaker notes
- Composition guidance: Use cards or a matrix to show distinct segments. Make differences tangible: pain, urgency, market size, or adoption shape.
- Speaker notes contract: Who this is for -> why they care -> lead into proof.

## Slide 11: Proof
- Purpose: Provide the strongest case studies, results, or before/after evidence in the deck.
- Title hint: Turn outcomes into a believable case for action.
- Required elements:
  - headline
  - 2-3 proof points or case cards
  - specific metrics or quotes
  - speaker notes
- Composition guidance: Use hard proof: outcomes, benchmarks, case evidence, or quotes with context. Avoid vague testimonials or soft claims.
- Speaker notes contract: Outcome -> supporting evidence -> transition to recommendation.

## Slide 12: Decision / CTA
- Purpose: Close with the decision, next step, or call to action the audience should take now.
- Title hint: State the recommendation plainly and leave the audience with a concrete next move.
- Required elements:
  - headline
  - 2-3 takeaways
  - clear call to action
  - speaker notes
- Composition guidance: Do not just summarize. Make the recommendation feel earned by the evidence that came before it and show the next action unambiguously.
- Speaker notes contract: Recommendation -> why now -> close with next step.
