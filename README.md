# Obinna Okeke - Personal Portfolio

A production-grade, multi-page personal portfolio website built with Next.js 14+ (App Router), Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Tech Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animation:** Framer Motion for page/scroll transitions and magnetic cursor
- **3D Hero:** `@react-three/fiber` + `@react-three/drei` (lazy-loaded, respects `prefers-reduced-motion`)
- **Forms:** Resend via Next.js Route Handlers + `react-hook-form` + `zod`
- **Icons:** `lucide-react`
- **Fonts:** Space Grotesk (display) and Inter (body)
- **SEO:** `next-sitemap` for automated sitemap and robots.txt

## Local Setup

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root directory (refer to `.env.example`).
   ```env
   RESEND_API_KEY="your_resend_api_key_here"
   CONTACT_DESTINATION_EMAIL="your_email@example.com"
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

5. **Linting:**
   ```bash
   npm run lint
   ```

## Assumptions & Design Choices (Logged for Review)

As requested during the build process, several assumptions were made to ensure a premium, production-ready outcome:

- **Color Palette & Theming:** Implemented a dark-first theme with a fully working light mode. Both themes share the core `#00e8a2` (emerald/mint) accent color. Backgrounds use `zinc` grays (`#09090b` for dark, `#fafafa` for light).
- **Design Tokens:** Tokens for spacing, typography, radii, and shadows are strictly defined in `globals.css` using Tailwind v4's `@theme` directive.
- **3D Hero Scene:** A stylized, low-poly developer desk is implemented using three.js primitives to guarantee high performance and fast load times. A fallback static image/container is presented to users with `prefers-reduced-motion` enabled.
- **Form Handling:** Formspree was bypassed in favor of Resend. This keeps the logic entirely in-repo within a Next.js Route Handler, providing a more robust, server-validated experience.
- **Content Placeholders:** Data in `src/content/` (projects, certs, personal info) uses explicit `null` values for missing URLs. The UI gracefully handles these by rendering disabled "Coming Soon" buttons rather than fabricated `#` links.

## Deployment (Vercel)

This project is optimized for a zero-config Vercel deployment.

1. Push your code to a GitHub repository.
2. Import the project in your Vercel dashboard.
3. Add the following Environment Variables in Vercel before deploying:
   - `RESEND_API_KEY`
   - `CONTACT_DESTINATION_EMAIL`
4. Deploy! `next-sitemap` will automatically run post-build to generate `sitemap.xml`.

## To-Do Before Launch
- Review all files in `src/content/` and replace placeholders (e.g., email, GitHub links, exact dates) with real data.
- Add real screenshot images for projects in `public/` and update `projects.ts` accordingly.
- Replace `/public/resume.pdf` with the actual file.
