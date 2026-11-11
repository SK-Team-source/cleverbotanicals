const STORE='https://cleverbotanics.com';
const domain=process.env.SHOPIFY_STORE_DOMAIN||'cleverbotanics.com';
const token=process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const version=process.env.SHOPIFY_API_VERSION||'2025-07';
export const collections=[
 {handle:'oil-concentrates',title:'CBD Oil & Concentrates',description:'Thoughtfully selected oils and concentrates',image:'https://cleverbotanics.com/cdn/shop/products/DSC06254_400x.jpg?v=1605861710',featured:true},
 {handle:'cbd-flowers-herbs',title:'CBD Hemp Flowers',description:'Organic hemp flowers and herbs',image:'https://cleverbotanics.com/cdn/shop/files/Cannatonic_CBD_Flower_High_Entourage_Effect1_400x.webp?v=1772960876',featured:true},
 {handle:'vape-organic-terpenes',title:'CBD Bundles & Vape',description:'Botanical bundles, aromas and more',image:'https://cleverbotanics.com/cdn/shop/products/Indica_Bundle_400x.jpg?v=1772964414',featured:true},
 {handle:'outlet',title:'CBD Outlet & Specials',description:'Explore seasonal offers and special finds',image:'https://cleverbotanics.com/cdn/shop/files/25mg_CBD_Gummies_400x.jpg?v=1772950744',featured:true},
 {handle:'cosmetics-skin-care',title:'Cosmetic & Skin Care',description:'Botanical balms and topical care',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/High_Entourage_CBD_balm_by_Eden_Aromata_400x.jpg?v=1773064320'},
 {handle:'wellness',title:'Botanical Wellness',description:'Everyday favourites from trusted suppliers',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/greensome_tea.jpg?v=1657634401'},
 {handle:'most-popular',title:'Most Popular',description:'Customer favourites from Clever Botanics',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/feat_product_3.jpg?v=1623329846'},
 {handle:'all',title:'All Products',description:'Discover the full Shopify range',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/1_db6af809-64f7-459e-b3a3-d94f9cff9ced.png?v=1793611612'}
];
const fallback=[
 {id:'cbd-softgels-with-melatonin-28-for-50-after-discount',handle:'cbd-softgels-with-melatonin-28-for-50-after-discount',title:'CBD Softgels with 1mg Melatonin',description:'A convenient capsule format from the Clever Botanics range.',image:'https://cleverbotanics.com/cdn/shop/files/CBD_Softgels_with_1mg_Melatonin_400x.jpg?v=1772951245',alt:'Close-up of CBD softgels with melatonin',price:null,available:null,collection:'most-popular',url:STORE+'/products/cbd-softgels-with-melatonin-28-for-50-after-discount'},
 {id:'natural-organic-cbd-oil-15-full-spectrum1500mg',handle:'natural-organic-cbd-oil-15-full-spectrum1500mg',title:'Eden Aromata Full Spectrum Organic CBD Oil',description:'Full-spectrum hemp oil from Eden Aromata, available in several sizes and strengths.',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/feat_product_3.jpg?v=1623329846',alt:'Eden Aromata hemp oil',price:null,available:null,collection:'oil-concentrates',url:STORE+'/products/natural-organic-cbd-oil-15-full-spectrum1500mg'},
 {id:'aromatic-balm',handle:'aromatic-balm',title:'Eden Aromata Aromatic CBD Balm',description:'A botanical balm from Eden Aromata for topical use.',image:'https://cleverbotanics.com/cdn/shop/files/High_Entourage_CBD_balm_by_Eden_Aromata_400x.jpg?v=1773064320',alt:'Eden Aromata CBD balm',price:null,available:null,collection:'cosmetics-skin-care',url:STORE+'/products/aromatic-balm'},
 {id:'flower-shake-and-kief',handle:'flower-shake-and-kief',title:'Hemp Flower Shake and Kief',description:'A hemp flower selection from Clever Botanics.',image:'https://cdn.shopify.com/s/files/1/0096/4748/9124/files/banner_hemp_slide_6.jpg?v=1623329846',alt:'Hemp flowers and botanicals',price:null,available:null,collection:'cbd-flowers-herbs',url:STORE+'/products/flower-shake-and-kief'},
 {id:'cbd-fruit-gummies',handle:'cbd-fruit-gummies',title:'25mg CBD Fruit Gummies',description:'Fruit-flavoured gummies from the Clever Botanics range.',image:'https://cleverbotanics.com/cdn/shop/files/25mg_CBD_Gummies_400x.jpg?v=1772950744',alt:'Assorted CBD fruit gummies',price:null,available:null,collection:'most-popular',url:STORE+'/products/cbd-fruit-gummies'},
 {id:'imperial-shiitake-organic-mushroom-powder',handle:'imperial-shiitake-organic-mushroom-powder',title:'Imperial Organic Mushroom Powder Blend with added CBD',description:'A seven-mushroom powder blend with added CBD.',image:'https://cleverbotanics.com/cdn/shop/files/Imperial_Organic_Mushroom_CBD_Powder_Blend_400x.png?v=1774501010',alt:'Organic mushroom powder blend with CBD',price:null,available:null,collection:'wellness',url:STORE+'/products/imperial-shiitake-organic-mushroom-powder'},
 {id:'eden-aromata-broad-spectrum-hemp-extract-oil-24-10ml-1200mg-cbd-high-strength-39-2-after-discount',handle:'eden-aromata-broad-spectrum-hemp-extract-oil-24-10ml-1200mg-cbd-high-strength-39-2-after-discount',title:'Super Strength 10ml Hemp Oil',description:'A compact hemp oil option from Eden Aromata.',image:'https://cleverbotanics.com/cdn/shop/products/DSC06394_400x.jpg?v=1580364353',alt:'Eden Aromata hemp extract oil',price:null,available:null,collection:'oil-concentrates',url:STORE+'/products/eden-aromata-broad-spectrum-hemp-extract-oil-24-10ml-1200mg-cbd-high-strength-39-2-after-discount'},
 {id:'eden-amorata-full-spectrum-organic-oil-12-30ml-1800mg-cbd-medium-strength',handle:'eden-amorata-full-spectrum-organic-oil-12-30ml-1800mg-cbd-medium-strength',title:'Full Spectrum Hemp Extract 12%',description:'Full-spectrum hemp extract oil from Eden Aromata.',image:'https://cleverbotanics.com/cdn/shop/products/FullSpectrum_400x.png?v=1605861712',alt:'Eden Aromata full-spectrum hemp extract oil',price:null,available:null,collection:'oil-concentrates',url:STORE+'/products/eden-amorata-full-spectrum-organic-oil-12-30ml-1800mg-cbd-medium-strength'}
];
const QUERY=`query Catalogue($first:Int!,$after:String){products(first:$first,after:$after,sortKey:TITLE){nodes{id handle title description featuredImage{url altText} availableForSale priceRange{minVariantPrice{amount currencyCode}} collections(first:10){nodes{handle title}}}pageInfo{hasNextPage endCursor}}}`;

function mapStorefrontProduct(product){
 const productCollections=product.collections?.nodes?.map(collection=>collection.handle)||[];
 return {
  id:product.id,
  handle:product.handle,
  title:product.title,
  description:product.description,
  image:product.featuredImage?.url||null,
  alt:product.featuredImage?.altText||product.title,
  price:product.priceRange?.minVariantPrice||null,
  available:product.availableForSale,
  collection:productCollections[0]||'all',
  collections:[...new Set([...productCollections,'all'])],
  url:STORE+'/products/'+encodeURIComponent(product.handle)
 };
}

function getPublicProductCollections(product){
 const tags=(product.tags||[]).map(tag=>tag.toLowerCase());
 const type=(product.product_type||'').toLowerCase();
 const title=product.title.toLowerCase();
 const searchable=[type,title,...tags].join(' ');
 const productCollections=['all'];

 if(/flower|hemp hash|hash|charas/.test(searchable)){
  productCollections.push('cbd-flowers-herbs');
 }
 if(/oil|concentrate|isolate|shatter|crumble/.test(searchable)){
  productCollections.push('oil-concentrates');
 }
 if(/vape|terpene|bundle/.test(searchable)){
  productCollections.push('vape-organic-terpenes');
 }
 if(/cosmetic|skin care|balm|beauty/.test(searchable)){
  productCollections.push('cosmetics-skin-care');
 }
 if(/edible|mushroom|tea|coffee|gumm|chocolate|wellness/.test(searchable)){
  productCollections.push('wellness');
 }
 if(tags.some(tag=>tag.includes('outlet'))){
  productCollections.push('outlet');
 }

 return productCollections;
}

function mapPublicProduct(product){
 const variants=product.variants||[];
 const lowestPrice=variants
  .map(variant=>Number(variant.price))
  .filter(Number.isFinite)
  .sort((a,b)=>a-b)[0];
 const image=product.images?.[0]||null;
 const productCollections=getPublicProductCollections(product);

 return {
  id:String(product.id),
  handle:product.handle,
  title:product.title,
  description:(product.body_html||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim(),
  image:image?.src||null,
  alt:image?.alt||product.title,
  price:lowestPrice===undefined?null:{amount:lowestPrice.toFixed(2),currencyCode:'GBP'},
  available:variants.some(variant=>variant.available),
  collection:productCollections.find(collection=>collection!=='all')||'all',
  collections:productCollections,
  url:STORE+'/products/'+encodeURIComponent(product.handle)
 };
}

async function getTokenProducts(){
 const products=[];
 let after=null;

 do{
  const res=await fetch(`https://${domain}/api/${version}/graphql.json`,{
   method:'POST',
   headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':token},
   body:JSON.stringify({query:QUERY,variables:{first:250,after}}),
   next:{revalidate:900}
  });
  if(!res.ok)throw Error('Shopify Storefront API response '+res.status);
  const data=await res.json();
  if(data.errors)throw Error('Shopify Storefront API returned GraphQL errors');
  const connection=data.data?.products;
  if(!connection)throw Error('Shopify Storefront API response did not include products');
  products.push(...connection.nodes.map(mapStorefrontProduct));
  after=connection.pageInfo.hasNextPage?connection.pageInfo.endCursor:null;
 }while(after);

 return products;
}

async function getPublicProducts(){
 const products=[];
 let page=1;

 while(true){
  const res=await fetch(`https://${domain}/products.json?limit=20&page=${page}`,{next:{revalidate:900}});
  if(!res.ok)throw Error('Shopify public catalogue response '+res.status);
  const data=await res.json();
  if(!Array.isArray(data.products))throw Error('Shopify public catalogue response did not include products');
  products.push(...data.products.map(mapPublicProduct));
  if(data.products.length<20)break;
  page+=1;
 }

 const popularHandles=new Set();
 try{
  page=1;
  while(true){
   const res=await fetch(`${STORE}/collections/most-popular/products.json?limit=20&page=${page}`,{next:{revalidate:900}});
   if(!res.ok)throw Error('Shopify Most Popular collection response '+res.status);
   const data=await res.json();
   if(!Array.isArray(data.products))throw Error('Shopify Most Popular response did not include products');
   data.products.forEach(product=>popularHandles.add(product.handle));
   if(data.products.length<20)break;
   page+=1;
  }
 }catch(error){
  console.error('Shopify Most Popular collection unavailable:',error.message);
 }

 for(const product of products){
  if(popularHandles.has(product.handle)){
   product.collections=[...new Set([...product.collections,'most-popular'])];
  }
 }

 return products;
}

export async function getProducts(){
 if(!token){
  try{
   return await getPublicProducts();
  }catch(error){
   console.error('Shopify public catalogue unavailable:',error.message);
   return fallback.map(product=>({...product,collections:[product.collection,'all'],isPreview:true}));
  }
 }

 try{
  return await getTokenProducts();
 }catch(error){
  console.error('Shopify Storefront API unavailable; trying public catalogue:',error.message);
  try{
   return await getPublicProducts();
  }catch(publicError){
   console.error('Shopify public catalogue unavailable:',publicError.message);
   return fallback.map(product=>({...product,collections:[product.collection,'all'],isPreview:true}));
  }
 }
}
export async function getProduct(handle){return (await getProducts()).find(x=>x.handle===handle)||null}
