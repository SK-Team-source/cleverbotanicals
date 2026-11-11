import Link from 'next/link';
import { getCollectionText, getCurrencyLocale, t } from '../lib/i18n';

export default function ProductCard({ product, locale }) {
  const d = t(locale);
  const productHref = `/${locale}/products/${product.handle}`;
  const category = getCollectionText(locale, product.collection, {
    title: product.collection?.replaceAll('-', ' ') || 'Clever Botanics',
  }).title;

  return (
    <article className="product-card">
      <Link href={productHref} className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.alt || product.title}
            loading="lazy"
          />
        ) : (
          <div className="image-placeholder">
            <span>CB</span>
            <small>{d.productPlaceholder}</small>
          </div>
        )}
        <span className="product-image-label">{d.productImageLabel}</span>
      </Link>
      <div className="product-info">
        <span className="eyebrow">{category}</span>
        <h3>
          <Link href={productHref}>{product.title}</Link>
        </h3>
        {product.price && (
          <p className="price">
            {new Intl.NumberFormat(getCurrencyLocale(locale), {
              style: 'currency',
              currency: product.price.currencyCode,
            }).format(Number(product.price.amount))}
          </p>
        )}
        <a
          className="text-link"
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {d.view} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
