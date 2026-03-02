// Slide Module System
// Each slide is a separate JS module that exports:
// - html: The slide's HTML content
// - initialize(): Called when slide becomes active
// - cleanup(): Called when leaving the slide

class SlideManager {
  constructor() {
    this.slides = new Map();
    this.currentSlide = null;
  }

  register(name, module) {
    this.slides.set(name, module);
  }

  async loadSlide(name) {
    if (this.currentSlide) {
      const current = this.slides.get(this.currentSlide);
      if (current && current.cleanup) {
        current.cleanup();
      }
    }

    const slide = this.slides.get(name);
    if (slide) {
      this.currentSlide = name;
      const container = document.getElementById(name);
      if (container && slide.html) {
        container.innerHTML = slide.html;
      }
      if (slide.initialize) {
        slide.initialize();
      }
    }
  }
}

window.SlideManager = new SlideManager();

// Helper function to load slide modules dynamically
export async function loadSlideModule(name) {
  try {
    const module = await import(`./slides/${name}.js`);
    window.SlideManager.register(name, module);
    return module;
  } catch (error) {
    console.error(`Failed to load slide: ${name}`, error);
    return null;
  }
}
