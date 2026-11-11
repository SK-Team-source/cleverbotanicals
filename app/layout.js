import './globals.css';
import './storefront.css';

export const metadata = {
  metadataBase: new URL('https://cleverbotanicals.com'),
  title: {
    default: 'Clever Botanics | Botanical Discovery',
    template: '%s | Clever Botanics',
  },
  description:
    'Explore the Clever Botanics product collection. Browse products and complete purchases on the official Shopify store.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
