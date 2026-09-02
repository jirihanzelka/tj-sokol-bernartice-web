# Design QA

## Evidence

- Source visual truth: `/Users/jirka/.codex/generated_images/01a062dd-b7f2-7aa0-a969-93c4f24dc64f/exec-cc6ae089-6def-43f2-b22f-048ec71ee686.png`
- Desktop implementation: `/Users/jirka/Development/tj-sokol-bernartice-web/implementation-desktop.jpg`
- Mobile implementation: `/Users/jirka/Development/tj-sokol-bernartice-web/implementation-mobile.jpg`
- Source dimensions: 1487 x 1058 px.
- Desktop capture: 1426 x 1014 px from a 1440 x 1023 CSS viewport at device pixel ratio 1.1.
- Mobile capture: 416 x 901 px from a 430 x 932 CSS viewport at device pixel ratio 1.1.
- State: homepage at the top, navigation closed, no hover or focus state.
- Density normalization: source and desktop capture have the same approximately 1.405 aspect ratio; comparison used their relative viewport geometry and original-resolution inspection.

## Full-view comparison

The implementation preserves the selected direction's defining composition: a floating white header, a full-width documentary photograph, restrained left-aligned hero copy, two actions, a white three-column gateway strip, and one concise upcoming-event block. The visual hierarchy and the amount of information visible in the first viewport match the source.

## Focused-region evidence

A separate crop was not needed. The header, hero typography, calls to action, gateway strip, and event block are legible at original resolution in the joint full-view comparison. The mobile layout was captured separately to verify reflow and navigation.

## Findings

- P3: The standalone generated hero photograph necessarily differs in its exact people and river placement from the concept image. It retains the intended community-sport subject, warm light, left-side negative space, and readable overlay composition.
- The browser capture control visible at the bottom edge of screenshots is browser UI, not part of the page.
- No actionable P0, P1, or P2 fidelity issue remains.

## Comparison history

### Pass 1

- P2: The logo and header brand were too small against the full-bleed image.
- P2: The hero overlay was darker than the selected light concept.
- P2: Hero action spacing and the event row were too compressed.
- Fix: enlarged the official symbol and header type, lightened the overlay, and increased the relevant spacing.

### Pass 2

- Compared the source and updated desktop implementation together at matching aspect ratios.
- Verified the mobile layout independently at 430 x 932 CSS pixels.
- Result: no remaining actionable P0, P1, or P2 issue.

## Required fidelity surfaces

- Typography: self-hosted Manrope variable font with matching weight contrast.
- Layout: full-bleed hero, floating header, gateway strip, single-event emphasis.
- Color: Sokol red accent, white surfaces, restrained neutral text.
- Imagery: dedicated wide hero asset rather than a crop of the concept.
- Icons: Phosphor icon font; no improvised glyphs or CSS-drawn substitutes.
- Interaction: desktop anchors, mobile menu, mobile navigation close behavior, visible focus states, and reduced-motion handling.

## Verification

- Production build completed successfully.
- Desktop section navigation was exercised in the browser.
- Mobile menu open/close and Program navigation were exercised in the browser.
- Browser console contained no errors or warnings.

## Final result

final result: passed
