import Link from 'next/link';
import { locales, t } from '../lib/i18n';

export default function Header({ locale }) {
  const d = t(locale);

  return (
    <>
      <div className="announcement">{d.announcement}</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href={`/${locale}`} aria-label="Clever Botanics home">
            <img
              src="https://cleverbotanics.com/cdn/shop/files/Logo_V1_5c690010-a4e8-4841-8086-c67ff47d044d_215x@2x.png?v=1613713064"
              alt="Clever Botanics"
            />
          </Link>
          <nav className="nav">
            <Link href={`/${locale}/products`}>{d.shop}</Link>
            <Link href={`/${locale}/collections/most-popular`}>{d.mostPopular}</Link>
            <Link href={`/${locale}/about`}>{d.about}</Link>
            <Link href={`/${locale}/contact`}>{d.contact}</Link>
          </nav>
          <div className="header-actions">
            <div className="lang-links">
              {locales.map((language) => (
                <Link
                  key={language}
                  href={`/${language}`}
                  aria-label={`${d.switchLanguage} ${language}`}
                  className={language === locale ? 'active' : ''}
                >
                  {language.toUpperCase()}
                </Link>
              ))}
            </div>
            <a
              className="header-shop"
              href="https://cleverbotanics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.onlineStore} ↗
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
