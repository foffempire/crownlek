# African Native Attire Website — AI Agent Implementation Plan

## 1. Project Overview

Build a modern, premium, responsive frontend website for a company specializing in African native attire and fashion.

### Technology

- React
- Vite
- JavaScript — not TypeScript
- Tailwind CSS
- React Router
- Lucide React for icons
- Local/static mock data
- No backend
- No database
- No authentication
- No payment integration
- No real API calls

### Core Objective

The website should communicate:

- African culture
- Premium craftsmanship
- Modern African fashion
- Elegance
- Quality fabrics
- Traditional and contemporary designs
- Professionalism
- Trust

The website should feel like a high-end African fashion brand rather than a generic clothing store.

---

# 2. Brand Identity

## Primary Color

`#5D092A`

Use this as the primary brand color.

### Supporting Colors

```text
Primary:        #5D092A
Dark:           #26030F
Deep Burgundy:  #3D061B
Cream:          #FAF7F2
Warm White:     #FFFFFF
Light Beige:    #F3EEE7
Gold:           #C9A227
Text:           #1A1A1A
Muted Text:     #6B6B6B
Border:         #E5DED5
```

Do not overuse gold. Use it primarily for subtle premium accents.

---

# 3. Design Direction

Create a visual identity combining:

**African heritage + modern luxury + contemporary fashion.**

### Design characteristics

- Large editorial photography
- Spacious layouts
- Strong typography
- Minimal UI
- Large product imagery
- Burgundy accents
- Cream backgrounds
- Subtle gold details
- Elegant hover animations
- Smooth page transitions
- Rounded corners used sparingly
- Large whitespace
- Editorial-style sections

Avoid:

- Excessive gradients
- Overly colorful UI
- Cartoonish African patterns
- Excessive animations
- Generic e-commerce layouts
- Excessive rounded cards
- Heavy shadows

---

# 4. Website Structure

Create the following pages:

```text
/
├── Home
├── Shop
├── Collections
├── Product Details
├── About
├── Lookbook
├── Services
├── Contact
├── FAQ
├── Cart
└── 404
```

---

# 5. Global Layout

Create reusable components.

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileMenu.jsx
│   │   └── AnnouncementBar.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Badge.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── Breadcrumb.jsx
│   │
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── ProductInfo.jsx
│   │   └── ProductFilters.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── FeaturedCollections.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── BrandStory.jsx
│   │   ├── LookbookPreview.jsx
│   │   ├── Testimonials.jsx
│   │   └── Newsletter.jsx
│   │
│   └── common/
│       ├── ScrollToTop.jsx
│       ├── ImagePlaceholder.jsx
│       └── WhatsAppButton.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Collections.jsx
│   ├── CollectionDetails.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│   ├── Lookbook.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
│
├── data/
│   ├── products.js
│   ├── collections.js
│   ├── testimonials.js
│   ├── faqs.js
│   └── navigation.js
│
├── context/
│   └── CartContext.jsx
│
├── hooks/
│   └── useScrollToTop.js
│
├── assets/
│   └── images/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 6. Navigation

Create a premium desktop navbar.

### Left

Brand logo/name.

Example:

```text
[LOGO] BRAND NAME
```

### Center

```text
Home
Shop
Collections
Lookbook
About
Services
Contact
```

### Right

Icons:

- Search
- User
- Shopping bag
- Mobile menu

Shopping bag should display the number of items.

### Navbar behavior

Desktop:

- Transparent over hero initially
- Changes to white/cream background after scrolling
- Smooth transition

Mobile:

- Logo
- Shopping bag
- Hamburger

Clicking hamburger opens a full-screen/mobile navigation drawer.

---

# 7. Announcement Bar

Add an optional thin announcement bar.

Example:

```text
FREE DELIVERY ON ORDERS ABOVE ₦150,000
```

Use the primary burgundy color.

Make the text configurable from a constant.

---

# 8. Home Page

The homepage should be the strongest page.

## Section 1 — Hero

Full-width editorial hero.

Use a large African fashion image.

Content:

```text
AUTHENTIC AFRICAN CRAFTSMANSHIP

Tradition, Tailored for Today.

Discover timeless African native attire
crafted with elegance, culture and character.

[SHOP COLLECTION] [EXPLORE LOOKBOOK]
```

Hero should contain:

- Large image
- Dark subtle overlay if required
- Burgundy CTA
- Secondary outlined CTA
- Small decorative text
- Responsive layout

Desktop layout should feel editorial and premium.

---

# 9. Featured Collections

Create 3–4 large collection cards.

Examples:

### Traditional Collection

African-inspired traditional designs.

### Contemporary Collection

Modern interpretation of African fashion.

### Occasion Collection

Outfits for weddings, ceremonies and special events.

### Bespoke Collection

Custom-made native attire.

Each card should have:

- Image
- Collection name
- Short description
- Explore button
- Hover animation

---

# 10. Featured Products

Display 4–8 products.

Example products:

```text
Royal Agbada
Classic Senator Set
Burgundy Embroidered Kaftan
Heritage Two-Piece
African Print Shirt
Premium Lace Ensemble
Traditional Wrapper Set
Contemporary Agbada
```

Product card:

```text
IMAGE
New / Featured badge

Product Name
Category

₦120,000

Wishlist icon
```

Hover:

- Image zoom
- Second image
- Quick View
- Add to Cart

---

# 11. Brand Story Section

Large split layout.

Left:

Large fashion image.

Right:

```text
OUR STORY

Rooted in Culture.
Designed for Today.

We celebrate African heritage through carefully
crafted native attire that combines traditional
identity with contemporary elegance.

[DISCOVER OUR STORY]
```

Use generous whitespace.

---

# 12. Why Choose Us

Create four feature blocks.

```text
01
Premium Fabrics

02
Expert Craftsmanship

03
Authentic African Designs

04
Made for Every Occasion
```

Use simple line icons.

---

# 13. Lookbook Preview

Create an editorial fashion gallery.

Use an asymmetrical image arrangement.

Add:

```text
THE LOOKBOOK

A celebration of African style,
identity and craftsmanship.

[VIEW LOOKBOOK]
```

Images should feel like a professional fashion editorial.

---

# 14. Testimonials

Create elegant testimonial cards.

Example:

> "The craftsmanship and attention to detail were exceptional. The outfit was exactly what I envisioned."

Display:

```text
★★★★★

Customer quote

Customer Name
Verified Customer
```

Use 3–6 testimonials.

---

# 15. Instagram / Social Gallery

Create a visual grid.

Title:

```text
FOLLOW OUR JOURNEY

@brandname
```

Use 6–8 fashion images.

Clicking an image can open a modal/lightbox.

No actual Instagram integration is required.

---

# 16. Newsletter

Create a premium newsletter section.

```text
JOIN OUR COMMUNITY

Be the first to discover new collections,
exclusive pieces and African fashion stories.

[ Email Address                  ] [SUBSCRIBE]
```

Since there is no backend, the form should only simulate submission.

After submitting:

```text
Thank you for joining our community.
```

---

# 17. Footer

Footer should contain:

### Brand

Short company description.

### Navigation

```text
Shop
Collections
Lookbook
About
Services
Contact
```

### Customer Care

```text
FAQ
Shipping
Returns
Size Guide
```

### Contact

```text
Phone
Email
Location
```

### Social

```text
Instagram
Facebook
TikTok
WhatsApp
```

### Bottom

```text
© 2026 Brand Name. All Rights Reserved.
Privacy Policy
Terms & Conditions
```

---

# 18. Shop Page

Create a professional product catalogue.

Header:

```text
SHOP

Discover our collection of
African-inspired native attire.
```

### Layout

Desktop:

```text
------------------------------------------------
| Filters | Product | Product | Product        |
|         | Product | Product | Product        |
------------------------------------------------
```

Sidebar filters:

```text
Category
Collection
Gender
Size
Price
Color
```

Mobile:

Filters become a button that opens a drawer.

---

# 19. Product Search

Implement frontend-only search.

Example:

```text
agbada
```

Filter products containing the search term in:

- name
- category
- description
- tags

Display:

```text
12 results for "agbada"
```

---

# 20. Product Sorting

Provide:

```text
Featured
Newest
Price: Low to High
Price: High to Low
Name: A-Z
```

Sorting should work entirely in React.

---

# 21. Collection Page

Create collection cards.

Collections:

```text
Traditional
Contemporary
Agbada
Senator
Kaftans
African Prints
Women's Collection
Men's Collection
Kids
Bespoke
```

Each collection should have:

- Hero image
- Title
- Description
- Product count
- Explore button

---

# 22. Product Details Page

Create a premium product detail experience.

Desktop layout:

```text
------------------------------------------------
|              |                               |
|   GALLERY    |       PRODUCT INFORMATION     |
|              |                               |
|              |  Product Name                |
|              |  ★★★★★                       |
|              |  ₦150,000                    |
|              |                               |
|              |  Description                 |
|              |                               |
|              |  Size                        |
|              |  [S][M][L][XL][XXL]         |
|              |                               |
|              |  Quantity                    |
|              |  [-] 1 [+]                   |
|              |                               |
|              |  [ADD TO CART]              |
|              |                               |
------------------------------------------------
```

Include:

- Image gallery
- Thumbnail navigation
- Lightbox
- Product name
- Price
- Description
- Sizes
- Colors
- Quantity
- Add to cart
- Wishlist
- Product details
- Fabric information
- Care instructions
- Delivery information

---

# 23. Product Image Lightbox

When the user clicks a product image:

Open fullscreen lightbox.

Features:

- Large image
- Previous
- Next
- Close
- Thumbnail navigation
- Keyboard navigation
- Escape to close

---

# 24. Cart

Since there is no backend, create a frontend-only shopping cart.

Use React Context.

```text
CartContext.jsx
```

Store:

```javascript
{
    product,
    quantity,
    selectedSize,
    selectedColor
}
```

Features:

- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Clear cart
- Calculate subtotal
- Calculate estimated delivery
- Calculate total

Persist cart using:

```text
localStorage
```

---

# 25. Cart Drawer

When a product is added, open a right-side cart drawer.

Example:

```text
YOUR BAG

--------------------------------

Product
₦120,000

[-] 1 [+]

--------------------------------

Subtotal
₦120,000

[VIEW CART]

[CHECKOUT]
```

Because there is no backend, checkout should lead to a frontend demo page or display:

```text
Checkout functionality will be connected
when the backend is implemented.
```

Do not implement fake payment processing.

---

# 26. About Page

Create a storytelling-focused page.

Sections:

### Hero

```text
OUR STORY

Preserving Heritage.
Creating Modern African Fashion.
```

### Brand Story

Explain:

- Company origin
- African heritage
- Craftsmanship
- Design philosophy

### Mission

```text
Our Mission
```

### Vision

```text
Our Vision
```

### Craftsmanship

Show:

```text
Fabric Selection
Tailoring
Embroidery
Finishing
Quality Control
```

### Team

Optional team section.

---

# 27. Services Page

Highlight services:

```text
Ready-to-Wear
Bespoke Tailoring
Wedding & Ceremony Outfits
Corporate Native Wear
Group / Event Outfits
Custom Embroidery
```

Each service gets:

- Image
- Title
- Description
- Learn More button

---

# 28. Bespoke Service Section

Create a dedicated premium section.

```text
BESPOKE

Designed Specifically
for You.

From fabric selection to final fitting,
our bespoke service creates a piece that
reflects your personality and occasion.

[START YOUR BESPOKE JOURNEY]
```

Since there is no backend, the CTA can navigate to Contact.

---

# 29. Lookbook Page

Create a full-screen editorial gallery.

Use categories:

```text
All
Men
Women
Traditional
Contemporary
Ceremonial
Editorial
```

Implement frontend filtering.

Images should open in a lightbox.

---

# 30. Contact Page

Create:

### Contact information

```text
Visit Us
Call Us
Email Us
WhatsApp
```

### Contact form

Fields:

```text
Name
Email
Phone
Subject
Message
```

Frontend validation only.

After submit:

```text
Thank you for contacting us.
We'll get back to you soon.
```

No API request.

---

# 31. FAQ Page

Create accordion FAQ.

Questions:

```text
How do I place an order?
Do you make custom outfits?
What sizes are available?
How long does tailoring take?
Do you deliver nationwide?
Do you ship internationally?
Can I request a custom design?
What fabrics do you use?
How do I care for my outfit?
What is your return policy?
```

Only one accordion item should be open at a time.

---

# 32. Responsive Design

The website must work properly on:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Breakpoints:

```text
sm
md
lg
xl
2xl
```

Mobile should not simply be a smaller desktop layout.

Specifically redesign:

- Navbar
- Hero
- Product grid
- Filters
- Product details
- Lookbook
- Footer
- Cart drawer

for mobile.

---

# 33. Animation Strategy

Use subtle animations:

- Fade-in
- Slide-up
- Image zoom
- Hover scale
- Button transitions
- Navbar transition
- Cart drawer slide
- Modal fade
- Mobile menu slide

Keep animations fast and elegant.

Avoid excessive animations.

---

# 34. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Focus states
- Accessible buttons
- Accessible forms
- ARIA labels where necessary
- Escape-to-close for modals
- Keyboard navigation for image gallery

Ensure sufficient color contrast.

---

# 35. SEO Frontend Setup

Even though there is no backend, add:

```text
<title>
<meta name="description">
<meta name="viewport">
```

Each page should have a unique title.

Examples:

```text
Brand Name | African Native Attire
Shop | Brand Name
Collections | Brand Name
About Us | Brand Name
Lookbook | Brand Name
Contact | Brand Name
```

---

# 36. Mock Data

Create realistic product data.

Example:

```javascript
{
    id: 1,
    name: "Royal Burgundy Agbada",
    slug: "royal-burgundy-agbada",
    price: 180000,
    category: "Agbada",
    collection: "Traditional",
    gender: "Men",
    images: [],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Burgundy", "Black"],
    description: "...",
    featured: true,
    newArrival: true
}
```

Create at least:

```text
20–30 products
8–10 collections
6 testimonials
10 FAQs
```

Use image URLs/placeholders that can easily be replaced with real assets later.

---

# 37. React Architecture

Use reusable components rather than putting everything inside page components.

For example:

```jsx
<ProductCard product={product} />
```

rather than duplicating product markup.

Use:

```text
ProductCard
ProductGrid
Button
Modal
SectionTitle
Navbar
Footer
```

throughout the application.

---

# 38. State Management

Do not introduce Redux.

Use React:

```text
Context API
useState
useReducer
useMemo
useEffect
```

Cart:

```text
CartContext
```

Search/filter state should remain local to the Shop page unless shared state is genuinely required.

---

# 39. Routing

Use React Router.

Routes:

```text
/
 /shop
 /collections
 /collections/:slug
 /product/:slug
 /about
 /lookbook
 /services
 /contact
 /faq
 /cart
 /404
```

---

# 40. Loading & Empty States

Create polished states.

### Empty search

```text
NO PRODUCTS FOUND

We couldn't find anything matching your search.

[VIEW ALL PRODUCTS]
```

### Empty cart

```text
YOUR BAG IS EMPTY

Discover our latest African fashion pieces.

[START SHOPPING]
```

---

# 41. Error Handling

Create a custom 404 page.

Example:

```text
404

PAGE NOT FOUND

The page you're looking for doesn't exist.

[BACK HOME]
```

Also handle:

- Invalid product slug
- Invalid collection slug
- Empty search
- Missing product images

---

# 42. Performance

The AI agent should:

- Lazy-load images
- Lazy-load routes where appropriate
- Avoid unnecessary re-renders
- Use responsive image sizing
- Avoid huge image files
- Use `loading="lazy"` where appropriate
- Keep dependencies minimal

---

# 43. Image Requirements

The visual quality of this website depends heavily on imagery.

Use high-quality African fashion imagery showing:

- Agbada
- Senator wear
- Kaftans
- Ankara
- Lace
- Embroidery
- Traditional attire
- Modern African fashion
- Weddings
- Cultural events
- Fashion editorial photography

Images should feel consistent in:

- Lighting
- Composition
- Color
- Photography style

---

# 44. Implementation Order for the AI Agent

The AI agent should not build everything at once.

Follow these phases exactly.

## Phase 1 — Project Setup

1. Create Vite React project.
2. Configure Tailwind.
3. Configure React Router.
4. Install Lucide React.
5. Create folder structure.
6. Configure global colors.
7. Configure fonts.
8. Create global CSS.
9. Verify application runs.

---

## Phase 2 — Design System

Create:

```text
Button
Typography
SectionTitle
Badge
Modal
Input
Select
Breadcrumb
```

Define reusable colors and spacing.

Verify these components before continuing.

---

## Phase 3 — Global Layout

Build:

```text
AnnouncementBar
Navbar
MobileMenu
Footer
```

Test:

- Desktop
- Tablet
- Mobile
- Scrolling
- Mobile menu

---

## Phase 4 — Data Layer

Create:

```text
products.js
collections.js
testimonials.js
faqs.js
navigation.js
```

Populate realistic mock data.

No backend.

---

## Phase 5 — Product Components

Build:

```text
ProductCard
ProductGrid
ProductGallery
ProductInfo
ProductFilters
```

Make them reusable.

---

## Phase 6 — Home Page

Build in this order:

```text
Hero
Featured Collections
Featured Products
Brand Story
Why Choose Us
Lookbook Preview
Testimonials
Instagram Gallery
Newsletter
```

Then test the entire page responsively.

---

## Phase 7 — Shop

Implement:

```text
Product listing
Search
Filtering
Sorting
Pagination/load more
Responsive filters
```

All functionality should work using local React state.

---

## Phase 8 — Product Details

Implement:

```text
Dynamic product routing
Image gallery
Lightbox
Size selection
Color selection
Quantity
Add to cart
Related products
```

---

## Phase 9 — Cart

Implement:

```text
CartContext
Add to cart
Remove
Quantity changes
Subtotal
Total
localStorage
Cart drawer
Cart page
```

Test refresh persistence.

---

## Phase 10 — Remaining Pages

Build:

```text
Collections
Collection Details
About
Services
Lookbook
Contact
FAQ
404
```

---

## Phase 11 — Responsive Optimization

Test every page at:

```text
375px
390px
768px
1024px
1280px
1440px
1920px
```

Fix:

- Overflow
- Typography
- Spacing
- Image cropping
- Navigation
- Product grids
- Buttons
- Forms

---

## Phase 12 — Accessibility

Audit:

- Keyboard navigation
- Focus states
- Alt text
- Form labels
- Button labels
- Modal accessibility
- Contrast
- Heading hierarchy

---

## Phase 13 — Performance

Optimize:

- Images
- React rendering
- Bundle size
- Lazy loading
- Route loading

---

## Phase 14 — Final UI Polish

Review the entire website for:

- Consistent spacing
- Consistent typography
- Consistent buttons
- Consistent colors
- Consistent image ratios
- Animation consistency
- Mobile experience

The final design should feel like a premium African fashion brand, not a generic Tailwind template.

---

# 45. Final Acceptance Checklist

The AI agent should not consider the project complete until all of these work.

### Navigation

- [ ] Desktop navigation
- [ ] Mobile navigation
- [ ] Sticky navbar
- [ ] Active navigation states

### Home

- [ ] Hero
- [ ] Collections
- [ ] Featured products
- [ ] Story
- [ ] Services
- [ ] Lookbook
- [ ] Testimonials
- [ ] Newsletter

### Shop

- [ ] Search
- [ ] Filtering
- [ ] Sorting
- [ ] Product cards
- [ ] Responsive grid

### Product

- [ ] Dynamic routing
- [ ] Gallery
- [ ] Lightbox
- [ ] Sizes
- [ ] Colors
- [ ] Quantity
- [ ] Add to cart

### Cart

- [ ] Cart context
- [ ] Add/remove
- [ ] Quantity
- [ ] Totals
- [ ] localStorage
- [ ] Cart drawer
- [ ] Empty state

### Other Pages

- [ ] Collections
- [ ] About
- [ ] Services
- [ ] Lookbook
- [ ] Contact
- [ ] FAQ
- [ ] 404

### Quality

- [ ] Responsive
- [ ] Accessible
- [ ] SEO metadata
- [ ] Fast
- [ ] No console errors
- [ ] No broken links
- [ ] No placeholder text left unintentionally
- [ ] No unfinished components
- [ ] No backend/API dependencies

---

# 46. Agent Execution Rules

The AI coding agent must follow these rules throughout implementation:

1. Work phase-by-phase in the order specified above.
2. Do not skip directly to later phases.
3. Before moving to the next phase, verify that the current phase works.
4. Do not introduce a backend or API.
5. Do not introduce TypeScript.
6. Do not add unnecessary dependencies.
7. Reuse existing components instead of duplicating UI.
8. Keep product and collection content in the `data/` directory.
9. Keep business logic separate from presentation components.
10. Use the brand color `#5D092A` consistently.
11. Maintain the premium African fashion aesthetic throughout the application.
12. Make every page responsive.
13. Avoid placeholder-looking UI in the final result.
14. Use realistic content and imagery.
15. Do not leave TODO comments for core functionality.
16. Do not mark a phase complete if it contains broken functionality.
17. Test routes after implementing them.
18. Test cart persistence after implementing localStorage.
19. Check the browser console for errors before declaring completion.
20. At the end, perform a complete application-wide UI and functionality audit.

## Definition of Done

The project is complete only when:

- Every listed route works.
- Every navigation link works.
- Product search works.
- Product filtering works.
- Product sorting works.
- Product detail pages work.
- Product galleries work.
- Lightboxes work.
- Cart functionality works.
- Cart persists after refresh.
- Contact and newsletter forms validate and show frontend-only success states.
- FAQ accordion works.
- Lookbook filtering works.
- Mobile navigation works.
- Responsive layouts work.
- There are no obvious visual inconsistencies.
- There are no browser console errors.
- The application can run with the documented npm commands.
- The final result looks like a polished premium African fashion brand website.
