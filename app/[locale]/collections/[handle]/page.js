import {notFound} from 'next/navigation';
import ProductBrowser from '../../../../components/ProductBrowser';
import {collections,getProducts} from '../../../../lib/shopify';
import {getCollectionText,t} from '../../../../lib/i18n';

export default async function Collection({params}) {
  const {locale,handle}=await params;
  const col=collections.find(c=>c.handle===handle);
  if(!col)notFound();
  const d=t(locale);
  const collectionText=getCollectionText(locale,handle,col);
  const all=await getProducts();
  const products=handle==='all'?all:all.filter(p=>(p.collections||[p.collection]).includes(handle));

  return (
    <section className="section page-section collection-page">
      <div className="container">
        <div className={`collection-intro ${handle === 'most-popular' ? 'collection-intro-most-popular' : ''}`}>
          {col.image && (
            <img
              src={col.image}
              alt={handle === 'most-popular' ? 'Botanical CBD products from Clever Botanics' : ''}
              className="collection-intro-image"
            />
          )}
          <div className="collection-intro-copy">
            <span className="eyebrow">{d.collectionLabel}</span>
            <h1>{collectionText.title}</h1>
            <p>{collectionText.description}</p>
          </div>
        </div>
        <ProductBrowser products={products} locale={locale}/>
        <p className="notice">{d.collectionNotice} <a href={`https://cleverbotanics.com/collections/${handle}`} target="_blank" rel="noopener noreferrer">Shopify ↗</a>.</p>
      </div>
    </section>
  );
}
