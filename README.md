# Umang Shrivastava — Executive Privacy/TPM Portfolio Site

Phase 1 of a personal site built for Principal PM / Principal TPM / Director /
Privacy Product / Enterprise Architecture leadership interviews. Next.js 16
(App Router), TypeScript, Tailwind CSS v4, Framer Motion, statically exported
for GitHub Pages — no backend, no paid services.

Pages: Home, Experience, Case Studies (+ 4 detail pages), Resume, Contact.

## Before you publish — personalize these

Search the codebase for `PERSONALIZE` to find every spot that needs your
real input. The main ones:

1. **`src/content/site.ts`** — real email, LinkedIn, GitHub, scheduling
   link, and `siteUrl` (see "Choosing where this lives" below).
2. **`src/content/caseStudies.ts`** — the `architecture`, `decisions`,
   `tradeoffs`, and `lessons` fields are scoped to what's on record. Tighten
   these with real specifics before this goes live — a recruiter reading
   "Architecture" wants the actual shape of the system, not a paragraph that
   could describe any program.
3. **`public/resume.pdf`** — drop your real resume PDF here (replace
   `public/resume-PLACEHOLDER.txt`, which is just a reminder marker — delete
   it once the real PDF is in place). The `/resume` page's download button
   points to `/resume.pdf`.
4. **Contact form** — `src/components/ContactForm.tsx` posts to Formspree.
   Sign up free at formspree.io, create a form, and replace `YOUR_FORM_ID`.
   Or delete the form entirely and rely on the mailto/LinkedIn buttons.

No fake content was added anywhere — sections without real data yet are
marked `PERSONALIZE` rather than filled with plausible-looking placeholders
(no fake testimonials, no invented metrics).

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build       # static export to ./out, plus a postbuild step
                     # that guarantees out/.nojekyll exists
```

## Choosing where this lives

**Option A — `https://yourusername.github.io` (root, simplest)**
- Repo must be named exactly `yourusername.github.io`
- Leave `next.config.ts` as-is (no basePath needed)
- Set `siteUrl` in `src/content/site.ts` to `https://yourusername.github.io`

**Option B — `https://yourusername.github.io/repo-name` (project page)**
- Repo can be named anything
- In `next.config.ts`, uncomment the `basePath`/`assetPrefix` lines and set
  them to `/repo-name` — otherwise every internal link and static asset
  (CSS, JS, images) will 404 in production while looking fine locally
- Set `siteUrl` in `src/content/site.ts` to the full subpath URL

**Option C — custom domain (e.g. `yourname.com`)**
- Add a `public/CNAME` file containing just your domain, one line, no protocol
- Leave `next.config.ts` basePath commented out (same as Option A)
- Point your domain's DNS to GitHub Pages per GitHub's custom domain docs
- Set `siteUrl` in `src/content/site.ts` to `https://yourname.com`

## GitHub repository setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## GitHub Pages configuration

1. Repo → **Settings → Pages**
2. Under "Build and deployment," set **Source** to **GitHub Actions**
   (not "Deploy from a branch" — the included workflow handles the build)
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds
   and deploys automatically
4. First deploy can take a few minutes; check the **Actions** tab for status

The workflow already touches `out/.nojekyll` as a safety net even though
`public/.nojekyll` should carry through on its own — GitHub Pages runs
Jekyll by default, which silently drops any folder starting with an
underscore (Next's `_next` assets), breaking the whole site if missed.

## What's intentionally deferred to Phase 2/3

- **Architecture Gallery, AI & Privacy, Leadership Philosophy pages** — add
  once Phase 1 content is fully real; shipping a tight 5-page site beats a
  10-page site with thin content while you're actively interviewing.
- **Blog** — only add once you have 2+ real posts drafted. An empty or
  single-post blog reads worse than no blog at all.
- **Testimonials** — deliberately omitted. A placeholder testimonials
  section with fake quotes undermines trust faster than it builds it. Add a
  real one once you have 2-3 actual LinkedIn recommendations to use.

## Stack notes

- Tailwind v4 uses CSS-first config — design tokens live in
  `src/app/globals.css` under `@theme`, not in a `tailwind.config.js`.
- Dark/light theme via `next-themes`, defaulting to system preference,
  toggle in the nav. Light theme overrides the same CSS variables under
  `[data-theme="light"]`.
- `output: "export"` means no API routes, no Image Optimization API, no
  middleware, no ISR — all by design, since there's no server.
