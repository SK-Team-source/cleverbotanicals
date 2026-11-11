import { t } from '../../../lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { title: t(locale).about };
}

export default async function About({ params }) {
  const { locale } = await params;
  const d = t(locale);

  return (
    <section className="section page-section">
      <div className="container prose">
        <span className="eyebrow">{d.aboutEyebrow}</span>
        <h1>{d.aboutTitle}</h1>
        <p>{d.aboutParagraph1}</p>
        <p>{d.aboutParagraph2}</p>
        <a
          className="btn btn-dark"
          href="https://cleverbotanics.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {d.visitStore} ↗
        </a>
      </div>
    </section>
  );
}
