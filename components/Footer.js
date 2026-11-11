import Link from 'next/link';
import { t } from '../lib/i18n';

export default function Footer({ locale }) {
  const d = t(locale);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <img className="footer-brand-logo" src="/clever-botanics-footer-logo.webp" alt="Clever Botanics" />
          </div>
          <p>{d.footerDescription}</p>
        </div>
        <div>
          <h4>{d.explore}</h4>
          <Link href={`/${locale}/products`}>{d.all}</Link>
          <Link href={`/${locale}/about`}>{d.about}</Link>
          <Link href={`/${locale}/contact`}>{d.contact}</Link>
        </div>
        <div>
          <h4>{d.store}</h4>
          <a href="https://cleverbotanics.com/" target="_blank" rel="noopener noreferrer">
            {d.shopifyStore} ↗
          </a>
          <a href="https://cleverbotanics.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
            {d.privacyPolicy} ↗
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Clever Botanics · {d.footerNotice}
      </div>
    </footer>
  );
}
