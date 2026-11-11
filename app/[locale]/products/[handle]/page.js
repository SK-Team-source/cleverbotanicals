import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProduct, getProducts } from '../../../../lib/shopify';
import { getCurrencyLocale, t } from '../../../../lib/i18n';
import ProductCard from '../../../../components/ProductCard';

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  return {
    title: product?.title || 'Product',
    description: product?.description || 'Clever Botanics product',
    alternates: { canonical: product?.url },
  };
}

export default async function Product({ params }) {
  const { locale, handle } = await params;
  const allProducts = await getProducts();
  const product = allProducts.find((item) => item.handle === handle);
  if (!product) notFound();

  const d = t(locale);
  const productCollections = (product.collections || [product.collection])
    .filter((collection) => collection && collection !== 'all');
  const relatedProducts = allProducts
    .filter((item) => item.handle !== product.handle)
    .filter((item) => {
      const collections = item.collections || [item.collection];
      return collections.some((collection) => productCollections.includes(collection));
    })
    .slice(0, 4);
  const recommendations = relatedProducts.length
    ? relatedProducts
    : allProducts.filter((item) => item.handle !== product.handle).slice(0, 4);
  const descriptionWords = product.description?.trim().split(/\s+/) || [];
  const hasLongDescription = descriptionWords.length > 80;
  const descriptionExcerpt = hasLongDescription
    ? descriptionWords.slice(0, 80).join(' ')
    : product.description;
  const remainingDescription = hasLongDescription
    ? descriptionWords.slice(80).join(' ')
    : '';

  return (
    <section className="section page-section">
      <div className="container">
        <Link className="text-link" href={`/${locale}/products`}>
          ← {d.back}
        </Link>
        <div className="detail-grid">
          <div className="detail-image">
            {product.image ? (
              <img src={product.image} alt={product.alt || product.title} />
            ) : (
              <div className="image-placeholder">
                <span>CB</span>
                <small>{d.productImagePlaceholder}</small>
              </div>
            )}
          </div>
          <div>
            <span className="eyebrow">{d.productLabel}</span>
            <h1>{product.title}</h1>
            {product.description && (
              <div className="product-description">
                <p className="detail-desc">{descriptionExcerpt}</p>
                {hasLongDescription && (
                  <details className="product-description-more">
                    <summary>{d.readFullDescription}</summary>
                    <p className="detail-desc">{remainingDescription}</p>
                  </details>
                )}
              </div>
            )}
            {product.price && (
              <p className="price">
                {new Intl.NumberFormat(getCurrencyLocale(locale), {
                  style: 'currency',
                  currency: product.price.currencyCode,
                }).format(Number(product.price.amount))}
              </p>
            )}
            <a
              className="btn btn-dark"
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.purchase} ↗
            </a>
            <p className="small-muted">{d.variantNotice}</p>
          </div>
        </div>
        {recommendations.length > 0 && (
          <section className="related-products" aria-labelledby="related-products-heading">
            <div className="section-heading">
              <div>
                <span className="eyebrow">{d.relatedEyebrow}</span>
                <h2 id="related-products-heading">{d.relatedHeading}</h2>
              </div>
            </div>
            <div className="product-grid">
              {recommendations.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
