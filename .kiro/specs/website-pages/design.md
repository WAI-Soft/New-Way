# Design Document

## Overview

This design document outlines the technical approach for building five standalone pages (Services, About, Clients, Partners, and Contact) for the New Way Solutions website. The pages will maintain design consistency with the existing home page, using the same teal/cyan color scheme (#50af9b primary, with gradients from #3b9482 to #70d9c3), dark navy background (#101a29), and animation patterns.

## Architecture

### Page Structure

The website will follow Next.js 14+ App Router conventions:

```
app/
├── page.tsx                 # Home page (existing)
├── services/
│   └── page.tsx            # Services page
├── about/
│   └── page.tsx            # About page
├── clients/
│   └── page.tsx            # Clients page
├── partners/
│   └── page.tsx            # Partners page
├── contact/
│   └── page.tsx            # Contact page
└── layout.tsx              # Root layout (existing)
```

### Component Architecture

Each page will be composed of reusable components:

```
components/
├── header.tsx              # Shared navigation (existing)
├── footer.tsx              # Shared footer (existing)
├── page-hero.tsx           # Reusable hero section for pages
├── services/
│   ├── service-card.tsx    # Individual service card
│   ├── service-detail.tsx  # Detailed service section
│   └── services-grid.tsx   # Grid layout for services
├── about/
│   ├── company-overview.tsx
│   ├── mission-values.tsx
│   ├── stats-section.tsx
│   └── team-section.tsx
├── clients/
│   ├── client-grid.tsx
│   ├── testimonial-card.tsx
│   └── case-study-preview.tsx
├── partners/
│   ├── partner-grid.tsx
│   ├── partner-card.tsx
│   └── partnership-benefits.tsx
└── contact/
    ├── contact-form.tsx
    ├── contact-info.tsx
    └── location-map.tsx
```

## Components and Interfaces

### 1. Page Hero Component

A reusable hero section for all pages with consistent styling.

```typescript
interface PageHeroProps {
  title: string
  subtitle: string
  backgroundVariant?: 'gradient' | 'aurora' | 'solid'
}
```

**Design Features:**
- Large heading with teal gradient text effect
- Subtitle in foreground/60 opacity
- Optional background variants (aurora animation, gradient, or solid)
- Consistent padding: py-24 sm:py-32
- Fade-in animation on load

### 2. Services Page Components

#### ServiceCard Component
```typescript
interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
}
```

**Design Features:**
- Icon with gradient background (14x14, rounded-xl)
- Title in text-2xl font-bold
- Description with text-foreground/60
- Feature list with checkmarks
- Hover effect with gradient border glow
- Card: bg-card, border-border/40, rounded-2xl, p-8

#### ServicesGrid Component
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gap: gap-8
- Staggered animation on scroll (100ms delay per item)

### 3. About Page Components

#### CompanyOverview Component
```typescript
interface CompanyOverviewProps {
  heading: string
  content: string[]
  image?: string
}
```

**Design Features:**
- Two-column layout on desktop (text + image)
- Teal accent line on the left of text
- Paragraph spacing with leading-relaxed
- Optional company image with rounded corners

#### StatsSection Component
```typescript
interface Stat {
  value: string
  label: string
  icon?: LucideIcon
}

interface StatsSectionProps {
  stats: Stat[]
}
```

**Design Features:**
- Grid layout: grid-cols-2 md:grid-cols-4
- Large value text (text-4xl font-bold) with teal gradient
- Label text (text-sm text-foreground/60)
- Icon with teal color
- Card background with border

#### MissionValues Component
- Cards for Mission, Vision, Values
- Icon + heading + description format
- Teal gradient accents
- Grid layout: grid-cols-1 md:grid-cols-3

### 4. Clients Page Components

#### ClientGrid Component
```typescript
interface Client {
  name: string
  logo: string
  industry?: string
  description?: string
}

interface ClientGridProps {
  clients: Client[]
  layout?: 'grid' | 'masonry'
}
```

**Design Features:**
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Logo cards with white background, grayscale filter
- Hover: remove grayscale, add teal border
- Consistent card height: h-32
- Logo: object-contain, centered

#### TestimonialCard Component
```typescript
interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  avatar?: string
}
```

**Design Features:**
- Quote text in text-lg with quotation marks
- Author info with avatar (if available)
- Teal accent border on left
- Card background with subtle shadow

### 5. Partners Page Components

#### PartnerGrid Component
```typescript
interface Partner {
  name: string
  logo: string
  category: string
  description?: string
}

interface PartnerGridProps {
  partners: Partner[]
  groupByCategory?: boolean
}
```

**Design Features:**
- Similar to ClientGrid but with category badges
- Category badge: bg-primary/10, text-primary, rounded-full
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Hover effects with scale and shadow

#### PartnershipBenefits Component
- Icon + heading + description cards
- Explains value of partnerships
- Teal gradient icons
- Grid layout: grid-cols-1 md:grid-cols-3

### 6. Contact Page Components

#### ContactForm Component
```typescript
interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}
```

**Design Features:**
- Form fields with labels
- Input styling: bg-card, border-border/40, rounded-lg, p-3
- Focus state: border-primary, ring-primary
- Submit button: bg-primary, hover effects with shadow
- Validation messages in text-destructive
- Success message with teal checkmark

#### ContactInfo Component
```typescript
interface ContactInfoProps {
  email: string
  phone: string
  address: string
  socialLinks: {
    linkedin?: string
    facebook?: string
    twitter?: string
  }
}
```

**Design Features:**
- Icon + text layout for each contact method
- Icons: Mail, Phone, MapPin (size 20)
- Social media buttons: rounded-full, teal border, hover fill
- Card background with padding

#### LocationMap Component
- Embedded map or static image
- Rounded corners: rounded-xl
- Border: border-border/40
- Optional: Interactive map with markers

## Data Models

### Service Model
```typescript
interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  gradient: string
}
```

### Client Model
```typescript
interface Client {
  id: string
  name: string
  logo: string
  industry: string
  description?: string
  testimonial?: Testimonial
  caseStudyUrl?: string
}
```

### Partner Model
```typescript
interface Partner {
  id: string
  name: string
  logo: string
  category: 'Technology' | 'Security' | 'Cloud' | 'Integration'
  description: string
  website?: string
}
```

### Contact Form Submission
```typescript
interface ContactSubmission {
  name: string
  email: string
  company: string
  phone: string
  message: string
  timestamp: Date
  status: 'pending' | 'sent' | 'failed'
}
```

## Design System

### Color Palette

**Primary Colors:**
- Primary Teal: `#50af9b`
- Dark Navy Background: `#101a29`
- Card Background: `#1a2838`
- Foreground: `#f5f5f5`

**Gradient Variations:**
- `from-[#50af9b] to-[#3b9482]` - Main teal gradient
- `from-[#60c9b3] to-[#50af9b]` - Light teal gradient
- `from-[#70d9c3] to-[#60c9b3]` - Lightest teal gradient
- `from-primary via-cyan-400 to-primary` - Text gradient

**Semantic Colors:**
- Border: `#2a3d54`
- Muted: `#1e2f42`
- Destructive: `#ef4444`

### Typography

**Font Family:**
- Sans: Geist (--font-sans)
- Mono: Geist Mono (--font-mono)

**Font Sizes:**
- Hero: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Page Title: `text-4xl sm:text-5xl`
- Section Heading: `text-3xl sm:text-4xl`
- Card Title: `text-xl sm:text-2xl`
- Body: `text-base sm:text-lg`
- Small: `text-sm`

**Font Weights:**
- Bold: `font-bold` (headings)
- Semibold: `font-semibold` (buttons, labels)
- Medium: `font-medium` (navigation)
- Normal: `font-normal` (body text)

### Spacing

**Container:**
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`

**Section Spacing:**
- Vertical: `py-24` (96px)
- Between sections: `mb-16` (64px)

**Component Spacing:**
- Card padding: `p-8` (32px)
- Gap in grids: `gap-8` (32px)
- Button padding: `px-8 py-4`

### Border Radius

- Small: `rounded-lg` (0.5rem)
- Medium: `rounded-xl` (0.75rem)
- Large: `rounded-2xl` (1rem)
- Full: `rounded-full`

### Animations

**Scroll Animations:**
- Use existing `useScrollAnimation` hook
- Fade in + translate Y: `opacity-0 translate-y-12` → `opacity-100 translate-y-0`
- Duration: `duration-1000`
- Stagger delay: `delay-[100ms]`, `delay-[200ms]`, etc.

**Hover Effects:**
- Scale: `hover:scale-105`
- Shadow: `hover:shadow-lg hover:shadow-primary/50`
- Border: `hover:border-primary/50`
- Transform: `hover:translate-x-1` (for arrows)
- Duration: `transition-all duration-300`

**Button Animations:**
- Primary button: scale + shadow on hover
- Secondary button: background opacity change
- Icon animation: translate on hover

## Error Handling

### Form Validation

**Client-side validation:**
- Required field checks
- Email format validation
- Phone number format validation
- Message length validation (min 10 characters)

**Error Display:**
- Inline error messages below fields
- Red border on invalid fields: `border-destructive`
- Error text: `text-destructive text-sm`

### Loading States

**Form Submission:**
- Disable button during submission
- Show loading spinner
- Button text changes to "Sending..."

**Page Loading:**
- Skeleton loaders for images
- Fade-in animations for content
- Progressive image loading

## Testing Strategy

### Component Testing

**Unit Tests:**
- Test form validation logic
- Test button click handlers
- Test navigation link functionality
- Test responsive layout breakpoints

**Integration Tests:**
- Test form submission flow
- Test navigation between pages
- Test scroll animations trigger correctly
- Test mobile menu functionality

### Visual Testing

**Responsive Design:**
- Test on mobile (375px, 414px)
- Test on tablet (768px, 1024px)
- Test on desktop (1280px, 1920px)

**Browser Testing:**
- Chrome, Firefox, Safari, Edge
- Test animations and transitions
- Test form functionality

### Accessibility Testing

**WCAG Compliance:**
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios (4.5:1 minimum)
- Focus indicators
- Alt text for images
- ARIA labels for interactive elements

## Performance Considerations

### Image Optimization

- Use Next.js Image component
- Lazy load images below the fold
- Provide width and height attributes
- Use WebP format with fallbacks
- Optimize logo file sizes

### Code Splitting

- Each page is automatically code-split by Next.js
- Lazy load heavy components (maps, carousels)
- Dynamic imports for non-critical components

### SEO Optimization

- Unique meta titles and descriptions per page
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Schema.org markup for organization
- Open Graph tags for social sharing

## Implementation Notes

### Navigation Updates

**Header Component:**
- Update links from hash anchors (#services) to routes (/services)
- Maintain active state highlighting
- Keep mobile menu functionality
- Smooth page transitions

**Footer Component:**
- Update all footer links to new routes
- Maintain social media links
- Keep consistent styling

### Reusable Patterns

**Page Layout Pattern:**
```tsx
<main className="w-full">
  <Header />
  <PageHero title="..." subtitle="..." />
  {/* Page-specific content */}
  <Footer />
</main>
```

**Section Pattern:**
```tsx
<section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    {/* Section content */}
  </div>
</section>
```

### Animation Pattern

Use the existing `useScrollAnimation` hook:
```tsx
const { elementRef, isVisible } = useScrollAnimation()

<div ref={elementRef} className={`transition-all duration-1000 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
}`}>
  {/* Content */}
</div>
```

## Design Decisions and Rationales

### Why Separate Pages?

1. **Better SEO**: Each page can have unique meta tags and content
2. **Improved Performance**: Code splitting reduces initial load
3. **Easier Navigation**: Direct URLs for sharing and bookmarking
4. **Scalability**: Easier to add more content to specific sections

### Why Maintain Color Scheme?

1. **Brand Consistency**: Reinforces brand identity
2. **User Experience**: Familiar visual language across pages
3. **Professional Appearance**: Cohesive design builds trust

### Why Reuse Components?

1. **Maintainability**: Changes propagate across pages
2. **Consistency**: Ensures uniform look and feel
3. **Development Speed**: Faster implementation
4. **Smaller Bundle**: Less duplicate code
