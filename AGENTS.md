# Presentation Template - Agent Guidelines

## Overview

This unified presentation template combines functionality from:

- **Scrapybara presentation-template** - Base reveal.js framework with plugins
- **Quarto revealjs-clean** - Clean, minimalist styling principles
- **Cursor Slides** - Module-based slide creation system
- **Humanizer Guidelines** - AI writing detection patterns to avoid
- **OpenAI Agent Building Principles** - Clear instruction patterns and orchestration

The template follows the **Opulentia design system** - a high-fidelity presentation style inspired by Stripe/Opulentia partnerships.

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

### File Importance Hierarchy

| Priority | File                       | Purpose                                |
| -------- | -------------------------- | -------------------------------------- |
| CRITICAL | `index.html`               | Main presentation - all slides go here |
| CRITICAL | `dist/theme/opulentia.css` | Design system styling                  |
| CRITICAL | `dist/reveal.esm.js`       | Core presentation engine               |
| REQUIRED | All plugins                | Functionality (charts, notes, etc.)    |
| OPTIONAL | `js/slideModule.js`        | Advanced module system                 |

---

## Quick Start

### Running the Presentation

```bash
cd presentation-template
python3 -m http.server 8080
# Open http://localhost:8080
```

### Navigation Controls

| Key        | Action                  |
| ---------- | ----------------------- |
| Arrow Keys | Navigate between slides |
| Space      | Next slide              |
| S          | Speaker notes view      |
| ESC        | Slide overview          |
| F          | Fullscreen              |
| Alt+Click  | Zoom into element       |

---

## Creating Slides - ONE AT A TIME

### Mandatory Process

1. **Generate ONE slide at a time** - Never write multiple slides in a single edit
2. **Read existing index.html** before making changes
3. **Add slide HTML** to index.html in the `<div class="slides">` section
4. **Test in browser** before creating the next slide
5. **Verify quality** using checklist below before proceeding

### Slide Templates

#### 1. Cover Slide (60/40 Split)

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
  <aside class="notes">Speaker notes here</aside>
</section>
```

#### 2. Content Slide with Stats

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
      <p>Supporting text.</p>
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

#### 3. Gradient Feature Slide

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

#### 4. Process Flow Slide

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

#### 5. Ask/Point Card Slide

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

#### 6. Sidebar Image Slide

```html
<section
  id="sidebar"
  data-background-image="https://images.unsplash.com/photo-xxx?w=1280&h=720&fit=crop"
>
  <div class="sidebar-content">
    <h1>Title</h1>
    <div class="accent-bar"></div>
    <p>Content text</p>
  </div>
</section>
```

#### 7. Chart Slide

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
    </canvas>
  </div>
</section>
```

#### 8. Code Slide

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

## Design System - Opulentia Theme

### Typography

| Element | Font    | Size   | Weight |
| ------- | ------- | ------ | ------ |
| h1      | DM Sans | 3.5em  | 700    |
| h2      | DM Sans | 2.5em  | 700    |
| h3      | DM Sans | 1.75em | 700    |
| Body    | Poppins | 1.1em  | 400    |
| Lead    | Poppins | 1.4em  | 400    |

### Color Palette

**Primary Colors**

- Primary Indigo: `#6366F1`
- Stripe Purple: `#635BFF`
- Deep Indigo: `#1e1b4b`
- Mid Indigo: `#312e81`
- Purple: `#4c1d95`

**Text Colors**

- Gray 900: `#111827` (Primary headings)
- Gray 700: `#374151` (Emphasis)
- Gray 600: `#4B5563` (Body)

### Components

**Accent Bar**

```css
.accent-bar {
  width: 96px;
  height: 4px;
  background-color: #6366f1;
}
.accent-bar-light {
  width: 96px;
  height: 4px;
  background-color: #a5b4fc;
}
```

**Stat Card** - White with hover elevation
**Glass Card** - Dark backgrounds with transparency
**Gradient Backgrounds** - Indigo to purple

---

## Content Strategy - 12 Slide Structure

| Slide | Type               | Purpose                            |
| ----- | ------------------ | ---------------------------------- |
| 1     | Cover              | Hook with title, audience + visual |
| 2     | Intro              | Macro-trend or landscape           |
| 3     | Core Capabilities  | Main value proposition             |
| 4-7   | Deep Dives         | Strategic pillars                  |
| 8     | Architecture/Trust | Security, infrastructure           |
| 9     | Synergy/Flow       | Visual flow map                    |
| 10    | Target Markets     | Specific verticals                 |
| 11    | Proof Points       | Case studies, partnerships         |
| 12    | Summary/CTA        | Clear next steps                   |

---

## Writing Guidelines - Humanizer Patterns

Based on research into AI writing detection, avoid these 24 patterns to create more natural, human-sounding content:

### Content Patterns (Avoid)

| #   | Pattern                       | WRONG                                             | CORRECT                                                  |
| --- | ----------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| 1   | **Significance inflation**    | "marking a pivotal moment in the evolution of..." | "was established in 1989 to collect regional statistics" |
| 2   | **Notability name-dropping**  | "cited in NYT, BBC, FT, and The Hindu"            | "In a 2024 NYT interview, she argued..."                 |
| 3   | **Superficial -ing analyses** | "symbolizing... reflecting... showcasing..."      | Remove or expand with actual sources                     |
| 4   | **Promotional language**      | "nestled within the breathtaking region"          | "is a town in the Gonder region"                         |
| 5   | **Vague attributions**        | "Experts believe it plays a crucial role"         | "according to a 2019 survey by..."                       |
| 6   | **Formulaic challenges**      | "Despite challenges... continues to thrive"       | Specific facts about actual challenges                   |

### Language Patterns (Avoid)

| #   | Pattern                   | WRONG                                                  | CORRECT                     |
| --- | ------------------------- | ------------------------------------------------------ | --------------------------- |
| 7   | **AI vocabulary**         | "Additionally... testament... landscape... showcasing" | "also... remain common"     |
| 8   | **Copula avoidance**      | "serves as... features... boasts"                      | "is... has"                 |
| 9   | **Negative parallelisms** | "It's not just X, it's Y"                              | State the point directly    |
| 10  | **Rule of three**         | "innovation, inspiration, and insights"                | Use natural number of items |
| 11  | **Synonym cycling**       | "protagonist... main character... central figure"      | Repeat when clearest        |
| 12  | **False ranges**          | "from the Big Bang to dark matter"                     | List topics directly        |

### Style Patterns (Avoid)

| #   | Pattern                 | WRONG                                             | CORRECT                                   |
| --- | ----------------------- | ------------------------------------------------- | ----------------------------------------- |
| 13  | **Em dash overuse**     | "institutions—not the people—yet this continues—" | Use commas or periods                     |
| 14  | **Boldface overuse**    | "**OKRs**, **KPIs**, **BMC**"                     | "OKRs, KPIs, BMC"                         |
| 15  | **Inline-header lists** | "**Performance:** Performance improved"           | Convert to prose                          |
| 16  | **Title Case Headings** | "Strategic Negotiations And Partnerships"         | "Strategic negotiations and partnerships" |
| 17  | **Emojis**              | "🚀 Launch Phase: 💡 Key Insight:"                | Remove emojis                             |
| 18  | **Curly quotes**        | `said "the project"`                              | Use straight quotes                       |

### Communication Patterns (Avoid)

| #   | Pattern                | WRONG                                               | CORRECT                |
| --- | ---------------------- | --------------------------------------------------- | ---------------------- |
| 19  | **Chatbot artifacts**  | "I hope this helps! Let me know if..."              | Remove entirely        |
| 20  | **Cutoff disclaimers** | "While details are limited in available sources..." | Find sources or remove |
| 21  | **Sycophantic tone**   | "Great question! You're absolutely right!"          | Respond directly       |

### Filler and Hedging (Avoid)

| #   | Pattern                 | WRONG                                 | CORRECT                 |
| --- | ----------------------- | ------------------------------------- | ----------------------- |
| 22  | **Filler phrases**      | "In order to", "Due to the fact that" | "To", "Because"         |
| 23  | **Excessive hedging**   | "could potentially possibly"          | "may"                   |
| 24  | **Generic conclusions** | "The future looks bright"             | Specific plans or facts |

---

## OpenAI Agent Principles - Applied to Slides

Based on OpenAI's practical guide to building agents, apply these principles to slide creation:

### 1. Clear Instructions (From Agent Design)

Apply to slide content:

- **Use existing content** - Extract from source docs, don't hallucinate
- **Break down dense information** - Smaller, clearer points from dense resources
- **Define clear actions** - Each slide should have a specific purpose
- **Capture edge cases** - Anticipate questions and address them

### 2. Incremental Approach (From Orchestration)

- **Start simple** - One slide at a time, test each
- **Build baseline quality** - Establish performance before optimizing
- **Iterate based on feedback** - Test in browser between slides

### 3. Guardrails for Quality

Apply to presentation creation:

- **Input validation** - Verify source content accuracy
- **Output validation** - Check slide renders correctly
- **Human intervention** - Have user review critical slides
- **Edge case handling** - Plan for technical issues

### 4. Best Practices for Agent Instructions

| Principle              | Application to Slides         |
| ---------------------- | ----------------------------- |
| Use existing documents | Extract from source material  |
| Break down tasks       | One slide at a time           |
| Define clear actions   | Each slide = specific purpose |
| Capture edge cases     | Address potential questions   |

---

## Quality Standards Checklist

Before declaring a slide complete, verify:

- [ ] **Clarity** - Content is clear and direct (no AI vocabulary)
- [ ] **Depth** - Provides specific facts, not generic statements
- [ ] **Natural tone** - No promotional language or hedging
- [ ] **Typography** - Matches design tokens (DM Sans/Poppins)
- [ ] **Colors** - Uses correct hex values
- [ ] **Icons** - Font Awesome, consistent style
- [ ] **Spacing** - Follows 8px grid
- [ ] **Accent bars** - 96px wide
- [ ] **Cards** - Have hover effects
- [ ] **Speaker notes** - Added via `<aside class="notes">`
- [ ] **Tested** - Verified in browser
- [ ] **Navigation** - Arrow keys work
- [ ] **No filler** - Removed "additionally", "furthermore"
- [ ] **No formulas** - No "Despite challenges" patterns

---

## Plugins Included (All Required)

| Plugin        | Purpose                        |
| ------------- | ------------------------------ |
| **Markdown**  | Write slides in Markdown       |
| **Highlight** | Code syntax highlighting       |
| **Notes**     | Speaker notes (press S)        |
| **Math**      | LaTeX math rendering           |
| **Search**    | Search within presentation     |
| **Zoom**      | Zoom into elements (Alt+click) |
| **Chart**     | Chart.js data visualization    |

---

## Image Sources

```html
<!-- Unsplash URLs -->
https://images.unsplash.com/photo-xxx?w=1280&h=720&fit=crop
https://images.unsplash.com/photo-xxx?w=800&h=1200&fit=crop
```

---

## Font Awesome Icons

| Icon                                 | Usage           |
| ------------------------------------ | --------------- |
| `<i class="fas fa-rocket"></i>`      | Launch/features |
| `<i class="fas fa-chart-line"></i>`  | Growth/metrics  |
| `<i class="fas fa-shield-alt"></i>`  | Security        |
| `<i class="fas fa-globe"></i>`       | Global/web      |
| `<i class="fas fa-cogs"></i>`        | Technical       |
| `<i class="fas fa-users"></i>`       | Team/users      |
| `<i class="fas fa-envelope"></i>`    | Contact         |
| `<i class="fas fa-arrow-right"></i>` | Process flow    |

---

## Troubleshooting

| Issue                | Solution                                 |
| -------------------- | ---------------------------------------- |
| Slide not showing    | Check section ID matches in HTML         |
| Charts not rendering | Verify canvas has `data-chart` attribute |
| Navigation broken    | Check reveal.esm.js loads correctly      |
| Styles missing       | Verify opulentia.css path in index.html  |

---

## Example: Before vs After Humanizing

**BEFORE (AI-sounding):**

> The new software update serves as a testament to the company's commitment to innovation. Moreover, it provides a seamless, intuitive, and powerful user experience—ensuring that users can accomplish their goals efficiently. It's not just an update, it's a revolution in how we think about productivity. Industry experts believe this will have a lasting impact on the entire sector, highlighting the company's pivotal role in the evolving technological landscape.

**AFTER (Humanized):**

> The software update adds batch processing, keyboard shortcuts, and offline mode. Early feedback from beta testers has been positive, with most reporting faster task completion.

---

## Final Notes

- Generate slides **one at a time** to maximize attention and avoid errors
- Use **all plugins** for high design standard formatting
- Follow **humanizer guidelines** for natural-sounding content
- Apply **OpenAI principles** - clear instructions, incremental building, quality guardrails
- Always **test in browser** before proceeding to next slide

---

## File Locations Reference

| Component    | Path                       |
| ------------ | -------------------------- |
| Theme        | `dist/theme/opulentia.css` |
| Main HTML    | `index.html`               |
| Reset CSS    | `css/reset.css`            |
| Print Styles | `css/print/`               |
| Core JS      | `dist/reveal.esm.js`       |
