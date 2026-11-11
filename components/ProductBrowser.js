'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { getCollectionText, t } from '../lib/i18n';

export default function ProductBrowser({ products, locale }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const d = t(locale);
  const categories = useMemo(
    () => ['all', ...new Set(products.flatMap((product) => product.collections || [product.collection])
      .filter((collection) => collection && collection !== 'all'))],
    [products],
  );
  const visibleProducts = products.filter((product) =>
    (category === 'all' || (product.collections || [product.collection]).includes(category)) &&
    `${product.title} ${product.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="filters">
        <input
          aria-label={d.search}
          placeholder={`${d.search}…`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          aria-label={d.filterCollection}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((handle) => (
            <option key={handle} value={handle}>
              {handle === 'all'
                ? d.all
                : getCollectionText(locale, handle, { title: handle.replaceAll('-', ' ') }).title}
            </option>
          ))}
        </select>
      </div>
      {visibleProducts.length ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <p>{d.noResults}</p>
      )}
    </>
  );
}
