---
name: High-Voltage Professional
colors:
  surface: '#161308'
  surface-dim: '#161308'
  surface-bright: '#3d392c'
  surface-container-lowest: '#110e05'
  surface-container-low: '#1f1b10'
  surface-container: '#231f14'
  surface-container-high: '#2e2a1e'
  surface-container-highest: '#393528'
  on-surface: '#eae2cf'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#eae2cf'
  inverse-on-surface: '#343024'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#f6f6f6'
  on-tertiary: '#2f3131'
  tertiary-container: '#d9dada'
  on-tertiary-container: '#5e5f60'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#161308'
  on-background: '#eae2cf'
  surface-variant: '#393528'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style
The design system is engineered for a high-impact IT portfolio that balances professional technical rigor with a bold, creative edge. The aesthetic is rooted in **Minimalism** and **High-Contrast**, utilizing a strict "Dark Mode" foundation to allow vibrant accents to command attention. 

The goal is to evoke a sense of precision, energy, and modern expertise. By combining deep blacks with electric yellow highlights, the UI feels both authoritative and energetic. **Glassmorphism** is applied sparingly to interactive layers to add depth and a sense of sophisticated "tech-stack" layering without compromising the clean, minimalist silhouette.

## Colors
The palette is dominated by **Pure Black (#000000)** for the primary background to maximize OLED contrast and power efficiency. 

- **Primary (Vibrant Yellow):** Used exclusively for high-priority actions, status indicators, and critical highlights. It represents energy and "active" code.
- **Secondary (Deep Gray):** Used for surface containers and section dividers to create subtle hierarchy.
- **Accents:** White is used for primary text to ensure maximum readability against the dark backdrop.
- **Glass Effects:** Semi-transparent grays with background blurs are used to create "elevated" overlays.

## Typography
The typography strategy pairs the geometric strength of **Montserrat** for headings with the systematic clarity of **Inter** for body copy. 

Headings should use heavy weights (700+) to create a "brutalist-lite" impact. Large display text utilizes tight letter-spacing to appear more compact and architectural. Body text is set with generous line-height to ensure technical documentation or project descriptions remain legible against the dark background. Labels and small metadata use uppercase tracking for a "coded" or "terminal" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a controlled, editorial look, centering content within a 1200px maximum width. 

- **Grid:** A 12-column system is used for project galleries, while a 2-column asymmetric split is preferred for "About" and "Experience" sections.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Breathing Room:** Significant vertical spacing (128px+) is used between major sections to emphasize the minimalist "gallery" feel of the portfolio.
- **Mobile:** Margins shrink to 16px, and multi-column grids collapse into a single vertical stack.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional shadows.

1.  **Level 0 (Base):** Pure Black (#000000).
2.  **Level 1 (Cards/Sections):** Dark Gray (#121212) with a subtle 1px border (#2C2C2C).
3.  **Level 2 (Interactive/Floating):** Semi-transparent Surface (#FFFFFF10) with a 20px Backdrop Blur. This creates the "glass" effect for navigation bars and hover states.

Avoid drop shadows. Use 1px solid borders in muted grays to define shapes, or use the Primary Yellow for a "glow" border effect on active elements.

## Shapes
This design system uses a **Soft (0.25rem)** roundedness. The intent is to keep the UI feeling sharp and precise, reflecting an IT professional's attention to detail. 

- **Buttons & Inputs:** Use the base 0.25rem (4px) radius.
- **Cards:** Use `rounded-lg` (8px) to softly distinguish them from the background.
- **Icon Enclosures:** Small chips or tags may use a pill-shape to provide visual variety against the otherwise rectangular structure.

## Components

### Buttons
- **Primary:** Solid Vibrant Yellow background with Black text. Bold weight. No border.
- **Secondary:** Transparent background with a 1px Yellow border. Yellow text.
- **Ghost:** Transparent background, white text, subtle yellow underline on hover.

### Cards (Glassmorphism)
Cards should feature a `background: rgba(255, 255, 255, 0.05)`, a `backdrop-filter: blur(12px)`, and a very thin `1px border: rgba(255, 255, 255, 0.1)`. This is ideal for project showcases.

### Input Fields
Dark backgrounds (#121212) with a bottom-only border of #2C2C2C. When focused, the border becomes Vibrant Yellow. Labels should be small, uppercase, and positioned above the field.

### Chips & Tags
Small, dark gray backgrounds with yellow text. Used for technical skills (e.g., "React", "Python", "AWS").

### Navigation Bar
A fixed top-bar with a glassmorphism effect. The active link should be indicated by a Vibrant Yellow dot or a thin top-border.

### Experience Timeline
A vertical 2px line in Deep Gray with Vibrant Yellow nodes representing milestones.