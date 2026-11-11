import { t } from '../../../lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: t(locale).contact };
}

export default async function Contact({ params }) {
  const { locale } = await params;
  const d = t(locale);

  return (
    <section className="section page-section">
      <div className="container prose">
        <span className="eyebrow">{d.contactEyebrow}</span>
        <h1>{d.contactTitle}</h1>
        <p>{d.contactDescription}</p>
        <a
          className="btn btn-dark"
          href="https://cleverbotanics.com/pages/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          {d.contactStore} ↗
        </a>
        <p className="small-muted">{d.contactLinkNotice}</p>
      </div>
    </section>
  );
}
