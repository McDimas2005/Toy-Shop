# Toy Shop / HI-Toyz Store

Toy Shop / HI-Toyz Store is a static multi-page toy store website built with HTML, CSS, and vanilla JavaScript. The project presents a playful storefront experience with products, gallery highlights, events, promotions, and a registration page.

Live demo: https://mcdimas2005.github.io/Toy-Shop/  
Repository: https://github.com/McDimas2005/Toy-Shop
Figma: https://www.figma.com/file/0cGPCYdVsj3gPLsEF0ryLU/HCI-AOL-_FIGMA_Michael-Dimas-Chrispradipta_2602132154?type=design&t=6N8fjbxGCH9qqELy-1 

## Preview

![HI-Toyz Store Preview](Pic/toystore.jpg)

## Project Background

This website was created as an HCI/front-end project for a toy store concept. The implementation is based on the original Figma design and project documentation, then enhanced for responsiveness, interaction polish, accessibility, and GitHub Pages deployment readiness.

## Features

- Homepage with hero story section, popular products, partner logos, tagline image section, and footer
- Products page with category cards, search field, sort/filter/favorite controls, product cards, Buy Now buttons, and Load More button
- Gallery page with Gallery Hall sections and visual store/customer highlights
- Events page with event categories, schedule input, upcoming event cards, discount information, and action buttons
- Register page with visual join section and vanilla JavaScript form validation
- Responsive layout for mobile, tablet, desktop, ultra-wide, and 4K-style screens
- Interactive UI elements with hover, focus, and pressed states
- Smooth scroll reveal animations and CSS transitions
- Accessibility polish including focus-visible states, touch-friendly controls, and reduced-motion support

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Page Overview

- `index.html` - Homepage
- `Productspage.html` - Products catalog page
- `GalleryPage.html` - Gallery page
- `EventsPage.html` - Events and promotions page
- `Registerpage.html` - Registration page

## Folder and File Structure

```text
Toy-Shop/
├── index.html
├── Productspage.html
├── GalleryPage.html
├── EventsPage.html
├── Registerpage.html
├── DHomepage.css
├── DProductpage.css
├── DGallerypage.css
├── DEventspage.css
├── DRegisterpage.css
├── enhancements.css
├── enhancements.js
├── scriptEvent.js
├── scriptRegister.js
├── Pic/
│   └── Project images, icons, logos, and visual assets
└── DOCS/
    └── Original design and documentation references
```

## How to Run Locally

From the repository root, run:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Deployment

The site is deployed through GitHub Pages from the `main` branch using the repository root as the publishing source. Keep `index.html` at the root so the GitHub Pages URL resolves correctly.

## Enhancement Notes

- Added responsive overrides using fluid sizing, max-width containers, responsive grids, and mobile-friendly stacking behavior
- Improved product cards, gallery cards, event cards, category tiles, partner logos, buttons, form inputs, social icons, and navigation interactions
- Added a lightweight vanilla JavaScript hamburger menu for small screens
- Added IntersectionObserver-based scroll reveal animations with reduced-motion support
- Improved image scaling, focus states, touch targets, and layout overflow behavior
- Fixed script loading compatibility for GitHub Pages and preserved relative asset paths

## Author

Michael Dimas Chrispradipta  
GitHub: [McDimas2005](https://github.com/McDimas2005)

## License

For educational and portfolio purposes.
