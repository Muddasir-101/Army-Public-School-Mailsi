# Army Public School Mailsi design system

## Goal
Implement the Army Public School and Colleges System (APSACS) design-system foundation and a responsive design-system specimen page at `/design-system`, based on `design/APS-designsystem.png`. Preserve the existing Next.js starter page and metadata at `/`; do not change that route.

## Skills and guidance read
- No available skill specifically applies to implementing this static design system.
- Read the repository `AGENTS.md`, including its UI-reference, approval, testing, and Next.js guidance.
- Read the installed Next.js 16 CSS and font guides in `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` and `13-fonts.md`. Keep global styles in the existing imported `app/globals.css`, and load typefaces through `next/font`.

## Existing code inspected
- `app/page.tsx` is the starter landing page and must remain unchanged.
- `app/globals.css` contains only default Tailwind and light/dark starter styles.
- `app/layout.tsx` loads Geist and Geist Mono and still has Create Next App metadata.
- `package.json` has Next.js 16, React 19, and Tailwind 4; its scripts include `dev`, `build`, and `lint`. `tsconfig.json` enables strict type checking.
- `public/` has no APSACS logo or design-specific assets. The provided reference is also stored at `design/APS-designsystem.png`.

## Decisions and assumptions
- Treat the provided desktop design-system image as the source of truth. Build a page that displays the design system itself: all 14 sections, in the same order and overall grid hierarchy, with sensible responsive stacking on narrow screens.
- Use the color, type, spacing, radius, shadow, control, and component values visible in the reference as CSS custom properties and reusable classes. In particular, use Playfair Display for display samples and Inter for interface/body text.
- Do not add a component library, icon package, product pages, authentication, analytics, APIs, or other backend functionality. Create simple inline SVG outline/filled icons for the specimen, with accessible names when meaningful and hidden decorative icons otherwise.
- There is no standalone logo asset; represent the brand sample with a self-contained, restrained APSACS book/crest mark and wordmark. Do not use the screenshot as a full-page background.
- Make the controls real and keyboard accessible (buttons, text/search input, select), with visible focus and disabled states; keep them illustrative and do not imply backend behavior.

## Expected files
- `app/globals.css`: replace starter styling with the APSACS tokens, resets, responsive specimen styles, and interaction states.
- `app/design-system/page.tsx`: expose the 14-section design-system showcase.
- `app/design-system/showcase.tsx`: implement the shared 14-section showcase component.
- `app/page.tsx`: preserve the original Next.js starter page.
- `app/layout.tsx`: preserve the starter page's Geist typography and metadata while providing Playfair Display and Inter through `next/font`.
- `tsconfig.json`: exclude the checked-in skill/reference examples from this app's TypeScript project; those samples are independent projects with their own missing dependencies.

## Requirements
1. Present a calm, light canvas with softly tinted green-white background, fine pale-green section borders, compact uppercase numbered section labels, forest-green text, and a dense editorial board layout matching the reference.
2. Include these reference sections and content: (01) Colors, (02) Typography, (03) Type Scale, (04) Spacing System, (05) Radius & Shadows, (06) Icons, (07) Buttons, (08) Inputs, (09) Badges / Tags, (10) Status / Indicators, (11) Progress Bar, (12) Cards, (13) Navigation, and (14) Principles.
3. Define the primary palette: 600 `#0B7A3D`, 500 `#0F9D58`, 400 `#40B97A`, 300 `#7ED3A5`, 200 `#A6E6C9`, 100 `#EAF8F0`. Define the neutral palette: 900 `#0F172A`, 700 `#334155`, 500 `#64748B`, 300 `#CBD5E1`, 200 `#E2E8F0`, 100 `#F1F5F9`, 50 `#FAFAFC`, and white `#FFFFFF`.
4. Include Playfair Display and Inter specimens and the reference type scale: Display 1 48/56 bold; Display 2 36/44 bold; Heading 1 28/36 semibold; Heading 2 22/30 semibold; Heading 3 18/26 medium; Body Large 16/24 regular; Body 14/20 regular; Small 12/16 regular.
5. Use a 4px spacing base and samples 4, 8, 12, 16, 24, 32, 40, 48, and 64px. Include radii 4, 8, 12, 16, 24px and full-circle; show the four shadow levels from the reference.
6. Include outline and filled icon samples, primary/secondary/tertiary/text button variants with default/hover/disabled states and 44px default height, search/text and select inputs, Video/Lesson/Popular badges, progress statuses, a progress bar, the four learning/resource card samples, navigation/breadcrumb/pagination samples, and the four design principles.
7. Ensure correct heading hierarchy, labels for form controls, sufficient contrast, visible keyboard focus, reduced-motion respect, and responsive layout without horizontal overflow.
8. Keep the implementation maintainable and type-safe. Avoid adding dependencies and keep the sample content local and static.

## Security considerations
- This is a static presentation-only route. Add no secrets, credentials, data writes, external requests, authentication, or client/server API surfaces.
- Use semantic, labeled controls; avoid clickable non-interactive elements and provide accessible state text where icons convey meaning.

## Acceptance criteria
- `/design-system` displays a polished, complete specimen page reflecting the supplied APSACS reference and all 14 named sections; `/` remains the default Next.js starter page.
- The layout adapts from the desktop multi-column board to tablet and mobile, retaining readable labels and usable controls.
- Design tokens are defined once and reused by the specimens; no starter dark-mode or Next.js branding remains.
- Metadata identifies the APSACS design system.
- Type checking, lint, and production build pass.

## Checks to run
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Manual test steps
1. Start the app with `npm run dev` and open `http://localhost:3000/design-system`; verify `http://localhost:3000` still displays the default Next.js starter page.
2. Compare the section order, density, palette, typography, spacing, and specimen patterns with `design/APS-designsystem.png`.
3. Inspect the page at desktop, tablet, and mobile widths; confirm all 14 sections remain accessible and no page-level horizontal scrolling occurs.
4. Tab through the search input, select, and button samples; verify visible focus, labels, and disabled styling. Check a reduced-motion system preference.