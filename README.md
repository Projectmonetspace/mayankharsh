# Mayank Harsh — V2 portfolio rebuild

A static-first Next.js 16, TypeScript and CSS design system. The generated `out/` directory contains real HTML for every publishable route. Only the mobile menu and selected-work rail hydrate in the browser. Source media remains unaltered. No production configuration or domain is changed by this branch.

## V2 visual direction

The rejected V1 hero, wireframe signal map, section system, header and carousel presentation were removed on `redesign/lumen-v2-faithful-rebuild` and rebuilt from a fresh visual base. The hero follows the approved MotionSites/LŪMEN viewport composition: 20/35px gutters, measured technical grid, left editorial headline, central/right dominant art object, geometric nodes/connectors, lower CTA and chamfered information card. The object uses original @sl6dl7 creator-work covers, led by *The Starry Night* with portrait and literature fragments. These are images from the work, not a portrait of Mayank or a claim that he authored the underlying painting. The technical interface annotates the visual. The site continues into an image-led gallery and varied editorial sections.

The first two gallery covers load eagerly so the rail has visible work immediately; remaining covers load lazily. Automatic motion uses requestAnimationFrame only while the rail is visible, stops during interaction, and is disabled for reduced-motion preferences. Native horizontal scroll remains available without capturing vertical wheel movement.

## Development

```sh
npm ci
npm run build
npm run verify
npm run preview
```

`npm run preview` serves `out/` locally at http://localhost:3000 with a `noindex` response header. On Vercel, `VERCEL_ENV=preview` generates `noindex` metadata; production builds receive `VERCEL_ENV=production`. For another static host, set `SITE_INDEXABLE=true` **only at production build time**. All canonical URLs deliberately target https://mayankharsh.space, including preview builds. `output: export` means the target host must serve folder `index.html` files and `404.html` with actual 404 status; redirects/headers must be handled by the host. Do not point the live domain at this build until content review and cutover approval.

## Scope and evidence

See [migration inventory](docs/migration-inventory.md) and [search research](docs/seo-research.md). The existing site exposes inconsistent historical metrics and undated testimonials. They are recorded for review, not copied into live text. The @shehzada.says draft route has `noindex`; /insights and /expertise/trend-strategy are not generated because original content and evidence are insufficient. Founder reel covers are exact original files already in the Project Monet founder proof rail; the source-account distinction is explicit.

## Review gate

- Review copy and six selected assets, check source/usage rights, add first-party proof to Notion OS 07 before any metric claim.
- Approve the @shehzada.says case-study media and documented process before making it indexable.
- Confirm hosting behavior for 404, canonical, redirects and preview `noindex`.
- Merge and production domain change each require separate Mayank approval.
