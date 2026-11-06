# STUDIO / 01 — Demo storefront

A fictional, frontend-only React/Vite commerce demo. No real payment is taken and no order is sent to a server.

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL printed by Vite.

## Stack
- React + JavaScript, Vite, React Router
- Tailwind CSS (included in the build pipeline) and a custom responsive design system
- Lucide React icons
- Browser localStorage for demo bag and wishlist persistence

## Features
- Responsive storefront, category collections, search, sorting and color filtering
- Product detail pages, gallery thumbnails, size selection and size guide
- Bag drawer and dedicated bag route; quantity changes, remove, subtotal and persistence
- Wishlist persistence, demo checkout validation and simulated confirmation
- Newsletter feedback, empty states, toast notifications, mobile navigation
- Mock/live service boundary and centralized API client

## Backend integration map
Set `VITE_API_BASE_URL` to your Spring Boot API base URL. `src/services/apiClient.js` centralizes fetch, JSON parsing and errors. `productService.js` is currently backed by local mock data; replace its methods with API calls:
- `getProducts` / `searchProducts` → `GET /api/products`
- `getProduct` → `GET /api/products/{id}`
- `getCategories` → `GET /api/categories`
- `submitOrder` → `POST /api/orders` (connect payment provider separately; never trust client totals)

Recommended future endpoints: inventory/availability, customer authentication, order history, address book and payment-provider session creation. Do not store payment details in this frontend.

## QA checklist
- [x] Home, collection, product, wishlist, bag, checkout and not-found routes
- [x] Search query, category navigation, sort and color filter
- [x] Product gallery, size selection, size guide and add-to-bag validation
- [x] Bag quantity, removal, subtotal and localStorage persistence
- [x] Wishlist persistence and demo order confirmation
- [x] Responsive navigation and keyboard focus states
- [ ] Real device/browser QA and live Spring Boot contract testing
- [ ] Real inventory, shipping rates, tax calculation, authentication and payment integration

## Notes / limitations
- Product imagery is loaded from Unsplash URLs; internet access is required for remote images.
- Product variants and stock are illustrative mock data, not live inventory.
- Checkout submits only to a local demo service and never charges money.
- The size chart is a generic illustrative guide; replace with brand-specific measurements.
