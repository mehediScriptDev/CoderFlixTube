**Project**

- **Name:**: `coder-flix` (assignment-6)
- **Purpose:**: A small Next.js 14 app that lists videos from a local `videos.json`, renders a home grid, and provides per-video detail pages at `/video/{slug}` with SSG and per-video metadata.

**Features**

- **Home grid**: Renders video cards by mapping `src/app/videos.json`.
- **Dynamic detail pages**: Each video is available at `/video/{slug}` where `slug` is generated from `videoTitle`.
- **SSG / SEO**: Uses `generateStaticParams()` to pre-render video pages and `generateMetadata()` for per-video meta tags and Open Graph.
- **Favicon & icons**: `public/favicon.svg` included and referenced in route metadata.

**Tech Stack**

- **Framework**: Next.js (App Router, `app/` directory) — tested with Next.js 14.x.
- **Styling**: Tailwind CSS
- **Bundler / Runtime**: Node.js (use Node 18+ recommended)

**Quick Start (Local)**

- **Install deps**:

  ```bash
  npm install
  ```

- **Run dev server**:

  ```bash
  npm run dev
  ```

  Open `http://localhost:3000`.

- **Build for production (local test)**:

  ```bash
  rm -rf .next
  npm run build
  npm run start
  ```

**NPM scripts**

- **`npm run dev`**: Start the Next.js dev server.
- **`npm run build`**: Create an optimized production build (also runs lint by default if configured).
- **`npm run start`**: Start the production server after building.

**Project Structure (important files)**

- **`src/app/page.js`**: Home page – maps `videos.json` to video cards and links to detail pages.
- **`src/app/videos.json`**: Local data source; array of video objects (fields: `videoTitle`, `videoURL`, `thumbnailURL`, `categories`, `views`, `publishedDate`, `channelName`, `channelAvatar`, `duration`, `likes`, `dislikes`, `description`).
- **`src/app/video/[details]/page.jsx`**: Dynamic video detail page — loads `videos.json`, computes slug, finds matching video, and returns `notFound()` when missing.
- **`src/app/video/[details]/components/Video.jsx`**: Video player / embed component.
- **`src/app/video/[details]/components/Info.jsx`**: Title, channel and metadata display.
- **`src/app/video/[details]/components/SimilarVideos.jsx`**: Renders suggested videos by category similarity.
- **`src/app/video/layout.js`**: Route-level static metadata for `/video` to avoid `metadata` vs `generateMetadata` export conflicts.
- **`src/app/Components/CustomLink.jsx`**: Navigation wrapper (marked `use client` if it uses client hooks).
- **`public/favicon.svg`**: Favicon used in metadata icons.

**Routing & Data**

- The app uses the App Router. Video detail routes use the dynamic segment `src/app/video/[details]/page.jsx` where `details` is the slug generated from `videoTitle` using a `slugify()` helper.
- `generateStaticParams()` pre-generates each video page at build time. `generateMetadata()` returns per-video `title`, `description`, and Open Graph data.

**Notes, Known Issues & Recommendations**

- **Image optimization**: There are `img` elements in the project and Next.js currently warns about `@next/next/no-img-element`. Replace high-impact images (thumbnails, avatars) with `next/image` for better LCP and optimization. Provide `width`/`height` or use `fill` with a positioned parent.
- **Lint: `react/no-unescaped-entities`**: Some JSON-sourced text contains apostrophes which can trip `react/no-unescaped-entities`. Either escape/clean input or add targeted ESLint disables in components that render raw JSON text.
- **Metadata export rule**: Do not export both `metadata` and `generateMetadata` from the same file. Keep static metadata in `src/app/video/layout.js` and use `generateMetadata()` inside `page.jsx` for per-page metadata.
- **Stale build artifacts**: If you get runtime MODULE_NOT_FOUND errors referencing generated chunks, delete `.next` and rebuild: `rm -rf .next && npm run build`.

**Deploy (Vercel)**

- Push your changes to GitHub (or your Git remote) and create a new project on Vercel connected to the repo. Vercel will detect Next.js and run the build.
- If you see lint failures on Vercel (for example `react/no-unescaped-entities`), fix or add targeted ESLint exclusions, commit, and push to re-trigger the build.

**How to verify functionality**

- Home page: Verify video grid renders thumbnails and titles by reading `src/app/videos.json`.
- Detail pages: Click a card or open `http://localhost:3000/video/{slug}` directly — the page should be prerendered (SSG) and show video, info, and similar videos.
- Not Found: Open a non-existent slug to confirm `notFound()` renders the 404 behavior.

**Contribution & Next Steps**

- Convert `<img>` usages to `next/image` for performance improvements.
- Add unit/visual tests for components (Optional).
- Improve SimilarVideos ranking (e.g., weight by views or shared categories).

**License**

- This repository follows the licensing terms of the original assignment. Add a `LICENSE` file if you intend to open-source the project.

**Contact / Author**

- Maintainer: repository owner in this workspace.

---

If you want, I can:

- Convert the most important `<img>` usages to `next/image` now.
- Run the local build and confirm generated routes.
- Create a short deploy checklist and Vercel verification steps.

Tell me which of the above you'd like next.
