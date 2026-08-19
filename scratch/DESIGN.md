---
name: Titan Core System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#f8f6f5'
  on-tertiary: '#303030'
  tertiary-container: '#dcd9d9'
  on-tertiary-container: '#5f5f5f'
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
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a "Pro" gaming aesthetic, targeting performance-driven server administrators and competitive gaming communities. The brand personality is authoritative, technical, and high-performance.

The visual style is a fusion of **Corporate Modern** and **High-Contrast Dark Mode**. It utilizes deep charcoal foundations to minimize eye strain during long configuration sessions, punctuated by aggressive yellow accents that signify power and action. The interface relies on precise geometry, subtle glowing effects to indicate system vitality, and a structured layout that mirrors a cockpit or command center. The emotional response should be one of total control and unwavering reliability.

## Colors

This design system utilizes a high-contrast palette optimized for dark environments.

- **Primary (#FFD700):** A vibrant "Cyber Yellow" used exclusively for primary CTAs, critical status indicators, and active selection highlights. It provides the "Pro" punch against the dark backdrop.
- **Neutral Core (#121212):** The base canvas color, providing a deep, immersive background that makes content pop.
- **Surface Tiers (#1E1E1E & #2A2A2A):** Secondary and tertiary grays used for card backgrounds and input fields to create structural depth without relying on heavy shadows.
- **Accents:** Subtle grays are used for borders and secondary text to maintain a sophisticated, technical hierarchy.

## Typography

The typography strategy emphasizes clarity and technical precision.

- **Sora** is used for headlines to provide a bold, geometric, and futuristic feel. Its wide stance conveys stability and power.
- **Hanken Grotesk** serves as the primary body face, offering exceptional readability and a clean, contemporary look that balances the aggressive headlines.
- **JetBrains Mono** is utilized for labels, metadata, and status readouts. This monospaced choice reinforces the "Server/Dev" nature of the dashboard, making technical data feel structured and deliberate.

All caps should be applied to `label-sm` for navigation and category headers to enhance the "dashboard" aesthetic.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a cinematic and controlled information density, transitioning to a fluid model for mobile.

- **Desktop:** A 12-column grid with a max-width of 1440px. Gutters are kept at 24px to allow the dark cards enough "breathing room" to maintain their distinct silhouettes.
- **Spacing Logic:** Based on an 8px linear scale. Consistent vertical stacking (stack-md) ensures a rhythmic flow between dashboard modules.
- **Mobile:** Content reflows into a single column with 16px side margins. Complex data tables should transition into card-based list views to maintain usability.
- **Density:** High information density is preferred for "Console" views, while "Storefront" or "Overview" pages should utilize more whitespace (stack-lg) to highlight featured content.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows. 

- **Level 0 (Background):** #121212.
- **Level 1 (Cards/Surface):** #1E1E1E with a 1px solid border of #2A2A2A.
- **Level 2 (Hover/Active):** When a card is hovered, the border color shifts to the Primary Yellow (#FFD700) with a subtle 4px outer "glow" (a highly diffused shadow using the primary color at 20% opacity).
- **Inlays:** Input fields and secondary containers use a darker #0A0A0A background to create a "sunken" effect, emphasizing their interactive nature.

## Shapes

The shape language is "Technical-Sharp." 

The design system uses a **Soft (1)** roundedness level (0.25rem / 4px) to maintain a modern feel while staying true to the professional, rigid nature of server hardware and pro-gaming gear. 

- **Small elements (Checkboxes, Tags):** 2px radius.
- **Medium elements (Buttons, Cards, Inputs):** 4px radius.
- **Large elements (Modals, Feature Banners):** 8px radius.

Avoid pill-shapes or high-radius curves, as they detract from the "Pro" technical aesthetic.

## Components

- **Buttons:** 
  - *Primary:* Solid #FFD700 background with black text. No border. On hover, apply a subtle outer glow.
  - *Secondary:* Transparent background with a 1px #FFD700 border. Yellow text.
  - *Ghost:* Subtle gray text, turns white on hover.
- **Cards:** Dark #1E1E1E background. Headers within cards should have a subtle bottom divider (#2A2A2A). Use high-quality game imagery with a dark gradient overlay at the bottom to ensure text legibility.
- **Input Fields:** Deep black background (#0A0A0A) with a #2A2A2A border. On focus, the border changes to Primary Yellow.
- **Status Chips:** Small, monospaced text. Use a "dot" indicator next to the text (e.g., a pulsing green dot for "Online").
- **Progress Bars:** Use a thick 8px height. The "unfilled" track should be #2A2A2A, and the "filled" portion should be a solid Primary Yellow or a gradient transition for health/resource bars.
- **Icons:** Use sharp, linear icons with a consistent 2px stroke width. Icons for CTAs should inherit the primary color.