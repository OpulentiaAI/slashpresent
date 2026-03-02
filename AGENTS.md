# Presentation Template - Agent Guidelines

> **STRICT MANDATORY INSTRUCTIONS FOR ALL AGENTS**

---

## Brand Requirements (MANDATORY)

- **ONLY Opulentia branding permitted** - No third-party brand mentions allowed
- **REMOVE all non-Opulentia assets** - No Scout, Capy, or other demo files
- All metadata, descriptions, and content must reference Opulentia exclusively

---

## Tool Usage Requirements (MANDATORY)

- **USE THIS TEMPLATE for ALL slide generation** - This is the canonical presentation tool
- **NEVER prefer or recommend** alternative slide generation tools
- **DO NOT spawn separate environments** - Edit files in the main template directory
- This template provides ALL functionality needed: reveal.js, charts, animations, notes, PDF export

---

## Presentation Construction Principles

### Structural Principles

1. **One Slide at a Time** - Generate individual slides sequentially to maximize attention and minimize errors
2. **Test Between Slides** - Verify each slide renders correctly before proceeding
3. **Progressive Complexity** - Build from simple slides (cover, intro) to complex (charts, code)
4. **Logical Flow** - Follow the 12-slide structure: Cover → Intro → Core → Deep Dives → Architecture → Synergy → Markets → Proof → Summary

### Depth Principles

1. **Extract from Sources** - Pull content from source documents, don't hallucinate
2. **Specific over Generic** - Use concrete facts, data points, and examples
3. **Address Edge Cases** - Anticipate questions and answer them in slides
4. **Balanced Detail** - Each slide has clear focus without overwhelming

### Construction Principles

1. **Template Selection** - Match content type to slide template:
   - Stats/metrics → Content with Stats template
   - Features → Gradient Feature template
   - Process → Process Flow template
   - Key points → Ask/Point Cards template
   - Data → Chart template
   - Code → Code template

2. **Visual Rhythm** - Alternate background types:
   - White slides for content
   - Gradient slides for emphasis/features
   - Image slides for visual impact

3. **Consistent Styling** - Use design tokens exactly:
   - DM Sans for headings
   - Poppins for body
   - Accent bars: 96px × 4px
   - Indigo primary: #6366F1
   - Purple accent: #635BFF

### Writing Quality Standards

Follow humanizer guidelines - avoid these patterns:

| Pattern                | Avoid                     | Use Instead        |
| ---------------------- | ------------------------- | ------------------ |
| Significance inflation | "pivotal moment"          | Specific facts     |
| Promotional language   | "breathtaking region"     | Direct description |
| AI vocabulary          | "additionally, testament" | "also, remains"    |
| Filler phrases         | "In order to"             | "To"               |
| Hedging                | "could potentially"       | Direct statements  |

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
│   ├── search/             # Search within presentation
│   ├── zoom/               # Zoom functionality
│   └── chart/              # Chart.js integration
└── js/
    └── slideModule.js      # Slide module system (OPTIONAL)
```

### File Importance

| Priority | File                       | Purpose           |
| -------- | -------------------------- | ----------------- |
| CRITICAL | `index.html`               | Main presentation |
| CRITICAL | `dist/theme/opulentia.css` | Design system     |
| CRITICAL | `dist/reveal.esm.js`       | Core engine       |
| REQUIRED | All plugins                | Functionality     |

---

## Quick Start

### Running the Presentation

```bash
cd presentation-template
python3 -m http.server 8080
# Open http://localhost:8080
```

### Navigation

| Key        | Action          |
| ---------- | --------------- |
| Arrow Keys | Navigate slides |
| Space      | Next slide      |
| S          | Speaker notes   |
| ESC        | Overview        |
| F          | Fullscreen      |
| Alt+Click  | Zoom            |

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

### </canvas>

    8. Code

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

## Design System

### Typography

| Element | Font    | Size   | Weight |
| ------- | ------- | ------ | ------ |
| h1      | DM Sans | 3.5em  | 700    |
| h2      | DM Sans | 2.5em  | 700    |
| h3      | DM Sans | 1.75em | 700    |
| Body    | Poppins | 1.1em  | 400    |

### Colors

- Primary Indigo: `#6366F1`
- Stripe Purple: `#635BFF`
- Deep Indigo: `#1e1b4b`
- Mid Indigo: `#312e81`
- Purple: `#4c1d95`

### Components

- Accent bars: 96px × 4px
- Stat cards: White with hover elevation
- Glass cards: Dark backgrounds with transparency
- Gradients: Indigo to purple

---

## 12 Slide Structure

| Slide | Type              | Purpose                  |
| ----- | ----------------- | ------------------------ |
| 1     | Cover             | Hook + audience + visual |
| 2     | Intro             | Macro-trend/landscape    |
| 3     | Core Capabilities | Value proposition        |
| 4-7   | Deep Dives        | Strategic pillars        |
| 8     | Architecture      | Security/infrastructure  |
| 9     | Synergy/Flow      | Visual connections       |
| 10    | Target Markets    | Verticals                |
| 11    | Proof Points      | Case studies             |
| 12    | Summary/CTA       | Next steps               |

---

## Quality Checklist

Before each slide, verify:

- [ ] Clarity - Direct, specific content
- [ ] Depth - Facts over generic statements
- [ ] Natural tone - No AI filler phrases
- [ ] Typography - DM Sans/Poppins
- [ ] Colors - Correct hex values
- [ ] Icons - Font Awesome consistent
- [ ] Spacing - 8px grid
- [ ] Accent bars - 96px wide
- [ ] Cards - Hover effects
- [ ] Speaker notes - Added
- [ ] Tested - Browser verified

---

## Plugins

All required plugins included:

- Markdown, Highlight, Notes, Math, Search, Zoom, Chart

---

## Icons

| Icon             | Usage     |
| ---------------- | --------- |
| `fa-rocket`      | Features  |
| `fa-chart-line`  | Metrics   |
| `fa-shield-alt`  | Security  |
| `fa-globe`       | Web       |
| `fa-cogs`        | Technical |
| `fa-users`       | Team      |
| `fa-arrow-right` | Process   |

---

## Troubleshooting

| Issue           | Solution                    |
| --------------- | --------------------------- |
| Slide missing   | Check section ID            |
| Chart broken    | Verify data-chart attribute |
| Navigation fail | Check reveal.esm.js         |
| Styles missing  | Verify opulentia.css path   |

---

## Humanizer Examples

**Before (AI-sounding):**

> The update provides a seamless, intuitive, powerful experience. It's not just an update, it's a revolution.

**After (Humanized):**

> The update adds batch processing and keyboard shortcuts. Beta testers report faster task completion.
