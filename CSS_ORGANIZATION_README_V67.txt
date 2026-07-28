DIVERSIFIED PLUS CSS ORGANIZATION README

Active stylesheet:
assets/css/diversified-plus-organized.css

This package uses one active local CSS file.

The CSS is organized into:
1. Global non-visual base
2. Shared foundation and shared components
3. Home page only: body.dp-page-index
4. Inner pages only: body.dp-non-home-page

How to edit safely:
- For a homepage-only change, edit inside the HOME PAGE ONLY block.
- For an inner-page-only change, edit inside the INNER PAGES ONLY block.
- For a sitewide shared component change, edit inside SHARED FOUNDATION + SHARED COMPONENTS.
- Every selector from grouped rules was split into its own rule.
- Every property is on its own line.
- CSS custom variable root declarations were removed by inlining values.
- Forced-priority declarations were removed.
- Old CSS files were deleted so there is no competing CSS stack.

This is an organization pass, not a redesign pass.
