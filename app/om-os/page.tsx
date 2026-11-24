
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./OmOs.module.scss";

export const metadata: Metadata = {
  title: "Om os | BM Gulvservice",
  description:
    "Lær BM Gulvservice at kende. Vi tilbyder professionel gulvafslibning og gulvbehandling med fokus på kvalitet, erfaring og holdbare resultater.",
};

const values = [
  {
    number: "01",
    title: "Kvalitet i fokus",
    description:
      "Vi går aldrig på kompromis med kvaliteten. Vi anvender professionelle maskiner og nøje udvalgte materialer for at sikre et flot og holdbart resultat.",
  },
  {
    number: "02",
    title: "Personlig service",
    description:
      "Vi tager os tid til at forstå dine ønsker og behov. Gennem god dialog og tæt samarbejde sikrer vi en løsning, der passer til dit projekt.",
  },
  {
    number: "03",
    title: "Erfaring og præcision",
    description:
      "Med mange års erfaring og moderne teknikker udfører vi vores arbejde med stor omhu og sans for detaljen.",
  },
];

const steps = [
  {
    number: "01",
    title: "Indledende konsultation",
    description:
      "Vi starter med en grundig samtale, hvor vi lytter til dine ønsker og behov og finder den rette løsning til dit gulvprojekt.",
  },
  {
    number: "02",
    title: "Udførelse med fokus på kvalitet",
    description:
      "Vi udfører arbejdet professionelt og effektivt med fokus på godt håndværk, præcision og et flot resultat.",
  },
  {
    number: "03",
    title: "Afslutning og opfølgning",
    description:
      "Når arbejdet er færdigt, gennemgår vi resultatet sammen med dig for at sikre, at du er tilfreds med det udførte arbejde.",
  },
];

export default function OmOsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            BM GULVSERVICE
          </span>

          <h1>
            Om <span>os</span>
          </h1>

          <p>
            Professionelt håndværk, personlig service
            og kvalitet, der holder.
          </p>

          <div className={styles.breadcrumb}>
            <Link href="/">Forside</Link>
            <span>/</span>
            <span>Om os</span>
          </div>
        </div>

        <div className={styles.heroBadge}>
          <strong>20+</strong>
          <span>Års erfaring</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutVisual}>
          <div className={styles.visualMain}>
            <span className={styles.visualLabel}>
              BM GULVSERVICE
            </span>

            <span className={styles.visualText}>
              Håndværk med
              <br />
              præcision og passion.
            </span>
          </div>

          <div className={styles.visualAccent}>
            <strong>15.000+</strong>
            <span>Gennemførte projekter</span>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <span className={styles.eyebrow}>
            HVEM ER VI?
          </span>

          <h2>
            Vi skaber smukke gulve med
            <span> erfaring og passion</span>
          </h2>

          <p>
            Hos BM Gulvservice er vi dedikerede til at
            levere professionel gulvafslibning,
            gulvbehandling og malerarbejde med fokus
            på kvalitet, præcision og holdbarhed.
          </p>

          <p>
            Med mange års erfaring inden for
            gulvafslibning og malerarbejde har vi
            opbygget en stærk ekspertise. Vi ved,
            at hvert projekt er unikt, og derfor
            tilpasser vi altid vores løsninger til
            kundens ønsker, behov og gulvets tilstand.
          </p>

          <p>
            Vi anvender moderne teknikker,
            professionelle maskiner og
            kvalitetsmaterialer for at sikre et
            resultat, der både er smukt og
            langtidsholdbart.
          </p>

          <p>
            Vores mål er at gøre hele processen
            enkel, tryg og gennemsigtig – fra første
            kontakt til det færdige resultat.
          </p>

          <Link
            href="/kontakt"
            className={styles.primaryButton}
          >
            Kontakt os
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.statsIntro}>
          <span className={styles.eyebrow}>
            VORES ERFARING
          </span>

          <h2>
            Resultater bygget på
            <span> kvalitet</span>
          </h2>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <strong>20+</strong>
            <span>Års erfaring</span>
          </div>

          <div className={styles.statItem}>
            <strong>15.000+</strong>
            <span>Gennemførte projekter</span>
          </div>

          <div className={styles.statItem}>
            <strong>100%</strong>
            <span>Tilfredse kunder</span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className={styles.approach}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            VORES TILGANG
          </span>

          <h2>
            Kvalitet, der <span>holder</span>
          </h2>

          <p>
            Vi tror på godt håndværk, god kommunikation
            og løsninger, der holder i mange år.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <article
              className={styles.valueCard}
              key={value.number}
            >
              <span className={styles.valueNumber}>
                {value.number}
              </span>

              <h3>{value.title}</h3>
              <p>{value.description}</p>

              <span className={styles.cardArrow}>
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyContent}>
          <span className={styles.eyebrow}>
            HVORFOR VÆLGE OS?
          </span>

          <h2>
            Førsteklasses gulvarbejde
            med fokus på <span>tryghed</span>
          </h2>

          <p>
            Vi ønsker, at du skal føle dig tryg gennem
            hele processen. Derfor kombinerer vi
            professionelt håndværk med personlig
            service og gennemsigtig kommunikation.
          </p>

          <ul>
            <li>
              <span>✓</span>
              Professionel rådgivning og personlig service
            </li>

            <li>
              <span>✓</span>
              Moderne maskiner og kvalitetsmaterialer
            </li>

            <li>
              <span>✓</span>
              Fokus på detaljer og holdbare resultater
            </li>

            <li>
              <span>✓</span>
              3 års garanti på gulvarbejde
            </li>
          </ul>
        </div>

        <div className={styles.guaranteeCard}>
          <span className={styles.guaranteeIcon}>
            ✓
          </span>

          <strong>3 ÅR</strong>

          <h3>Garanti på gulvarbejde</h3>

          <p>
            Vi står inde for kvaliteten af vores
            arbejde og har fokus på holdbare løsninger.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            SÅDAN ARBEJDER VI
          </span>

          <h2>
            Fra første kontakt
            <span> til færdigt gulv</span>
          </h2>

          <p>
            En enkel og overskuelig proces med dig
            i centrum hele vejen.
          </p>
        </div>

        <div className={styles.processGrid}>
          {steps.map((step) => (
            <article
              className={styles.processCard}
              key={step.number}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>
            BM GULVSERVICE
          </span>

          <h2>
            Skal vi hjælpe med dit
            <span> næste projekt?</span>
          </h2>

          <p>
            Kontakt os i dag for en uforpligtende
            snak om dine muligheder.
          </p>
        </div>

        <Link
          href="/kontakt"
          className={styles.ctaButton}
        >
          Få et uforpligtende tilbud
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}
