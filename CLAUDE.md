# OXEDGEN - Digital Marketing Agency Website

## 🚀 QUICK START: New Project Setup (A to Z)

**Copy this workflow for future projects:**

### 1. Initialize Project
```bash
npx create-next-app@14 project-name --typescript --tailwind --app --no-src-dir
cd project-name
```

### 2. Install Core Dependencies
```bash
npm install framer-motion react-icons clsx
npm install -D @types/node
```

### 3. Setup Design System
- Create `/lib/design-system.ts` - colors, spacing, typography
- Configure `tailwind.config.ts` - brand colors, fonts
- Setup `app/globals.css` - custom utilities, animations

### 4. Configure Fonts & Brand
- Add Google Fonts to `app/layout.tsx`
- Define brand colors in Tailwind config
- Create reusable CSS utilities (`.glass`, `.gradient-text`)

### 5. Build Core Components
```
/components
  ├── Navbar.tsx       # Navigation
  ├── Footer.tsx       # Footer with credits
  ├── Hero.tsx         # Landing section
  └── [Features].tsx   # Section components
```

### 6. Create Pages
```
/app
  ├── page.tsx         # Homepage
  ├── about/page.tsx
  ├── contact/page.tsx
  └── [other]/page.tsx
```

### 7. Pre-Deployment Checklist
```bash
npm run build        # Test build locally
npm run lint         # Fix ESLint errors
```
**Fix common issues:**
- Apostrophes: `don&apos;t` not `don't`
- Remove unused variables
- No anonymous exports

### 8. Deploy
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create project-name --public --source=. --push
```
Then: Vercel Dashboard → Import → Deploy

**Total time: ~30 minutes for full setup** ⚡

---

## PROJECT OVERVIEW

**OXEDGEN** is a modern digital marketing agency website designed for B2B lead generation. The site features cutting-edge design with 3D elements, smooth animations, and integrated form handling via Airtable for CRM management.

**Status:** ✅ Live - Deployed to Production
**Started:** February 15, 2026
**Deployed:** February 15, 2026
**Primary Goals:**
- High-converting B2B lead generation
- Modern, engaging user experience with 3D elements
- Fast performance (<2s load, 90+ Lighthouse score)
- Secure form handling and data management

---

## TECHNOLOGY STACK

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** React Three Fiber + Drei
- **Deployment:** Vercel (planned)

### Backend/Data
- **Form Handling:** Airtable API
- **CRM:** Airtable Base ("OXEDGEN Leads")
- **API Routes:** Next.js API Routes (for secure server-side operations)

### Development Tools
- **Node.js:** v18.20.4
- **NPM:** v10.7.0
- **Git:** Version control enabled
- **ESLint:** Code quality
- **TypeScript:** Type safety

### Installed Libraries
```json
{
  "dependencies": {
    "framer-motion": "^12.34.0",
    "@react-three/fiber": "^9.5.0",
    "@react-three/drei": "^10.7.7",
    "three": "latest",
    "react-intersection-observer": "latest"
  }
}
```

---

## PROJECT STRUCTURE

```
/oxedgen/
├── app/                          # Next.js app directory (App Router)
│   ├── page.tsx                 # ✅ Homepage (placeholder ready)
│   ├── layout.tsx               # ✅ Root layout with Navbar/Footer
│   ├── globals.css              # ✅ Global styles + brand colors
│   ├── fonts/                   # Geist fonts
│   ├── solutions/
│   │   └── page.tsx             # ✅ Solutions page (placeholder)
│   ├── about/
│   │   └── page.tsx             # ✅ About page (placeholder)
│   ├── insights/
│   │   └── page.tsx             # ✅ Insights/blog page (placeholder)
│   └── contact/
│       └── page.tsx             # ✅ Contact page (placeholder)
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # ✅ Navigation with mobile menu
│   ├── Footer.tsx               # ✅ Footer with links + social
│   └── ContactForm.tsx          # ✅ B2B lead form (Airtable ready)
├── lib/                         # Utility functions
│   ├── design-system.ts         # ✅ Centralized design variables
│   └── airtable.ts              # ✅ Airtable integration + validation
├── public/
│   └── logo.png                 # ✅ OXEDGEN logo
├── .env.example                 # ✅ Environment variables template
├── tailwind.config.ts           # ✅ Tailwind with brand colors
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
└── CLAUDE.md                    # This file
```

---

## BRAND GUIDELINES

### ✅ Colors (IMPLEMENTED)

**From Logo & Original Website:**
```typescript
// Primary brand colors
navy: '#0e1c24'      // Main background
cyan: '#42bdef'      // Primary accent (from logo)
darkGray: '#222222'  // Secondary elements
white: '#ffffff'     // Text

// Usage in Tailwind:
bg-brand-navy
text-brand-cyan
border-brand-darkGray
```

**Gradients Available:**
- Primary: `linear-gradient(135deg, #42bdef 0%, #0ea5e9 100%)`
- Accent: `linear-gradient(135deg, #42bdef 0%, #7c3aed 100%)` (cyan to purple)
- Mesh: Complex radial gradients for backgrounds

**Location:** `/lib/design-system.ts` - Import colors from here

### ✅ Logo (IMPLEMENTED)
- **File:** `/public/logo.png`
- **Design:** Blue geometric pinwheel icon + "OXEDGEN" text
- **Colors:** Cyan blue gradient
- **Style:** Modern, tech-forward

### Typography
- **Heading Font:** Geist Sans (variable weight)
- **Body Font:** Geist Sans
- **Mono Font:** Geist Mono
- **Sizes:** Defined in `/lib/design-system.ts` (xs to 8xl)

---

## DESIGN SYSTEM

### ✅ Centralized Variables (`/lib/design-system.ts`)

**Import and use throughout the app:**
```typescript
import { colors, spacing, typography, animations } from '@/lib/design-system';

// Example usage:
<div style={{ color: colors.brand.cyan }}>
```

**Available variables:**
- `colors` - Brand colors, gradients, semantic colors, opacity variations
- `spacing` - xs to 5xl, section spacing, container padding
- `typography` - Font families, sizes, weights, line heights
- `animations` - Durations, easing, Framer Motion variants, transitions
- `breakpoints` - Responsive breakpoints
- `shadows` - Standard shadows + glassmorphism effects
- `borderRadius` - Border radius scales
- `zIndex` - Z-index management

### Custom Tailwind Utilities

**Glassmorphism:**
```html
<div class="glass">
  <!-- Frosted glass effect with blur and transparency -->
</div>
```

**Gradient Text:**
```html
<h1 class="gradient-text">
  <!-- Cyan to purple gradient text -->
</h1>
```

---

## PAGES & CONTENT STRUCTURE

### ✅ Pages Created (All Placeholders - Ready for Development)

1. **Home (`/`)** - Homepage
   - Placeholder: "OXEDGEN" branding displayed
   - To build: Hero, About, Services, Stats, FAQ, Clients, CTA

2. **Solutions (`/solutions`)** - Services overview
   - Placeholder ready
   - To build: Service grid, detailed service pages

3. **About (`/about`)** - Company information
   - Placeholder ready
   - To build: Team, mission, values, story

4. **Insights (`/insights`)** - Blog/articles
   - Placeholder ready
   - To build: Blog listing, article pages

5. **Contact (`/contact`)** - Contact form
   - Placeholder ready
   - To build: ContactForm component integration, map, info

### Homepage Sections (From Original Site Analysis)

**To be developed:**
1. Hero Section
   - Headline + subheadline
   - 2 CTAs ("Unleash Your Potential", "Learn More")
   - **3D element:** Floating geometric shapes (React Three Fiber)

2. About Section
   - Agency intro
   - Location: Rabat, Morocco
   - Experience highlights

3. Services Grid
   - 7 services with icons:
     - Web Design
     - Graphics Design
     - Digital Strategy
     - Media Buying
     - Copywriting
     - SEO
     - Photography
   - **Modern touch:** Glassmorphism cards with 3D tilt on hover

4. Stats Counters
   - Years Experience
   - Generated Revenue
   - Happy Clients
   - **Animation:** Count up on scroll into view

5. FAQ Accordion
   - 6 questions about digital marketing
   - **Animation:** Smooth expand/collapse

6. Client Logos ("Trusted By")
   - Showcase partner brands
   - **Animation:** Fade in on scroll

7. Final CTA Banner
   - "Ready to Boost Your Digital Growth?"
   - "Let's Talk" button

---

## CONTACT FORM & AIRTABLE SETUP

### ✅ Form Component Created (`/components/ContactForm.tsx`)

**Fields:**
- Full Name (required)
- Email (required)
- Company Name (required)
- Phone (optional)
- Message (required)

**Features:**
- Form validation (client-side)
- Loading states ready
- Error handling ready
- Success messages ready

### ✅ Airtable Integration Ready (`/lib/airtable.ts`)

**Setup Required from Owner:**

1. **Create Airtable Account** (free tier)
   - Go to [airtable.com](https://airtable.com)
   - Sign up for free account

2. **Create Base**
   - Name: "OXEDGEN Leads"
   - Create table: "Leads"

3. **Table Fields:**
   - Name (Single line text)
   - Email (Email)
   - Company (Single line text)
   - Phone (Phone number)
   - Message (Long text)
   - Created (Created time) - auto field

4. **Get Credentials:**
   - **API Key:** airtable.com/account
   - **Base ID:** From API docs or base URL
   - **Table Name:** "Leads"

5. **Add to `.env.local` file:**
   ```env
   AIRTABLE_API_KEY=your_key_here
   AIRTABLE_BASE_ID=your_base_id_here
   AIRTABLE_TABLE_NAME=Leads
   ```

**Security Features:**
- ✅ Server-side submission only
- ✅ Input validation & sanitization
- ✅ Environment variables (never exposed to client)
- ⏳ Rate limiting (placeholder ready)

---

## MODERN FEATURES PLANNED

### 3D & Visual Effects
- [x] React Three Fiber installed
- [ ] 3D floating shapes in hero section
- [ ] Interactive 3D model on about page
- [ ] Particle effects on hover (optional)

### Animations
- [x] Framer Motion installed
- [ ] Page transition animations
- [ ] Scroll-triggered animations (fade in, slide in)
- [ ] Animated counters for stats
- [ ] Smooth accordion for FAQ
- [ ] Hover effects on cards/buttons

### Glassmorphism
- [x] CSS utility created (`.glass`)
- [ ] Apply to service cards
- [ ] Use in modal overlays
- [ ] Navbar backdrop blur

### Interactive Elements
- [ ] Magnetic buttons (follow cursor)
- [ ] 3D tilt effect on service cards
- [ ] Parallax scrolling backgrounds
- [ ] Smooth scroll to sections
- [ ] Custom cursor (optional)

### Performance Optimizations
- [ ] Lazy load 3D components (Intersection Observer)
- [ ] Dynamic imports for heavy components
- [ ] Image optimization (Next.js Image)
- [ ] Code splitting per route
- [ ] Minimize bundle size

### Security
- [ ] CSRF protection
- [ ] Rate limiting on forms
- [ ] Input sanitization
- [ ] Security headers (Next.js config)
- [ ] HTTPS enforcement (Vercel auto)

---

## DEVELOPMENT WORKFLOW

### Running the Development Server

```bash
npm run dev
# Runs at http://localhost:3000
```

### Building for Production

```bash
npm run build   # Test build
npm start       # Run production build locally
```

### Linting

```bash
npm run lint
```

### Code Standards

- **TypeScript:** Strict mode enabled
- **ESLint:** Configured with Next.js rules
- **Styling:** Tailwind utility-first approach
- **Components:** Functional components with TypeScript types
- **Imports:** Use `@/` alias for absolute imports
- **Responsiveness:** Mobile-first design

### File Naming Conventions

- **Components:** PascalCase (`Navbar.tsx`, `ContactForm.tsx`)
- **Pages:** lowercase (`page.tsx`, `layout.tsx`)
- **Utilities:** camelCase (`design-system.ts`, `airtable.ts`)
- **CSS:** kebab-case if needed

---

## DEPLOYMENT

### ⚠️ CRITICAL: Pre-Deployment Checklist

**ALWAYS run these commands BEFORE pushing to GitHub:**

```bash
# 1. Test build locally (catches ESLint errors)
npm run build

# 2. Check for linting issues
npm run lint

# 3. Fix any errors, then commit
git add .
git commit -m "Your message"
git push
```

### Common ESLint Errors & Fixes

**1. Unescaped Apostrophes in JSX**
```jsx
❌ BAD:  <p>Don't do this</p>
✅ GOOD: <p>Don&apos;t do this</p>
```

**2. Unused Variables**
```tsx
❌ BAD:  function Component({ value, unusedProp }: Props)
✅ GOOD: function Component({ value }: Props)
```

**3. Anonymous Default Exports**
```ts
❌ BAD:  export default { colors, spacing };
✅ GOOD: const theme = { colors, spacing }; export default theme;
```

### Vercel Deployment (Recommended)

**Status:** ✅ Deployed at https://github.com/Le-Yoy/oxedgen-website

**First-Time Deployment (Use Dashboard - Easier):**

1. **Push to GitHub:**
   ```bash
   # Create repo and push
   gh repo create project-name --public --source=. --remote=origin --push
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy" (auto-detects Next.js)
   - Add environment variables if needed

3. **Add Environment Variables (if needed):**
   - Vercel Dashboard → Project Settings → Environment Variables
   - Add: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_NAME`

**Subsequent Deployments:**
- Auto-deploys on push to `main` branch
- Preview deployments for other branches
- No manual action needed

**Alternative: Vercel CLI (Requires Login)**
```bash
# Only if you prefer CLI (requires browser login)
vercel login
vercel --prod
```

### Deployment Workflow (Best Practice)

```bash
# 1. Test locally
npm run build

# 2. Fix any errors

# 3. Commit & push
git add .
git commit -m "Feature: description"
git push

# 4. Vercel auto-deploys (if connected)
# Or manually deploy via dashboard
```

**Performance Targets:**
- ⚡ Load Time: <2 seconds
- 📱 Mobile Responsive: 100%
- ♿ Accessibility: WCAG 2.1 AA
- 🔍 SEO: Optimized meta tags
- 🚀 Lighthouse: 90+ across all metrics

### Troubleshooting Deployment Issues

**Build Fails on Vercel:**
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Fix ESLint errors (see common errors above)
4. Push fixes, Vercel will auto-redeploy

**Environment Variables Not Working:**
1. Ensure variables are added in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match `.env.example`

---

## PENDING DECISIONS & NEXT STEPS

### 🔴 High Priority - Needed Before Development

- [ ] **Content for each section** (headlines, body copy)
- [ ] **Service descriptions** (for each of 7 services)
- [ ] **Images/graphics** (service icons, backgrounds)
- [ ] **Client logos** (if using "Trusted By" section)
- [ ] **Airtable credentials** (API key, Base ID)
- [ ] **Social media links** (Facebook, Instagram, LinkedIn, etc.)
- [ ] **Contact info** (email, phone, WhatsApp)

### 🟡 Medium Priority - Can Be Added Later

- [ ] FAQ questions and answers
- [ ] Blog/insights content
- [ ] Team photos (if showing team)
- [ ] Case studies/portfolio items
- [ ] Testimonials (if using)

### 🟢 Low Priority - Optional Features

- [ ] Google Analytics tracking code
- [ ] Live chat integration
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Career page functionality

---

## CURRENT BUILD STATUS

### ✅ Completed Setup

- [x] Next.js 14 project initialized
- [x] TypeScript configured
- [x] Tailwind CSS configured with brand colors
- [x] All page routes created (Home, Solutions, About, Insights, Contact)
- [x] Navbar component (responsive, mobile menu)
- [x] Footer component (links, social icons)
- [x] ContactForm component (validation ready)
- [x] Airtable integration code (ready for credentials)
- [x] Design system with centralized variables
- [x] Logo added to project
- [x] Framer Motion installed
- [x] React Three Fiber + Drei installed
- [x] Custom Tailwind utilities (glass, gradient-text)
- [x] Custom scrollbar styling
- [x] Environment variables template (`.env.example`)
- [x] Build successful (no errors)
- [x] CLAUDE.md documentation

### ⏳ Ready for Development

**All infrastructure is in place. Next steps:**

1. **Owner provides:** Content, images, Airtable credentials
2. **Development:** Build out homepage sections with modern features
3. **Testing:** Performance, accessibility, security
4. **Deploy:** Push to Vercel

---

## DESIGN PHILOSOPHY

### Speed + Security Focus

**Performance:**
- Minimize JavaScript bundle size
- Lazy load 3D components (only when visible)
- Use CSS animations where possible (lighter than JS)
- Optimize images with Next.js Image component
- Code split by route
- GPU-accelerated transforms (not layout shifts)
- Vercel Edge CDN for global delivery

**Security:**
- Environment variables for all sensitive data
- Server-side API routes only (no client-side API calls)
- Input validation and sanitization
- Rate limiting on form submissions (to implement)
- CORS protection
- Security headers in Next.js config
- HTTPS enforced (Vercel automatic)

### Modern But Fast

**Balance beautiful design with performance:**
- Use 3D sparingly (hero section primarily)
- Framer Motion for optimized animations
- Glassmorphism with CSS (not heavy JS)
- Intersection Observer for scroll animations
- Fallbacks for low-end devices

---

## IMPORTANT NOTES FOR CLAUDE CODE

### When Continuing Work on This Project:

1. **Check this CLAUDE.md first** - All context is here
2. **Import from design system** - Use `/lib/design-system.ts` for all colors, spacing, etc.
3. **Use Tailwind brand colors** - `bg-brand-navy`, `text-brand-cyan`, etc.
4. **Lazy load heavy components** - Especially 3D elements
5. **Mobile-first responsive** - Test on mobile breakpoints
6. **TypeScript strict** - Type all props and functions
7. **Performance monitoring** - Keep bundle size in check
8. **Security first** - Never expose API keys or sensitive data

### Development Guidelines:

- **Ask before making design decisions** - Owner approval needed
- **Use existing components** - Check `/components` before creating new ones
- **Follow design system** - Don't hardcode colors or spacing
- **Test builds frequently** - `npm run build` to catch errors early
- **Document new features** - Update this CLAUDE.md as project evolves

### Common Tasks:

**Adding a new page:**
```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

**Creating a component:**
```bash
touch components/NewComponent.tsx
```

**Importing design variables:**
```typescript
import { colors, spacing } from '@/lib/design-system';
```

**Using Framer Motion:**
```typescript
import { motion } from 'framer-motion';
import { animations } from '@/lib/design-system';

<motion.div
  variants={animations.variants.fadeInUp}
  initial="initial"
  animate="animate"
>
```

---

## PROJECT GOALS SUMMARY

### Primary Objective
Create a **modern, high-performing B2B lead generation website** that:
- Captures leads effectively (Airtable integration)
- Engages visitors (3D elements, animations)
- Loads fast (<2s, 90+ Lighthouse)
- Stays secure (input validation, env vars)
- Converts visitors to customers

### Success Metrics
- ✅ **Technical:** Build completes without errors
- ⏳ **Performance:** <2s load time, 90+ Lighthouse score
- ⏳ **Security:** No exposed credentials, validated inputs
- ⏳ **Conversion:** Form submissions to Airtable working
- ⏳ **User Experience:** Smooth animations, responsive design

---

## VERSION HISTORY

### v0.2.0 - February 15, 2026 (Current)
- ✅ Complete project setup and infrastructure
- ✅ All libraries installed (Framer Motion, React Three Fiber, Drei)
- ✅ All pages created with placeholders
- ✅ Navbar and Footer components built
- ✅ ContactForm component ready
- ✅ Airtable integration code ready
- ✅ Design system with centralized variables
- ✅ Brand colors extracted and implemented
- ✅ Logo added
- ✅ Build successful
- ✅ Ready for frontend development

### v0.1.0 - February 15, 2026
- ✅ Next.js 14 project initialized
- ✅ TypeScript + Tailwind configured
- ✅ Directory structure created
- ✅ Initial CLAUDE.md created

---

## OWNER CONTACT & PREFERENCES

- **Working Directory:** `/Users/almostaphasmart/Desktop/marketing-agency-workspace/oxedgen`
- **Preference:** Ask before implementing design decisions
- **Workflow:** Setup complete → Owner provides content → Develop frontend → Deploy
- **Priority:** Speed, security, and modern engaging design

---

**Last Updated:** February 15, 2026
**Project Status:** ✅ Infrastructure Complete - Ready for Content & Development
**Next Action:** Owner to provide content, images, and Airtable credentials
