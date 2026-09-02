# Design QA — sticky header

## Evidence

- Source visual truth: `/Users/jirka/.codex/generated_images/01a0639f-439c-77e3-bcc6-967d34f4a3e8/exec-9d16e31e-0f13-4e53-b79a-67b5daefcec9.png`
- Source dimensions: 1487 × 1058 px.
- Browser-rendered implementation: captured and inspected in the Codex in-app browser during this run; the browser did not expose a writable local screenshot path.
- Implementation capture dimensions: 1425 × 1013 px from a 1440 × 1024 CSS viewport at device pixel ratio 1.
- States checked: homepage top, desktop sticky state at `#program`, desktop active-section state, mobile top, mobile sticky state, mobile menu open, and mobile `#oddily` anchor target.
- Density normalization: source and implementation were inspected at approximately matching desktop viewport proportions. A filesystem-backed combined comparison could not be produced.

## Full-view comparison

The implementation preserves the existing homepage at the top and adopts the selected direction after scrolling: a white 64px full-width top bar, compact official symbol and brand, right-aligned navigation, thin lower divider, restrained shadow, and a red current-section underline. The page content remains unchanged.

The live implementation was visually inspected in the same browser used for interaction testing. Formal side-by-side evidence is blocked because the in-app browser capture could not be saved to a local file for a combined comparison input.

## Focused-region comparison

- Header height: selected direction approximately 64px; implementation measured 64px.
- Logo: selected direction uses the official symbol; implementation reuses `public/images/sokol-symbol.png` at 44px in the sticky state.
- Navigation: selected direction contains Program, Oddíly, Klub, Kontakt; implementation matches and removes the former duplicate desktop hamburger.
- Active state: selected direction uses a restrained red underline; implementation matches and exposes `aria-current="location"`.
- Mobile: the large floating header transitions to a 64px full-width bar; the menu remains operable and closes after anchor navigation.

## Findings

- No P0, P1, or P2 issue was observed in the live browser inspection.
- P3: The generated source mock changes unrelated page copy and section content. The implementation intentionally preserves the real site content and uses the mock only as header direction.
- Blocker: a filesystem-backed implementation capture and combined source/implementation comparison are unavailable in this run.

## Required fidelity surfaces

- Typography: existing self-hosted Manrope variable font is preserved; the sticky brand and navigation use a compact scale consistent with the mock.
- Spacing and layout: the sticky bar measures 64px high, spans the viewport, and anchor targets use an 88px scroll margin so headings remain visible.
- Colors and tokens: existing `--red`, `--ink`, and `--line` tokens are retained; the header uses an almost opaque white background and subtle neutral shadow.
- Image quality and assets: the existing official raster Sokol symbol is reused; no placeholder or improvised logo was introduced.
- Copy and content: navigation labels match the selected direction; existing site content remains unchanged.

## Interaction and technical verification

- Desktop scroll compaction: passed.
- Desktop Program anchor and active state: passed.
- Mobile scroll compaction: passed.
- Mobile menu open/close and Oddíly anchor: passed.
- Anchor headings remain below the sticky bar: passed.
- Browser console errors and warnings: 0.
- Production build: passed.
- `git diff --check`: passed after the final accessibility adjustment.

## Comparison history

### Pass 1

- Removed the duplicate desktop hamburger visible in the previous implementation.
- Added the 64px sticky state, current-section underline, mobile sticky state, and anchor offsets.
- Live browser inspection found no actionable P0/P1/P2 visual issue.

### Pass 2

- Replaced `aria-current="page"` with the more accurate `aria-current="location"` for in-page section navigation.
- Aligned the resize boundary with the 820px CSS breakpoint.
- Live browser metrics confirmed a 64px header, 44px logo, full viewport width, and the active Program state.

## Final result

final result: blocked
