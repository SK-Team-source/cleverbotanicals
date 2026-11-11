# Clever Botanicals — Next.js catalogue

A runnable Next.js App Router JavaScript-only product catalogue for **cleverbotanicals.com**, with purchase links to **cleverbotanics.com** (Shopify).

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Deploy to Vercel by importing the repository and adding environment variables.

## Shopify live catalogue

The catalogue loads the public Shopify product feed, including product images, prices, availability and all published products, without requiring an API token. Product cards link directly to their product pages on the original Shopify store.

Optionally configure a **Storefront API access token** using `SHOPIFY_STOREFRONT_ACCESS_TOKEN` for Storefront API data. This integration paginates through the full product catalogue. Set `SHOPIFY_STORE_DOMAIN` if needed. If the Storefront API is unavailable, the server tries the public product feed before showing a limited preview.

## Routes

- `/` redirects to `/en`
- `/{locale}` home
- `/{locale}/products` searchable/filterable catalogue
- `/{locale}/products/{handle}` product details
- `/{locale}/collections/{handle}` collections
- `/{locale}/about` and `/{locale}/contact`

`locale` can be `en`, `fr`, `de`, `es`. Interface strings have draft translations; **product content is English until Shopify localized translations are implemented**. Do not market these as fully translated locales yet. For production, consider restricting published locales to English until localized content is approved.

## Before production

1. Verify all product links, product imagery, and product collection filters.
2. Confirm Storefront API access and public product feed behavior in production.
3. Confirm Shopify contact link and original brand content, policies, and footer information.
4. Complete original-site page/content migration and obtain approved original homepage banners.
5. Review UK/EU CBD marketing, age restrictions and regional rules.
6. Choose an SEO canonical/indexing policy for duplicated Shopify product pages.
7. Add real localized product descriptions and correct language-specific checkout routing before enabling non-English locales.
8. Run `npm run build`, check Vercel logs, and validate domain DNS.

## Important

This is a working **starter project**, not a verified pixel-perfect copy or full live-site migration. The original media assets cannot be packaged from the sites in this environment. No fake products, prices or images are used.
