import ProductBrowser from '../../../components/ProductBrowser';
import { getProducts } from '../../../lib/shopify';
import { t } from '../../../lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: t(locale).all };
}

export default async function Products({ params }) {
  const { locale } = await params;
  const products = await getProducts();
  const d = t(locale);

  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro">
          <span className="eyebrow">{d.catalogueLabel}</span>
          <h1>{d.all}</h1>
          <p>{d.browseCount(products.length)}</p>
        </div>
        <ProductBrowser products={products} locale={locale} />
        {products.some((product) => product.isPreview) && (
          <p className="notice">{d.previewNotice}</p>
        )}
      </div>
    </section>
  );
}
