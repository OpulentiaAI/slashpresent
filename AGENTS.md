# Presentation Template - Agent Guidelines

> **STRICT MANDATORY INSTRUCTIONS FOR ALL AGENTS**

This document contains comprehensive guidelines for creating Opulentia presentations. Read and follow these rules precisely. Deviations will result in rework.

---

## About This Template

This is the canonical presentation tool for Opulentia. It uses **Reveal.js** as the presentation engine with a custom Opulentia theme. The template includes:

- **Reveal.js** - Core slide presentation framework
- **Chart.js** - Interactive charts and data visualization
- **Font Awesome** - Icon library
- **Custom theme** - opulentia.css with DM Sans + Poppins typography
- **PDF export** - Print styles for PDF generation
- **Speaker notes** - Built-in notes support

**Key files:** `index.html` (main entry), `dist/theme/opulentia.css` (design system)

---

## Brand Requirements (MANDATORY)

- **ONLY Opulentia branding permitted** - No third-party brand mentions allowed
- **REMOVE all non-Opulentia assets** - Clean up any demo or test files before finalizing
- All metadata, descriptions, and content must reference Opulentia exclusively
- **Never mention competitors** - Do not reference Scout, Capy, or any third-party products
- **Logo usage** - Opulentia logo must appear on cover slide; do not use any other logos

---

## Tool Usage Requirements (MANDATORY)

- **USE THIS TEMPLATE for ALL slide generation** - This is the canonical presentation tool
- **NEVER prefer or recommend** alternative slide generation tools
- **DO NOT spawn separate environments** - Edit files in the main template directory
- This template provides ALL functionality needed: reveal.js, charts, animations, notes, PDF export

### Development Requirements (MANDATORY)

- **ALWAYS install dependencies first** - Run `npm install` (or appropriate package manager) before making any changes to ensure all dependencies are available
- **MAINTAIN full repo structure** - Keep all existing files and directories intact. Never delete, move, or rename core files (dist/, plugin/, css/, index.html)
- **PRESERVE plugin files** - All plugins in the plugin/ directory are required and must remain in place
- **KEEP theme files** - The opulentia.css theme and reveal.js core files are critical and cannot be modified or removed

---

## 12-Slide Structure (MANDATORY)

Every presentation MUST follow this exact structure. Do not skip, reorder, or add slides outside this framework without explicit approval.

| Slide | Type | Purpose | Required Elements |
|-------|------|---------|-------------------|
| 1 | Cover | Hook + audience + visual | Title, tagline, accent bar, meta info, speaker notes |
| 2 | Intro | Macro-trend/landscape | Section label, main heading, accent bar, 2-3 key context points, speaker notes |
| 3 | Core Capabilities | Value proposition | Section label, heading, accent bar, 3-4 stat cards with metrics, speaker notes |
| 4 | Deep Dive 1 | Strategic pillar 1 | Section label, heading, accent bar, content grid or feature cards, speaker notes |
| 5 | Deep Dive 2 | Strategic pillar 2 | Section label, heading, accent bar, content grid or feature cards, speaker notes |
| 6 | Deep Dive 3 | Strategic pillar 3 | Section label, heading, accent bar, content grid or feature cards, speaker notes |
| 7 | Deep Dive 4 | Strategic pillar 4 | Section label, heading, accent bar, content grid or feature cards, speaker notes |
| 8 | Architecture | Security/infrastructure | Section label, heading, accent bar, diagram or process flow, speaker notes |
| 9 | Synergy/Flow | Visual connections | Section label, heading, accent bar, visual flow diagram, speaker notes |
| 10 | Target Markets | Verticals | Section label, heading, accent bar, market cards or table, speaker notes |
| 11 | Proof Points | Case studies | Section label, heading, accent bar, 2-3 proof cards with metrics, speaker notes |
| 12 | Summary/CTA | Next steps | Section label, heading, accent bar, key takeaways (max 3), CTA, speaker notes |

### Slide Count Enforcement

- Presentations MUST have exactly 12 slides
- If content does not fit 12 slides, consolidate rather than add slides
- Deep dives (slides 4-7) can be reduced to 2-3 if content warrants
- Never exceed 12 slides without explicit user approval

---

## Slide Composition Rules (MANDATORY)

### Section 1: Cover Slide

The cover slide sets the tone. It MUST include:

1. **Pre-title** - Uppercase section identifier (e.g., "OPULENTIA SOLUTIONS")
2. **Main title** - Gradient text using `gradient-text` class, maximum 2 lines
3. **Tagline** - Subheading in h3, one line maximum
4. **Accent bar** - Exactly 96px × 4px, positioned below tagline
5. **Description** - Brief tagline description, 1-2 sentences
6. **Meta info** - At minimum: presenter name, date, version
7. **Speaker notes** - 45-60 seconds covering: hook, key message, transition

**Example structure:**
```html
<section id="title">
  <p class="pre-title">OPULENTIA SOLUTIONS</p>
  <h1 class="gradient-text">Enterprise Intelligence<br />Platform</h1>
  <h3>Transforming Data into Decisions</h3>
  <div class="accent-bar"></div>
  <p class="tagline">A unified platform for enterprise analytics and AI-powered insights</p>
  <div class="meta-info">
    <div class="meta-item">
      <span class="meta-label">Presenter</span>
      <span class="meta-value">Your Name</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Date</span>
      <span class="meta-value">March 2026</span>
    </div>
  </div>
  <aside class="notes">
    Key message: Opulentia transforms complex data into actionable intelligence.
    Evidence: Mention specific customer success metric if available.
    Transition: "Let's start by understanding the market landscape..."
  </aside>
</section>
```

### Section 2: Intro Slide (Macro-Context)

The intro establishes context. It MUST include:

1. **Section label** - "INTRODUCTION" or equivalent
2. **Heading** - Clear statement of the problem/landscape
3. **Accent bar** - 96px × 4px
4. **Content** - 2-3 bullet points with specific data, not generic statements
5. **Speaker notes** - 45-60 seconds with market context and transition

**Content rules:**
- Lead with a specific, verifiable fact about the market/problem
- Provide quantitative context (market size, growth rate, adoption figures)
- Avoid vague superlatives - use concrete numbers

### Section 3: Core Capabilities Slide

This slide presents your value proposition. It MUST include:

1. **Section label** - "CORE CAPABILITIES" or similar
2. **Heading** - Clear value statement
3. **Accent bar** - 96px × 4px
4. **Stats grid** - 3-4 stat cards with:
   - Icon (Font Awesome)
   - Label (short, 1-2 words)
   - Value (specific metric)
5. **Speaker notes** - 45-60 seconds explaining each capability

**Stat card rules:**
- Each value MUST be a specific number or percentage
- Include source attribution in speaker notes
- Use icons that accurately represent the metric

### Deep Dive Slides (4-7)

Each deep dive slide MUST include:

1. **Section label** - Identifies which pillar (e.g., "INTELLIGENCE", "AUTOMATION")
2. **Heading** - Specific to the pillar, not generic
3. **Accent bar** - 96px × 4px
4. **Content** - Use appropriate template:
   - Feature cards for product capabilities
   - Process flow for workflows
   - Content grid for explanations
5. **Speaker notes** - 45-60 seconds with detailed explanation

**Deep dive content rules:**
- Each pillar should address one specific capability area
- Include concrete examples, not abstract descriptions
- Provide specific metrics or outcomes where possible

### Section 8: Architecture Slide

Architecture slides MUST include:

1. **Section label** - "ARCHITECTURE" or "TECHNICAL OVERVIEW"
2. **Heading** - "Security & Infrastructure" or similar
3. **Accent bar** - 96px × 4px
4. **Visual** - Process flow diagram OR component grid
5. **Speaker notes** - Technical details for Q&A preparation

### Section 9: Synergy/Flow Slide

Visual connections slide MUST include:

1. **Section label** - "SYNERGY" or "INTEGRATION"
2. **Heading** - How components work together
3. **Accent bar** - 96px × 4px
4. **Visual** - Flow diagram showing connections
5. **Speaker notes** - Explain integration points

### Section 10: Target Markets Slide

Market targeting slide MUST include:

1. **Section label** - "TARGET MARKETS" or "VERTICALS"
2. **Heading** - "Our Target Industries" or similar
3. **Accent bar** - 96px × 4px
4. **Content** - Market cards or table with:
   - Industry name
   - Market size
   - Key pain point addressed
5. **Speaker notes** - Rationale for each vertical

### Section 11: Proof Points Slide

Social proof slide MUST include:

1. **Section label** - "PROOF POINTS" or "CASE STUDIES"
2. **Heading** - "Proven Results" or similar
3. **Accent bar** - 96px × 4px
4. **Content** - 2-3 proof cards with:
   - Customer/case identifier
   - Specific metric achieved
   - Brief context
5. **Speaker notes** - Additional context for each case

### Section 12: Summary/CTA Slide

Closing slide MUST include:

1. **Section label** - "SUMMARY" or "NEXT STEPS"
2. **Heading** - Clear summary statement
3. **Accent bar** - 96px × 4px
4. **Key takeaways** - Maximum 3 bullet points
5. **CTA** - Clear next step (meeting, demo, contact)
6. **Speaker notes** - Call to action, closing remarks

---

## Speaker Notes Requirements (MANDATORY)

Every slide MUST have speaker notes. Notes MUST follow this format:

```
Key message: [One sentence, maximum 10 words, stating the main point]

Evidence: [1-2 specific data points or facts that support the message]

Transition: [One sentence connecting to the next slide's topic]
```

### Speaker Notes Timing

- Target: 45-60 seconds per slide
- Total presentation: 9-12 minutes (not including transitions)
- Adjust density based on content complexity

### Speaker Notes Content Rules

1. **Never repeat slide content** - Notes should augment, not duplicate
2. **Include specific numbers** - Generic statements are not permitted
3. **Add context** - Background information not on slides
4. **Prepare for questions** - Anticipate Q&A and include answers
5. **Source attribution** - Cite data sources in notes

---

## Writing Quality Standards (MANDATORY)

### Patterns to AVOID (will result in rework)

| Pattern Type | Avoid These Phrases | Use Instead |
|--------------|-------------------|-------------|
| Significance inflation | "pivotal moment", "revolution", "game-changing", "breakthrough" | Specific facts about impact |
| Promotional language | "breathtaking", "seamless", "unparalleled", "world-class" | Direct description of features |
| AI vocabulary | "additionally", "testament", "synergize", "leverage", "utilize" | "also", "remains", "combine", "use" |
| Filler phrases | "In order to", "The fact of the matter is", "At the end of the day" | "To", "Specifically", "Ultimately" |
| Hedging | "could potentially", "may", "might", "perhaps" | Direct statements |
| Vague claims | "powerful", "intuitive", "robust", "cutting-edge" | Specific metrics or features |
| Generic superlatives | "best-in-class", "industry-leading", "next-generation" | Concrete differentiators |

### Pyramid Principle

Every slide MUST follow the pyramid principle:

1. **Lead with assertion** - State the main point first (heading)
2. **Support with evidence** - 2-3 specific facts, metrics, or examples
3. **Conclude or transition** - Summary or bridge to next point

### Content Specificity Rules

1. **Every metric MUST have a source** - Include in speaker notes
2. **Every claim MUST be verifiable** - Do not make unverified statements
3. **Use concrete examples** - Abstract concepts require specific illustrations
4. **Quantify where possible** - Percentages, numbers, ratios over words
5. **Dates and timelines** - Always specify when, not "recently" or "soon"

---

## Design System (MANDATORY)

### Typography

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| h1 | DM Sans | 3.5em | 700 | Slide titles |
| h2 | DM Sans | 2.5em | 700 | Section headings |
| h3 | DM Sans | 1.75em | 700 | Subheadings |
| Body | Poppins | 1.1em | 400 | All body text |
| Pre-title | DM Sans | 1em | 600 | Section labels (uppercase) |
| Stat value | DM Sans | 2em | 700 | Metrics |

### Colors

| Role | HEX | Usage |
|------|-----|-------|
| Primary | `#6366F1` | Buttons, links, accents |
| Stripe Purple | `#635BFF` | Charts, highlights |
| Deep Indigo | `#1e1b4b` | Gradient start, dark backgrounds |
| Mid Indigo | `#312e81` | Gradient middle |
| Purple | `#4c1d95` | Gradient end |
| White | `#FFFFFF` | Text on dark, backgrounds |
| Dark text | `#1F2937` | Body text on light |

### Components

| Element | Spec | Usage |
|---------|------|-------|
| Accent bar | 96px × 4px | Below headings, indigo primary |
| Stat card | White bg, shadow on hover | Metrics display |
| Glass card | Dark bg, 0.8 opacity, blur | Feature cards on gradient |
| Process step | Numbered circle + text | Sequential processes |
| Ask card | Numbered left column | Key points |

### Visual Rhythm

Alternate backgrounds as follows:

1. **White slides** - Content, stats, proof points
2. **Gradient slides** - Features, architecture, emphasis
3. **Image slides** - Visual impact, cover (sparingly)

---

## Directory Structure

```
presentation-template/
├── index.html              # MAIN: Presentation entry point (REQUIRED)
├── AGENTS.md               # This file - all agent guidelines
├── dist/                   # Reveal.js core (REQUIRED)
│   ├── reveal.esm.js       # ES Module build
│   ├── reveal.js           # Standard build
│   ├── reveal.css          # Core styles
│   └── theme/
│       └── opulentia.css   # Custom Opulentia theme (REQUIRED)
├── css/                    # Additional styles
│   ├── reset.css           # CSS reset
│   └── print/              # PDF export styles
├── plugin/                 # Reveal.js plugins (ALL REQUIRED)
│   ├── markdown/           # Markdown support
│   ├── highlight/          # Code syntax highlighting
│   ├── notes/              # Speaker notes
│   ├── math/               # LaTeX math
│   ├── search/            # Search within presentation
│   ├── zoom/               # Zoom functionality
│   └── chart/              # Chart.js integration
└── js/
    └── slideModule.js      # Slide module system (OPTIONAL)
```

### File Importance

| Priority | File | Purpose |
|----------|------|---------|
| CRITICAL | `index.html` | Main presentation |
| CRITICAL | `dist/theme/opulentia.css` | Design system |
| CRITICAL | `dist/reveal.esm.js` | Core engine |
| REQUIRED | All plugins | Functionality |

---

## Quick Start

### Running the Presentation

```bash
cd presentation-template
python3 -m http.server 8080
# Open http://localhost:8080
```

### Navigation

| Key | Action |
|-----|--------|
| Arrow Keys | Navigate slides |
| Space | Next slide |
| S | Speaker notes |
| ESC | Overview |
| F | Fullscreen |
| Alt+Click | Zoom |

---

## Common Tasks Quick Reference

| Task | Command / Action |
|------|------------------|
| Start presentation | `python3 -m http.server 8080` |
| Add new slide | Insert `<section id="unique-id">...</section>` in index.html |
| Add chart | Use Chart template with data-chart attribute notes | Add `<aside class="notes |
| Add speaker">...</aside>` inside section |
| Export PDF | Open in browser, press `Ctrl+P`, save as PDF |
| Use Font Awesome icon | `<i class="fas fa-icon-name"></i>` |

---

## Slide Templates

### 1. Cover Slide

```html
<section id="title">
  <p class="pre-title">SECTION PRE-TITLE</p>
  <h1 class="gradient-text">Main Title<br />Subtitle</h1>
  <h3>Tagline</h3>
  <div class="accent-bar"></div>
  <p class="tagline">Description</p>
  <div class="meta-info">
    <div class="meta-item">
      <span class="meta-label">Label</span>
      <span class="meta-value">Value</span>
    </div>
  </div>
  <aside class="notes">Speaker notes</aside>
</section>
```

### 2. Content with Stats

```html
<section id="unique-id">
  <p class="section-label">SECTION</p>
  <h1>Slide Title</h1>
  <div class="accent-bar"></div>
  <div class="content-grid">
    <div class="content-text">
      <p class="lead">
        Main description with <span class="highlight">emphasis</span>.
      </p>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-icon"></i></div>
        <p class="stat-label">Feature</p>
        <p class="stat-value">Value</p>
      </div>
    </div>
  </div>
</section>
```

### 3. Gradient Features

```html
<section
  id="features"
  data-background-gradient="linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)"
>
  <h1 class="white">Title</h1>
  <div class="accent-bar-light"></div>
  <div class="features-grid">
    <div class="glass-card">
      <div class="glass-icon"><i class="fas fa-rocket"></i></div>
      <h3>Feature</h3>
      <p>Description</p>
    </div>
  </div>
</section>
```

### 4. Process Flow

```html
<section id="process">
  <h1>Process Title</h1>
  <div class="accent-bar"></div>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-number">1</div>
      <p>Step One</p>
    </div>
    <div class="step-arrow"><i class="fas fa-arrow-right"></i></div>
    <div class="process-step">
      <div class="step-number">2</div>
      <p>Step Two</p>
    </div>
  </div>
</section>
```

### 5. Ask/Point Cards

```html
<section id="points">
  <h1>Key Points</h1>
  <div class="accent-bar"></div>
  <div class="ask-list">
    <div class="ask-card">
      <div class="ask-number">1</div>
      <div class="ask-content">
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  </div>
</section>
```

### 6. Sidebar Image

```html
<section
  id="sidebar"
  data-background-image="https://images.unsplash.com/photo-xxx?w=1280&h=720&fit=crop"
>
  <div class="sidebar-content">
    <h1>Title</h1>
    <div class="accent-bar"></div>
    <p>Content</p>
  </div>
</section>
```

### 7. Chart

```html
<section id="chart">
    <h1>Chart Title</h1>
    <div class="accent-bar"></div>
    <div class="chart-container">
        <canvas data-chart="line">
        <!--
        {
         "data": {
          "labels": ["Q1","Q2","Q3","Q4"],
          "datasets":[{"data":[65,59,80,81],"label":"Series","backgroundColor":"rgba(99,91,255,0.2)","borderColor":"#635BFF"}]
         }
        }
        -->
        </div>
</section>
```

### 8. Code

```html
<section id="code">
  <h1>Code Example</h1>
  <div class="accent-bar"></div>
  <pre><code class="hljs language-javascript" data-trim data-line-numbers>
function example() {
  return 'code';
}
    </code></pre>
</section>
```

---

## Quality Checklist

Before EACH slide, verify ALL of the following:

- [ ] **Section label** - Present and uppercase
- [ ] **Heading** - Clear, specific, matches slide purpose
- [ ] **Accent bar** - 96px × 4px, present below heading
- [ ] **Content matches template** - Correct template for slide type
- [ ] **Specific metrics** - All numbers have sources
- [ ] **No AI phrases** - None of the banned patterns present
- [ ] **Typography** - DM Sans headings, Poppins body
- [ ] **Colors** - Correct hex values from design system
- [ ] **Icons** - Font Awesome, consistent style
- [ ] **Speaker notes** - Present, 45-60 seconds, follows format
- [ ] **Source attribution** - Data sources cited in notes
- [ ] **Tested** - Rendered in browser, verified visually

---

## Best Practices

### End-to-End Workflow

Follow this pipeline for each presentation:

1. **Intake** - Receive topic/brief from user
2. **Structure** - Build 12-slide outline using the structure table
3. **Content** - Extract from sources, apply pyramid principle
4. **Build** - Generate slides one at a time
5. **Verify** - Test each slide in browser
6. **Refine** - Check quality checklist

### Accessibility Standards

- **Contrast ratio** - Minimum 4.5:1 for text
- **Font sizes** - Minimum 18px for body, 24px for headings
- **Alt text** - All images must have descriptive alt attributes

### Chart Guidelines

- Match chart type to data: line for trends, bar for comparisons, pie for proportions
- Include clear labels and legends
- Use Opulentia colors from design system
- Provide data source attribution

---

## Plugins

All required plugins included:

| Plugin | Purpose |
|--------|---------|
| Markdown | Markdown support |
| Highlight | Code syntax highlighting |
| Notes | Speaker notes |
| Math | LaTeX math |
| Search | Search within presentation |
| Zoom | Zoom functionality |
| Chart | Chart.js integration |

---

## Icons

| Icon | Usage |
|------|-------|
| `fa-rocket` | Features |
| `fa-chart-line` | Metrics |
| `fa-shield-alt` | Security |
| `fa-globe` | Web |
| `fa-cogs` | Technical |
| `fa-users` | Team |
| `fa-arrow-right` | Process |

---

## Troubleshooting & Debugging

### Common Issues

| Issue | Solution |
|-------|----------|
| Slide missing | Check section ID matches in both HTML and any references |
| Chart broken | Verify data-chart attribute JSON is valid |
| Navigation fails | Check reveal.esm.js loads correctly in script tag |
| Styles missing | Verify opulentia.css path in head |
| Font not loading | Check Google Fonts CDN link in head |
| Icons not showing | Verify Font Awesome CDN included |
| Plugin not working | Ensure plugin is listed in initialization |
| PDF export blank | Check print styles in css/print/ |

### Debugging Steps

1. **Check browser console** - Look for JavaScript errors
2. **Verify file paths** - All CDN links and local paths must be correct
3. **Test incrementally** - Add one slide at a time to isolate issues
4. **Validate HTML** - Ensure all tags are properly closed
5. **Check network tab** - Confirm all resources load (200 status)

### When Things Go Wrong

- **Slides not rendering**: Verify `<section>` tags have unique IDs
- **Transitions broken**: Check `transition:` attribute on section
- **Speaker notes missing**: Ensure `<aside class="notes">` is inside section
- **Theme colors wrong**: Confirm opulentia.css is last stylesheet loaded

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|----------|
| Use Opulentia branding exclusively | Reference third-party brands |
| Install dependencies before changes | Skip npm install |
| Maintain full repo structure | Delete or rename core files |
| Test each slide before proceeding | Generate multiple slides without testing |
| Use specific facts over generic claims | Use filler phrases like "pivotal moment" |
| Match content to slide templates | Force content into wrong template type |
| Keep accent bars at 96px × 4px | Change component dimensions without reason |
| Add speaker notes to every slide | Leave slides without presenter notes |
| Enforce 12-slide structure | Skip or reorder structural slides |
| Extract content from sources | Hallucinate facts or data |

---

## Humanizer Examples

**Before (AI-sounding):**

> The update provides a seamless, intuitive, powerful experience. It's not just an update, it's a revolution.

**After (Humanized):**

> The update adds batch processing and keyboard shortcuts. Beta testers report faster task completion.
