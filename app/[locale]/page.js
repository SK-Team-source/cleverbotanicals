import Link from 'next/link';
import { getProducts, collections } from '../../lib/shopify';
import { t } from '../../lib/i18n';
import ProductCard from '../../components/ProductCard';

export default async function Home({ params }) {
  const { locale } = await params;
  const d = t(locale);
  const products = await getProducts();
  const featuredCollections = collections.filter((collection) => collection.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <img
            src="/autumn-lakeside-banner.png"
            alt="Two friends sharing a quiet outdoor moment"
            fetchPriority="high"
          />
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow light">{d.heroEyebrow}</span>
            <h1>{d.heroTitle} <em>{d.heroTitleEm}</em></h1>
            <p>{d.heroDescription}</p>
            <div className="hero-actions">
              <Link className="btn btn-light" href={`/${locale}/products`}>
                {d.discover} <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="btn btn-outline"
                href="https://cleverbotanics.com/collections/most-popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                {d.originalStore} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark" aria-hidden="true">✳</span>
              {d.heroNote}
            </div>
          </div>
          <div className="hero-image-caption">
            <span>{d.heroCaption}</span>
            <span>01 — 04</span>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label={d.commitments}>
        <div className="container trust-bar-inner">
          {d.trustPoints.map((point, index) => (
            <div className="trust-point" key={point}>
              <span className="trust-point-number">0{index + 1}</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section collection-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{d.collectionEyebrow}</span>
              <h2>{d.collectionHeading}</h2>
            </div>
            <p>{d.collectionIntro}</p>
          </div>
          <div className="category-grid">
            {featuredCollections.map((collection, index) => (
              <Link
                key={collection.handle}
                className={`category-card category-${collection.handle}`}
                href={`/${locale}/collections/${collection.handle}`}
              >
                <img
                  className="category-card-image"
                  src={collection.image}
                  alt=""
                  loading="lazy"
                />
                <span className="category-number">0{index + 1} / COLLECTION</span>
                <div className="category-card-content">
                  <p>{d.collections[collection.handle]?.[1] || collection.description}</p>
                  <h3>{d.collections[collection.handle]?.[0] || collection.title}</h3>
                  <span className="category-card-link">{d.browse} <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream product-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{d.featuredEyebrow}</span>
              <h2>{d.featured}</h2>
            </div>
            <Link className="text-link section-all-link" href={`/${locale}/products`}>
              {d.all} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
          {products.some((product) => product.isPreview) && (
            <p className="catalogue-caption">{d.catalogueUnavailable}</p>
          )}
        </div>
      </section>

      <section className="story-strip">
        <div className="container story-grid">
          <div>
            <span className="eyebrow light">{d.storyEyebrow}</span>
            <h2>{d.storyTitle} <em>{d.storyTitleEm}</em></h2>
          </div>
          <div>
            <p>{d.storyDescription}</p>
            <Link className="btn btn-light" href={`/${locale}/about`}>
              {d.getToKnow} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="review-strip">
        <div className="container review-strip-inner">
          <div>
            <span className="eyebrow">{d.reviewEyebrow}</span>
            <h2>{d.reviewTitle}</h2>
          </div>
          <a
            className="review-link"
            href="https://uk.trustpilot.com/review/cleverbotanics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="review-stars" aria-label={d.fiveStars}>★★★★★</span>
            <span>{d.readReviews} <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>
    </>
  );
}
