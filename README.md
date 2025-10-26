# Lookinglass Website

A modern, static marketing website for **Lookinglass**, a powerful iOS app for accessing OpenAI's AI models with complete transparency and control. Built with semantic HTML5, responsive CSS, and optimized for performance and SEO.

> This README documents the structure, content strategy, and maintenance procedures for the Lookinglass public website—so you (or your team) can make updates confidently and consistently.

---

## Table of Contents

### Overview
- [Purpose & Audience](#purpose--audience)
- [Technology Stack](#technology-stack)
- [Site Structure](#site-structure)

### Content Management
- [Page Descriptions](#page-descriptions)
- [Content Sources of Truth](#content-sources-of-truth)
- [Key Terminology](#key-terminology)
- [Update Procedures](#update-procedures)

### Development
- [Local Development](#local-development)
- [Image Optimization](#image-optimization)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)

### Reference
- [Recent Updates](#recent-updates)
- [Content Guidelines](#content-guidelines)
- [Troubleshooting](#troubleshooting)

---

## Purpose & Audience

### Primary Goals
1. **Convert visitors to app users** - Clear value proposition and download path
2. **Educate users** - Explain AI models, pricing, and features before download
3. **Build trust** - Transparent pricing, privacy commitments, and feature details
4. **Support existing users** - FAQ, model guides, and detailed documentation

### Target Audiences
- **Prospective users** researching AI chat apps
- **Current users** seeking model information and pricing details
- **Privacy-conscious users** evaluating data security and iCloud sync
- **Power users** wanting technical details and advanced features
- **App store visitors** following the "Website" link from the iOS App Store

---

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript** - Minimal JS for progressive enhancement
- **GitHub Pages** - Static site hosting with automatic deployment

### Features
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **SEO Optimized** - Semantic HTML, meta tags, structured data (JSON-LD)
- **Performance** - Fast load times, optimized assets, minimal dependencies
- **Accessibility** - WCAG 2.1 compliant with semantic markup and ARIA labels
- **Privacy Focused** - No tracking scripts, no cookies, no third-party analytics

---

## Site Structure

```
lookinglass-website/
├── 📄 index.html              # Homepage - Hero, features, CTA
├── 📄 pricing.html            # Pricing comparison and model costs
├── 📄 models.html             # Complete AI model guide
├── 📄 guide.html              # App usage guide - Chat & threads
├── 📄 privacy.html            # Privacy policy and data practices
├── 📄 faq.html                # Frequently asked questions
├── 📄 faq.schema.json         # Structured data for search engines
├── 🗂️ css/                   # Stylesheets (if separate)
├── 🗂️ images/                # Images and assets
├── 🗂️ js/                    # JavaScript files (if any)
└── 📄 README.md              # This file
```

### Page Flow
```
App Store → index.html → pricing.html → models.html
                      ↓
                  guide.html → faq.html → privacy.html
```

---

## Page Descriptions

### `index.html` - Homepage
**Purpose**: Convert visitors with clear value proposition and feature overview

**Key Sections**:
- **Hero**: Main value proposition (21 AI models, transparent pricing, privacy-first)
- **Badges**: Quick stats (21 models, 5 languages, pay-as-you-go)
- **Features Grid**: Core features with icons and descriptions
  - 21 OpenAI models (14 ChatGPT, 7 O-series)
  - Transparent pricing with real-time cost estimates
  - Privacy-first (local storage + optional iCloud sync)
  - Advanced controls (spending protection, smart savings)
  - Global accessibility (5 languages, voice-to-text)
- **App Gallery**: Screenshots with feature highlights
- **Who Uses Section**: Use cases and privacy commitments
- **CTA**: Download links and welcome bonus ($1 free credit)

**SEO Keywords**: AI chat, OpenAI models, ChatGPT, pay-as-you-go, privacy-first, iOS app

### `pricing.html` - Pricing & Plans
**Purpose**: Clear pricing comparison and cost transparency

**Key Sections**:
- **Comparison Table**: Pay-as-you-go vs subscription services
  - Model access (21 models vs limited)
  - Pricing transparency (exact costs vs hidden)
  - Control level (full vs automatic)
  - Cost guard protection
- **Why Pay-as-You-Go**: Benefits of usage-based pricing
- **Model Pricing**: Link to detailed model guide
- **FAQ**: Common pricing questions

**Unique Value**: Transparent cost comparison showing exactly what you pay vs competitors' subscription models

### `models.html` - AI Model Guide
**Purpose**: Comprehensive model reference for technical users

**Key Sections**:
- **Understanding the Basics**: Foundational concepts
  - What are tokens? (1 token ≈ 4 characters, 100 tokens ≈ 75 words)
  - How pricing works (tokens × rate = cost)
  - AI workspace (context window explanation)
- **Chat Models (14 Available)**:
  - **gpt-5 series (5 models)**: Advanced reasoning, 400K context (gpt-5-chat-latest: 128K)
  - **gpt-4o series (3 models)**: Multimodal capabilities, 128K context
  - **gpt-4.1 series (3 models)**: Massive 1M token context window
  - **gpt-4 legacy (2 models)**: Stable production models
  - **gpt-3.5 series (1 model)**: Cost-effective option
- **O-Series Reasoning Models (7 Available)**:
  - **o3 series**: Advanced reasoning with AI power levels
  - **o1 series**: Research-grade reasoning
  - **o4-mini**: Efficient reasoning for common tasks
- **Choosing the Right Model**: Use case recommendations
  - Quick questions → gpt-5-nano (smart savings)
  - Daily tasks → gpt-4o
  - Complex analysis → o3 (standard power)
  - Mission-critical → o3-pro (ultimate power)
- **Advanced Settings**: Feature explanations
  - Creativity level (temperature control)
  - AI power level (reasoning effort)
  - Response detail level (verbosity)
  - Billing plan (fast & reliable vs smart savings)

**Content Strategy**: Match app terminology exactly (lowercase model names, "smart savings" vs "flex", "spending protection" vs "cost guard")

### `guide.html` - App Usage Guide
**Purpose**: Teach users how to use the core features of Lookinglass for daily interaction

**Key Sections**:
- **Getting Started**: Sign in with Apple vs. continue as guest
- **Chat Interface**: Screen layout, top bar controls, chat history
  - Input bar (microphone, text field, send button)
  - Cost bar (token breakdown, max cost, info icon, pricing icon)
  - Pricing sheet (view all model prices, toggle billing plan: fast & reliable vs smart savings)
  - Token composition (input: prompt + context + permanent memory; output: response + reasoning)
  - Switching models mid-conversation
  - Message actions (long-press: copy, share, info, forward with multi-select)
- **Thread Management**: Thread list, creating/organizing/deleting threads
  - Rename, pin, copy threads
  - Search functionality
  - Delete single or all threads (ellipsis menu with refresh for multi-device)
- **Exporting Conversations**: Export formats (markdown, plaintext, JSON)
  - How to export threads
  - Forward feature for selecting specific messages
- **Voice Input**: First-time setup (microphone & speech recognition permissions)
  - Uses device's native speech recognition (Apple)
  - Tips for best results

**Purpose**: Fills the gap between "what features exist" (FAQ) and "how do I use them daily" - focuses on chat interface and thread management without duplicating settings/configuration content

### `privacy.html` - Privacy Policy
**Purpose**: Build trust with transparent data practices

**Key Sections**:
- **What We Collect**: Minimal data collection (email, Apple ID, device info)
- **What We Don't Collect**: No conversation storage, no analytics, no third-party tracking
- **iCloud Sync & Your Data**: 
  - Optional iCloud integration
  - Data stays in YOUR personal iCloud account
  - Lookinglass has NO access to your iCloud data
  - Apple manages encryption, not us
- **Data Security**: Local AES-256 encryption, end-to-end sync
- **OpenAI Privacy**: Their data usage policy, 30-day retention (Zero Data Retention for eligible customers)
- **Your Rights**: Data deletion, export, and control

**Key Message**: "Your data stays on your device or in your personal iCloud. We can't see your conversations—ever."

### `faq.html` - Frequently Asked Questions
**Purpose**: Answer common questions and reduce support burden

**Categories**:
1. **Pricing & Payments**
   - How does pay-as-you-go work?
   - Do you offer free credits? ($1 welcome bonus)
   - What is spending protection?
2. **Models & Features**
   - Which models are included? (21 total: 14 ChatGPT, 7 O-series)
   - Can I use different models in different conversations?
   - How do I control AI memory? (Smart memory: 500 tokens minimum, adjustable in 500-token increments)
3. **Privacy & Security**
   - Is my data private? (Local-first, optional iCloud sync in YOUR account)
   - Can you see my conversations? (No, never)
4. **Technical**
   - Which devices are supported? (iOS 17+, iPhone & iPad)
   - Does it work offline? (No, requires internet for AI responses)
   - Can I use voice input? (Yes, 5 languages supported)

### `faq.schema.json` - Structured Data
**Purpose**: Help search engines display rich FAQ snippets in search results

**Format**: JSON-LD schema following [Schema.org FAQPage](https://schema.org/FAQPage) specification

**Benefits**:
- Rich snippets in Google search results
- Improved SEO visibility
- Better click-through rates from search

---

## Content Sources of Truth

### iOS App Code (Primary Source)
The website content should **always match** the iOS app's actual capabilities. Key files:

1. **`ModelCatalog.swift`** - Complete model definitions
   - Model IDs, display names, families
   - Token limits (maxTokens, maxOutputTokens, softCapMaxInputTokens)
   - Capabilities (temperature, reasoning, verbosity, streaming)
   - Use this to verify model counts and capabilities

2. **`Pricing.swift`** - Pricing logic and calculations
   - Base OpenAI pricing per 1M tokens
   - Lookinglass markup (2.5x default, server override possible)
   - Smart savings (Flex) pricing (50% off on select models)
   - Use this to calculate "starting from" prices on website

3. **`SettingsStore.swift`** - Feature terminology
   - Exact names of settings as shown in app
   - Default values and ranges
   - Use this to match website terminology to app

4. **`Localizable.xcstrings`** - User-facing strings
   - Copy for features and explanations
   - Use this to maintain consistent messaging

### Website Content Strategy
- **Mirror app terminology exactly** - Don't invent new names
- **Use lowercase for model names** - Matches app display (e.g., "gpt-5-pro" not "gpt-5-pro")
- **Sync with app releases** - Update website when app adds new models
- **Verify pricing calculations** - Use Pricing.swift markup to calculate costs

---

## Key Terminology

### Current App Terminology (Use These)
| Website Should Say | Not | Context |
|-------------------|-----|---------|
| smart savings | Flex | Billing plan with 50% off |
| spending protection | cost guard | Feature name |
| spending alerts | cost guard alerts | Settings toggle |
| AI power level | effort level | Reasoning models setting |
| creativity level | temperature | GPT models parameter |
| response detail level | verbosity | gpt-5 models setting |
| fast & reliable | standard | Billing plan without discount |
| 21 models | 19 models | Total count (as of current update) |
| 14 ChatGPT models | 12 Chat models | ChatGPT family count |
| gpt-5-pro | gpt-5-pro | Use lowercase model names |
| chatgpt-4o-latest | ChatGPT-4o-Latest | Use lowercase model names |

### Model Families & Counts
- **ChatGPT Models (14 total)**:
  - gpt-5 series (5 models): gpt-5-chat-latest, gpt-5, gpt-5-mini, gpt-5-nano, gpt-5-pro
  - gpt-4o series (3 models): gpt-4o, gpt-4o-mini, chatgpt-4o-latest
  - gpt-4.1 series (3 models): gpt-4.1, gpt-4.1-mini, gpt-4.1-nano
  - gpt-4 legacy (2 models): gpt-4 (8K), gpt-4-turbo (128K)
  - gpt-3.5 series (1 model): gpt-3.5-turbo
- **O-Series Reasoning (7 total)**:
  - o3 series (3 models): o3, o3-mini, o3-pro
  - o1 series (3 models): o1 (200K), o1-pro (200K), o1-mini (128K)
  - o4-mini (1 model)

---

## Update Procedures

### When to Update the Website

1. **New Model Added** (High Priority)
   - Update model count throughout site
   - Add model to `models.html` with specs
   - Update pricing calculations
   - Update FAQ model list
   - Verify app code changes in `ModelCatalog.swift`

2. **Pricing Changes** (High Priority)
   - Recalculate "starting from" prices using Pricing.swift
   - Update pricing.html comparison table
   - Verify markup hasn't changed (check `serverMarkupOverride`)

3. **Feature Terminology Changes** (Medium Priority)
   - Update all references to old term
   - Check SettingsStore.swift for exact new terminology
   - Update models.html, index.html, faq.html consistently
   - Update faq.schema.json

4. **iOS Version Requirements** (Medium Priority)
   - Update system requirements in FAQ
   - Update App Store link if needed

5. **Privacy Policy Updates** (High Priority, Legal)
   - Review changes with legal if adding data collection
   - Update privacy.html with clear language
   - Notify users if materially changing practices

### Step-by-Step Update Process

#### Adding a New Model
```bash
# 1. Verify model exists in iOS app
grep -r "model-id" path/to/ios-app/ModelCatalog.swift

# 2. Update model count across all pages
# Search for old count (e.g., "19 models") and replace
grep -r "19 models" .

# 3. Add model to models.html
# - Add to appropriate family section
# - Include context window, capabilities
# - Calculate "starting from" price using 10 input + 16 output tokens

# 4. Update FAQ
# - Update model count
# - Update model family breakdown

# 5. Test locally
open index.html  # Check in browser

# 6. Deploy
git add -A
git commit -m "Add [model-name] model support"
git push origin main
```

#### Updating Pricing
```bash
# 1. Get pricing from Pricing.swift
# Calculate: (10 input tokens × inputPer1M / 1M) + (16 output tokens × outputPer1M / 1M)
# Apply markup: × 2.5 (or check serverMarkupOverride)

# 2. Update models.html "starting from" prices
# Example: gpt-5-nano
# Input: 0.025 per 1M × 10 / 1,000,000 = $0.00000025
# Output: 0.100 per 1M × 16 / 1,000,000 = $0.0000016
# Markup: ($0.00000025 + $0.0000016) × 2.5 = $0.0000046
# Round: $0.000005 per message

# 3. Verify calculation with app's RequestBuilder logic

# 4. Deploy changes
```

#### Terminology Update
```bash
# 1. Create search/replace map
# Old term → New term (e.g., "cost guard" → "spending protection")

# 2. Update all HTML files
sed -i '' 's/cost guard/spending protection/g' *.html

# 3. Update faq.schema.json
# Manually edit JSON (sed can break JSON structure)

# 4. Verify consistency
grep -r "old-term" .  # Should return no results

# 5. Test and deploy
```

---

## Local Development

### Setup
```bash
# 1. Clone the repository
git clone https://github.com/username/lookinglass-website.git
cd lookinglass-website

# 2. Open in browser
open index.html

# Or serve with simple HTTP server (avoids CORS issues)
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

### Testing Checklist
- [ ] **Desktop browsers**: Chrome, Safari, Firefox, Edge
- [ ] **Mobile browsers**: iOS Safari, Chrome on Android
- [ ] **Responsive design**: Test at 320px, 375px, 768px, 1024px, 1440px widths
- [ ] **Accessibility**: Use browser dev tools accessibility audit
- [ ] **SEO**: Validate structured data at [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] **Performance**: Check Lighthouse scores (aim for 90+ across all metrics)
- [ ] **Links**: Verify all internal and external links work
- [ ] **Meta tags**: Verify Open Graph and Twitter Card previews

### Content Verification
Before deploying, verify:
1. **Model counts match app** - Check against `ModelCatalog.swift`
2. **Terminology matches app** - Check against `SettingsStore.swift` and `Localizable.xcstrings`
3. **Pricing calculations correct** - Verify against `Pricing.swift` markup
4. **Context windows accurate** - Check `ModelCatalog.swift` for max tokens
5. **Capabilities accurate** - Verify temperature, reasoning, verbosity support

### Image Optimization

All app screenshots are compressed using [Squoosh.app](https://squoosh.app/) for optimal web performance.

**Compression Settings:**
- **Format**: WebP
- **Quality**: 80-85 (balance between quality and file size)
- **Target**: Keep images under 150KB when possible
- **Theme**: Dark mode to match App Store presentation

**Workflow:**
1. Export screenshots from iOS app (dark mode)
2. Upload to [squoosh.app](https://squoosh.app/)
3. Select WebP format
4. Adjust quality slider (aim for 80-85)
5. Download and replace in `assets/images/`
6. Verify visual quality before committing

**Current Screenshots (Dark Mode):**
- Hero splash, tutorial, welcome, chat interface
- Model selection, pricing, wallet, audit, threads
- Settings, advanced controls, permanent memory

**File Size Targets:**
- Hero images: 40-60KB
- Gallery screenshots: 80-120KB
- Complex UI screenshots: 120-150KB max

### Icon Assets

All website icons are sourced from [Flaticon.com](https://www.flaticon.com/) - a curated collection of high-quality SVG icons.

**Icon Specifications:**
- **Format**: SVG (scalable vector graphics)
- **Style**: Minimal line-art with 2-3px stroke weight
- **Size**: 24×24px to 48×48px viewBox
- **Colors**: Use `currentColor` to inherit theme colors (dark green #004B3A in light mode, bright green #22C77A in dark mode)
- **Location**: `/assets/icons/`

**Icon Organization:**
- Icons are organized by usage category (see `Docs/icons.md` for full mapping)
- All icons work in both light and dark themes
- Total icon set: 76 individual SVG files

**Documentation**: See `Docs/icons.md` for complete icon inventory, usage guide, and implementation instructions.

---

## Deployment

### GitHub Pages (Automatic)
This site is configured for automatic deployment via GitHub Pages.

**Deployment Process**:
1. Push changes to `main` branch
2. GitHub Actions builds and deploys automatically
3. Site updates at `https://username.github.io/lookinglass-website/` within ~1 minute

**Manual Deployment** (if needed):
```bash
# 1. Commit changes
git add -A
git commit -m "Update model count to 21"

# 2. Push to main
git push origin main

# 3. Verify deployment
# Check https://github.com/username/lookinglass-website/actions
# Wait for green checkmark
```

### Custom Domain (if configured)
If using a custom domain (e.g., `lookinglass.app`):
1. Ensure `CNAME` file exists in root with domain name
2. Configure DNS records at your domain provider:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   username.github.io
   ```
3. Enable HTTPS in GitHub Pages settings (free via Let's Encrypt)

### Deployment Verification
After deployment, verify:
- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Images and assets load
- [ ] Meta tags render correctly (check page source)
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Mobile responsiveness works
- [ ] HTTPS certificate is valid

---

## SEO & Analytics

### Current SEO Strategy

#### Meta Tags (Per Page)
Each page includes:
- **Title tag** - Unique, descriptive, 50-60 characters
- **Meta description** - Compelling summary, 150-160 characters
- **Open Graph tags** - For social media sharing (Facebook, LinkedIn)
- **Twitter Card tags** - For Twitter sharing with rich previews
- **Canonical URL** - Prevents duplicate content issues

#### Structured Data
- **FAQPage schema** (`faq.schema.json`) - Enables rich FAQ snippets in Google
- **Organization schema** (index.html) - Displays brand info in search
- **SoftwareApplication schema** (index.html) - App details and ratings

#### SEO Best Practices
- **Semantic HTML** - Proper heading hierarchy (h1 → h2 → h3)
- **Alt text** - All images have descriptive alt attributes
- **Fast load times** - Minimal dependencies, optimized assets
- **Mobile-first** - Responsive design, mobile-friendly test passes
- **Internal linking** - Clear navigation between related content
- **External links** - Privacy Policy, App Store, support resources

### Analytics (Privacy-Respecting)
Currently **no analytics** installed to maintain user privacy.

**If adding analytics** (future consideration):
- Prefer privacy-focused solutions (Plausible, Fathom, Simple Analytics)
- Avoid Google Analytics, Facebook Pixel, or invasive tracking
- Update Privacy Policy if adding any analytics
- Respect Do Not Track (DNT) headers

---

## Recent Updates

### January 2025 - App Usage Guide & Link Fixes
**Summary**: Added comprehensive guide page for daily app usage, fixed homepage gallery links to point to correct destinations, expanded FAQ sections

**Changes**:
- ✅ **New Guide Page** (`guide.html`):
  - Comprehensive guide for chat interface, thread management, exporting, and voice input
  - Fills gap between "what features exist" and "how to use them daily"
  - Added to main navigation between Pricing and FAQ
  - Detailed sections on cost bar, token composition, thread organization, export formats
- ✅ **Homepage Gallery Links Fixed**:
  - Chat Interface → `/guide#chat-interface` (was generic #features)
  - Chat Threads → `/guide#thread-management` (was mismatched #export-history)
  - Conversation Settings → `/faq#context-control` (was #advanced-settings)
  - Complete Transparency (Audit) → `/faq#audit-transactions` (new detailed FAQ)
  - 5 Languages badge/stat → `/faq#languages` (was missing anchor)
- ✅ **FAQ Expansions**:
  - Added languages FAQ (#languages) - Details 5 supported languages and localization
  - Added audit transactions FAQ (#audit-transactions) - Comprehensive tracking details
  - Expanded conversation settings FAQ (#context-control) - Smart context, permanent memory, response settings, streaming toggle
  - Enhanced tutorial FAQ (#onboarding) - Accurate details matching actual AI Power User Guide content
- ✅ **Navigation Update**: Added "Guide" link to header navigation

**Files Changed**:
- `guide.html` - New page created
- `index.html` - Gallery links updated
- `faq.html` - Four sections added/expanded
- `_includes/header.html` - Navigation updated
- `README.md` - Documentation updated with new page info and anchor IDs

### January 2025 - Pricing Table Accuracy & Model Intelligence Update
**Summary**: Updated pricing comparison based on OpenAI's official data, corrected pro model availability, revised model recommendations based on actual intelligence ratings

**Changes**:
- ✅ **Pricing Table Corrections** (based on OpenAI's official pricing page):
  - Free tier: No GPT-4o access (was incorrectly showing "Limited")
  - Plus tier: Standard/Expanded models (not "Included/Higher Limits")
  - Pro tier: Only gets gpt-5-pro, NOT o3-pro or o1-pro (those are Enterprise-only!)
  - Added response times row (Free: Limited & slow, Plus/Pro: Fast, Lookinglass: Real-time)
  - Added context windows row (Free: 16K, Plus: 32K, Pro: 128K, Lookinglass: Up to 1M)
  - Added footnote: "*OpenAI's 'Unlimited' requires 'reasonable use'—you don't define what's reasonable, they do."
- ✅ **Pro Model Availability Corrections**:
  - o3-pro and o1-pro are Enterprise-only (not available in Pro $200/mo tier)
  - Pro tier only gets gpt-5-pro
  - Lookinglass is the only pay-per-use access to all 3 pro models (o1-pro, o3-pro, gpt-5-pro)
- ✅ **Model Intelligence Ratings** (based on OpenAI's official model comparison):
  - gpt-4.1 has highest intelligence rating (4 dots from OpenAI)
  - gpt-5-chat-latest and gpt-4o both have 3 dots
  - Updated model card descriptions to reflect actual intelligence ratings
  - Reordered "Highest Quality" recommendation: gpt-4.1 first (was gpt-5-chat-latest)
- ✅ **Model Recommendations Expansion**:
  - Expanded from 4 to 6 recommendation cards
  - Structured as 2×3 matrix: Non-Reasoning vs Reasoning × Fast/Balanced/Quality tiers
  - Added gpt-5-mini (balanced reasoning) and clarified gpt-5-nano (cheapest reasoning)
  - Matches app's onboarding recommendations
- ✅ **Visual Updates**:
  - Changed Tokens & Pricing icon from 🔤 to 💰
  - Removed redundant "(1 million)" from 1M token context descriptions

**Files Changed**:
- `pricing.html` - Complete pricing table overhaul with accurate OpenAI tier data, footnotes
- `models.html` - Pro model corrections, intelligence ratings, 6-card recommendations, icon change
- `README.md` - Fixed gpt-4.1-pro → gpt-4.1-nano, added this update log

### October 2024 - Model Expansion & Terminology Update
**Summary**: Updated from 19 to 21 models, standardized terminology with iOS app, improved privacy clarity

**Changes**:
- ✅ **Model Count**: 19 → 21 models (added `gpt-5-pro`, `chatgpt-4o-latest`)
- ✅ **Model Names**: All lowercase to match app (e.g., "gpt-5-pro" not "gpt-5-pro")
- ✅ **Terminology Standardization**:
  - "Flex" → "smart savings"
  - "Cost Guard" → "spending protection" / "spending alerts"
  - "Effort Level" → "AI power level"
  - "Temperature" → "creativity level"
  - "Verbosity" → "response detail level"
- ✅ **Context Windows**: Fixed `o1-mini` to 128K, clarified `gpt-5-chat-latest` is 128K (others 400K)
- ✅ **GPT-4.1 Highlight**: Added 1M token context window callout
- ✅ **Pricing Updates**: Replaced cost ranges with "starting from" prices (calculated using 10 input + 16 output tokens)
- ✅ **Smart Savings Consistency**: Standardized to "yes (50% off)", "select models (50% off)", or "no"
- ✅ **Privacy Clarity**: Enhanced iCloud sync explanation
  - Added dedicated "iCloud Sync & Your Data" section
  - Clarified data stays in user's personal iCloud, not accessible by Lookinglass
  - Updated homepage and FAQ with clear privacy statements
- ✅ **New Content Section**: Added "Understanding the Basics" on models page
  - What are tokens?
  - How pricing works
  - AI workspace (context window explanation)
- ✅ **Welcome Bonus**: Added $1 free credit mention for new users
- ✅ **Language Support**: Added 5 languages badge (English, Spanish, French, Portuguese, Italian)
- ✅ **Smart Memory FAQ**: Updated to reflect actual app behavior (500-token increments, not short/long/custom presets)
- ✅ **iOS Version Requirement**: Updated FAQ to iOS 17+ (from iOS 15+)

**Files Changed**:
- `index.html` - Model count, privacy, languages, welcome bonus, spending protection
- `pricing.html` - Model count, spending protection terminology
- `models.html` - Model count, names, context windows, pricing, terminology, new basics section
- `privacy.html` - iCloud sync section, privacy clarifications
- `faq.html` - Model count, welcome bonus, spending protection, smart memory explanation
- `faq.schema.json` - Structured data updates for terminology and smart memory

---

## Content Guidelines

### Voice & Tone
- **Clear**: Simple language, avoid jargon unless necessary
- **Transparent**: Honest about pricing, features, and limitations
- **Respectful**: Assume users are intelligent and value their privacy
- **Helpful**: Educate users, don't just market to them
- **Confident**: We're proud of what we've built

### Writing Style
- **Active voice** - "You control your data" (not "Your data is controlled")
- **Second person** - "You get access to 21 models" (not "Users get access")
- **Short sentences** - Break complex ideas into digestible chunks
- **Bullet points** - Use lists for scannable content
- **Concrete examples** - "Save 50% on select models" (not "Significant savings")

### Content Principles
1. **Match app exactly** - Never promise features the app doesn't have
2. **Update regularly** - Keep in sync with iOS app releases
3. **Verify claims** - Check against source code before publishing
4. **Privacy first** - Always emphasize user control and data protection
5. **Cost transparency** - Show exact pricing, never hide costs

### Common Pitfalls to Avoid
- ❌ **Capitalized model names** - App shows lowercase, so should website
- ❌ **Outdated terminology** - Check app code for current naming
- ❌ **Incorrect pricing** - Verify calculations against Pricing.swift markup
- ❌ **Generic privacy claims** - Be specific about iCloud sync and data storage
- ❌ **Missing context windows** - Users care about token limits, include them
- ❌ **Overpromising features** - Only mention what currently exists in app

---

## Troubleshooting

### Common Issues

#### Model Count Mismatch
**Problem**: Website says 19 models but app shows 21
**Solution**: 
1. Check `ModelCatalog.swift` in iOS app for current count
2. Update all references: index.html, pricing.html, models.html, faq.html
3. Add new models to models.html with full specifications

#### Pricing Calculations Wrong
**Problem**: "Starting from" prices don't match app estimates
**Solution**:
1. Verify markup in `Pricing.swift` (default: 2.5x, check `serverMarkupOverride`)
2. Recalculate using: (10 input tokens × inputPer1M / 1M) + (16 output tokens × outputPer1M / 1M) × markup
3. Round to 5 decimal places for display

#### Terminology Inconsistency
**Problem**: Website uses "Flex" but app shows "Smart Savings"
**Solution**:
1. Check `SettingsStore.swift` and `Localizable.xcstrings` for current app terminology
2. Use search/replace to update all instances
3. Update both HTML and JSON files
4. Test with grep: `grep -r "old-term" .`

#### Context Window Confusion
**Problem**: Model context window doesn't match app specs
**Solution**:
1. Check `ModelCatalog.swift` for `maxTokens` property
2. Update models.html with correct values
3. Note special cases (e.g., `gpt-5-chat-latest` is 128K while other gpt-5 models are 400K)

#### iCloud Privacy Unclear
**Problem**: Users confused about whether Lookinglass can see their iCloud data
**Solution**:
1. Emphasize: "Data stays in YOUR personal iCloud account"
2. Clarify: "Lookinglass has NO access to your iCloud data"
3. Explain: "Apple manages encryption, not us"
4. Location: privacy.html, index.html (Who Uses section), faq.html

#### Links Not Working After Deployment
**Problem**: Internal links broken after GitHub Pages deployment
**Solution**:
1. Check if using absolute paths vs relative paths
2. Verify `<base>` tag if using one
3. Test on actual deployed URL, not just locally

#### Structured Data Validation Errors
**Problem**: Google Rich Results Test shows errors for FAQ schema
**Solution**:
1. Validate JSON syntax (use JSONLint.com)
2. Ensure `faq.schema.json` matches `faq.html` content
3. Check for escaped characters in JSON strings
4. Verify Schema.org FAQPage specification compliance

---

## Maintenance Schedule

### Regular Updates (As Needed)
- **When app adds models** - Update within 24 hours of app release
- **When pricing changes** - Immediate update (high priority)
- **When terminology changes** - Update within 1 week
- **When iOS requirements change** - Update FAQ immediately

### Periodic Reviews (Quarterly)
- [ ] **SEO audit** - Check search rankings and structured data
- [ ] **Content accuracy** - Verify against current iOS app version
- [ ] **Link checking** - Test all internal and external links
- [ ] **Performance review** - Lighthouse scores, load times
- [ ] **Accessibility audit** - WCAG 2.1 compliance check
- [ ] **Mobile testing** - Test on real devices (iOS Safari, Android Chrome)

### Annual Tasks
- [ ] **Privacy policy review** - Ensure compliance with regulations
- [ ] **Content refresh** - Update screenshots, testimonials, use cases
- [ ] **Competitive analysis** - Compare messaging with competitors
- [ ] **Design review** - Consider UI/UX improvements

---

## Contributing

### For Developers
1. **Check this README first** - Understand content sources of truth
2. **Verify against app code** - Don't guess, check the iOS app repo
3. **Test locally** - Open files in multiple browsers before deploying
4. **Follow conventions** - Match existing style and terminology
5. **Update this README** - Document significant changes or new procedures

### For Content Writers
1. **Use the app** - Install and use Lookinglass to understand features
2. **Match app terminology** - Check SettingsStore.swift and Localizable.xcstrings
3. **Keep it honest** - Don't overpromise or use marketing fluff
4. **Update FAQs** - Add questions you see users asking in support
5. **Proofread** - Grammar and spelling matter for credibility

### For Product Managers
1. **Sync website with releases** - Update website before or with app launch
2. **Track changes** - Document what changed and why in commit messages
3. **Monitor impact** - Watch app downloads after website updates
4. **Gather feedback** - User questions often reveal unclear website content
5. **Prioritize transparency** - Website should build trust, not just convert

---

## Anchor IDs for Internal Linking

All pages include semantic anchor IDs for deep linking. Use these for internal navigation and SEO.

### FAQ Page (`/faq.html`)
**Pricing & Billing**: `#pricing-billing`, `#pay-as-you-go`, `#typical-cost`, `#wallet-funds`, `#free-credits`, `#why-pay`  
**Models & Features**: `#models-features`, `#which-models`, `#different-from-chatgpt`, `#pro-model-access`, `#smart-savings`  
**Privacy & Security**: `#privacy-security`, `#data-privacy`, `#training-data`, `#data-collection`  
**App Features**: `#app-features`, `#permanent-memory`, `#context-control`, `#spending-protection`, `#voice-to-text`  
**Getting Started**: `#getting-started`, `#free-download`, `#create-account`, `#minimum-wallet`, `#onboarding`  
**Technical**: `#technical`, `#devices-supported`, `#offline`, `#export-history`

### Homepage (`/index.html`)
`#power-users` - Power users section  
`#features` - Features section  
`#app-preview` - Screenshot gallery  
`#download` - CTA section

### Models Page (`/models.html`)
`#basics` - Understanding tokens/pricing  
`#chat-models` - Chat Models (14)  
`#reasoning-models` - O-Series (7)  
`#choosing-guide` - Recommendations  
`#advanced-settings` - Advanced controls

### Guide Page (`/guide.html`)
`#getting-started` - First launch and sign in  
`#chat-interface` - Main conversation screen  
`#screen-layout` - Screen components overview  
`#input-bar` - Microphone, text field, send button  
`#cost-bar` - Token breakdown and pricing  
`#pricing-sheet` - Full pricing view with billing plan toggle  
`#switching-models` - Change models mid-conversation  
`#message-actions` - Long-press actions (copy, share, info, forward)  
`#thread-management` - Thread organization  
`#thread-list` - Accessing threads  
`#creating-threads` - New thread creation  
`#organizing-threads` - Rename, pin, copy  
`#deleting-threads` - Delete single or all  
`#searching-threads` - Search functionality  
`#exporting` - Export conversations  
`#export-formats` - Markdown, plaintext, JSON  
`#how-to-export` - Export instructions  
`#voice-input` - Voice-to-text feature  
`#voice-setup` - First-time permissions  
`#voice-usage` - Using voice input  
`#voice-languages` - Language support  
`#voice-tips` - Tips for best results  
`#next-steps` - Further learning resources

### Pricing Page (`/pricing.html`)
`#examples` - Cost examples  
`#calculator` - Interactive calculator  
`#why-payg` - Why pay-as-you-go  
`#how-pricing-works` - Pricing breakdown

### Privacy Page (`/privacy.html`)
`#information-we-collect`, `#what-we-dont-collect`, `#how-we-use-information`, `#data-sharing`, `#icloud-sync`, `#data-security`, `#data-retention`, `#your-rights`, `#childrens-privacy`, `#policy-changes`, `#contact-us`

**Usage**: `<a href="/faq#spending-protection">Learn about spending protection</a>`

---

## License

**Private Code - All Rights Reserved**

This website and its content are privately owned by Cory Hamilton, founder of Lookinglass. This is proprietary content and is not licensed for public use, distribution, or modification. All rights are reserved.

**Copyright © 2025 Cory Hamilton / Lookinglass. All rights reserved.**

---

## Contact

- **Website**: [lookinglass.app](https://lookinglass.app) (when live)
- **App Store**: [Lookinglass on iOS](https://apps.apple.com/app/lookinglass)
- **Support**: support@lookinglass.app
- **Privacy**: privacy@lookinglass.app

---

*Last Updated: October 24, 2025*

