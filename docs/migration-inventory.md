# Production content inventory — 23 September 2026

Source: https://mayankharsh.space/ (read before coding), its rendered HTML and metadata, /robots.txt, /sitemap.xml. Current site is a single Next.js page. The destination repository was empty. This is an inventory, not a claim-verification record.

## Structure and headings

- Existing H1 in the page body: “Mayank Harsh”; additionally hidden or offscreen H1 “Mayank Harsh — Viral Trend Creator & Creative Director” and H2 “Portfolio of Mayank Harsh - Creative Director with 35M+ Views and 100K+ Followers.”
- Sections: About (“I don't follow trends. I create them.”), By the Numbers, Case Study 01 / @sl6dl7, Case Study 02 / @shehzada.says, Creative Brief, March 2025 Content Calendar, Growth Strategy, testimonials (“What People Say”), and Contact.
- Positioning: creative director, social media strategist, trend originator; Instagram community building, emotional storytelling, poetry/literature/music. Based in Gurgaon, India.
- Only canonical URL is the homepage; the sitemap includes `#about`, `#work`, `#brief`, `#calendar`, `#strategy`, `#contact` fragments as separate entries. No existing child routes were found in the live navigation.

## Existing performance and public claims — evidence required before publication

| Claim on old homepage | Concern | Rebuild handling |
| --- | --- | --- |
| 35M+ organic views, 102K+ combined followers, 9.5M top reel, 5+ viral trends, 58% peak engagement | Registry flags exact values and scopes for verification; 9.5M conflicts with 15.8M music reel elsewhere on page | Excluded from current copy; retained in registry for review |
| 15.8M music reel, 708K likes, 76K shares, 3.1M 90-day views, 40%+ engagement, 10K+ followers | No current dated first-party analytics provided; scope conflicts | Excluded |
| 50+ collaborations, thousands of recreations, Anuv Jain “endorsement,” $144K brand value | No approved source package; endorsement versus like is especially ambiguous | Excluded |
| “3+ years,” “entirely organic,” 24-hour response, globally available | Unverified or time-sensitive | Avoided in new copy |
| Testimonials attributed to @retrobollywood_, @poetrynyx, unnamed marketer | Original messages/consent not provided | Excluded |

## Portfolio material and links

- Creator projects: @sl6dl7 (poetry, literature, dark academia) and @shehzada.says (music and nostalgia); both linked from old homepage. The work is personal, not agency client campaigns.
- Old page includes stylized faux social cards for individual reels; they do not link to originals. These cards are not treated as real media.
- Six real @sl6dl7 original cover images and reel permalinks are visible on ProjectMonet.com's founder rail. The source images were copied unaltered from `Projectmonetspace/projectmonet-instagram/public/media/reel-proof/`, with source reel IDs `C093-LuKwqW`, `CzuANP0K5ML`, `C3xkNnAoWa_`, `CrodTefqiKm`, `CzpAg5nKgWc`, `CytnwFRq0c2`. The rail's creator attribution is founder work, not client work. Public reel metrics shown there are historical and intentionally omitted from the new site.
- Original source reel permalink pattern: `https://www.instagram.com/reel/<ID>/`. These are linked from the gallery.
- Existing contact: `contact@mayankharsh.space` (mailto). Old resume route `/mayank-harsh-resume.pdf` returns 200; PDF available from production but is not migrated without checking its claims for publication. New design does not link to it.
- Old social links: Instagram @sl6dl7 and @shehzada.says. No verified Twitter profile was found; the old `twitter:creator` handle is not carried over.
- Founder relationship to Project Monet corroborated by dedicated OS and the public About page at https://www.projectmonet.space/about and founder attribution at https://www.projectmonet.com/.

## Technical metadata

- Old title: “Mayank Harsh — Viral Trend Creator & Creative Director.” Meta description states 35M+ / 100K+ claims. Canonical: `https://mayankharsh.space`.
- `robots.txt` allows all and points at homepage sitemap. Sitemap claims lastmod `2026-05-11`, including fragment URLs. New sitemap lists only independently crawlable pages.
- Old OG uses `/og-image.jpg` with declared 1200×630; favicon `/favicon.jpg`. Schema script was present. The previous Google verification token is literally `your-google-verification-code`, so it must not be migrated.
- No visible third-party analytics script IDs in the HTML head. Scripts included Next.js chunks. This does not prove no analytics existed in dynamically loaded code.
- Existing homepage navigation used fragment links; fragment “redirects” are not possible at HTTP level. `#work`, `#about`, `#brief`, `#strategy`, `#contact` were kept as useful anchors in the redesign. The dated `#calendar` is retired.
- Existing production HTML and assets are hosted separately from the empty approved repository. No production integration settings can be inferred from the repository.

## Approval and open evidence items

- Confirm whether @shehzada.says has original media approved for a full indexed case study. Its documented draft route is `noindex` and omitted from the sitemap.
- Confirm exact counts, platform timeframes, first-party evidence and scopes if metrics are to be added. Source screenshots/URLs should be added to OS 07 before publication.
- Confirm the form and availability policy if a future contact form or availability language is desired. Current contact uses mailto only.
