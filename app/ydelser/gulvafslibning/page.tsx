
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Gulvafslibning.module.scss";

export const metadata: Metadata = {
  title: "Gulvafslibning | Professionel gulvafslibning – BM Gulvservice",
  description:
    "Få professionel gulvafslibning hos BM Gulvservice. Vi fornyer slidte trægulve med kvalitetsbehandling, professionelt udstyr og 3 års garanti.",
};

const packages = [
  {
    number: "01",
    title: "Gulvafslibning",
    subtitle: "Let slibning",
    price: "65",
    features: [
      "Let slibning",
      "1 x lak",
      "Materialer inkluderet",
      "3 års garanti",
    ],
    featured: false,
  },
  {
    number: "02",
    title: "Gulvafslibning",
    subtitle: "& 3 x lak",
    price: "125",
    features: [
      "Fuldslibning",
      "Polering",
      "3 x lak",
      "Materialer inkluderet",
      "3 års garanti",
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Gulvafslibning",
    subtitle: "med olie",
    price: "145",
    features: [
      "Fuldslibning",
      "Polering",
      "Kvalitetsolie",
      "Materialer inkluderet",
      "3 års garanti",
    ],
    featured: false,
  },
];

const benefits = [
  {
    number: "01",
    title: "Forlæng gulvets levetid",
    description:
      "Regelmæssig gulvafslibning hjælper med at fjerne ridser, pletter og overfladisk slitage, så dine trægulve kan holde sig flotte i mange år.",
  },
  {
    number: "02",
    title: "Forny gulvets udseende",
    description:
      "Gulvafslibning giver træet nyt liv. Den behandlede overflade fremstår friskere, glattere og mere indbydende.",
  },
  {
    number: "03",
    title: "Fjern gammel behandling",
    description:
      "Vi fjerner gamle og misfarvede lak- eller oliebehandlinger, så gulvet er klar til en ny overfladebehandling.",
  },
  {
    number: "04",
    title: "Øg boligens værdi",
    description:
      "Velholdte trægulve kan forbedre boligens samlede udtryk og gøre en positiv forskel, hvis du ønsker at sælge din bolig.",
  },
];

const process = [
  {
    number: "01",
    title: "Vurdering af gulvet",
    description:
      "Vi vurderer gulvets tilstand, slid og tidligere behandling for at finde den rigtige løsning.",
  },
  {
    number: "02",
    title: "Professionel afslibning",
    description:
      "Vi sliber gulvet i flere omgange med professionelt udstyr og forskellige kornstørrelser for at opnå en ensartet overflade.",
  },
  {
    number: "03",
    title: "Polering og behandling",
    description:
      "Efter slibningen klargøres gulvet og behandles med den ønskede finish, eksempelvis lak, olie eller voks.",
  },
];

export default function GulvafslibningPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/service-gulvafslibning.jpg"
            alt="Professionel gulvafslibning af trægulv"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            BM GULVSERVICE · PROFESSIONEL GULVBEHANDLING
          </span>

          <h1>
            Professionel
            <span> gulvafslibning</span>
          </h1>

          <p>
            Forny dine trægulve og beskyt dit hjem.
            Vi giver slidte gulve nyt liv med professionelt
            håndværk og holdbare løsninger.
          </p>

          <div className={styles.heroActions}>
            <Link href="/kontakt" className={styles.primaryButton}>
              Få et gratis tilbud
              <span>↗</span>
            </Link>

            <a href="#priser" className={styles.secondaryButton}>
              Se vores priser
            </a>
          </div>

          <div className={styles.heroTrust}>
            <span>✓ 3 års garanti</span>
            <span>✓ Professionelt udstyr</span>
            <span>✓ Kvalitetsmaterialer</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introLabel}>
          <span className={styles.eyebrow}>GULVAFSLIBNING</span>
          <span className={styles.introLine} />
          <span className={styles.introSmall}>
            NYT LIV TIL DINE TRÆGULVE
          </span>
        </div>

        <div className={styles.introContent}>
          <h2>
            Giv dine gamle trægulve
            <span> nyt liv</span>
          </h2>

          <p>
            Er dine trægulve blevet slidte, matte eller har
            de synlige ridser? Med professionel gulvafslibning
            kan du få dine gulve til at fremstå som nye igen.
          </p>

          <p>
            Gulvafslibning er en effektiv måde at fjerne gammel
            lak, pletter og overfladiske skader på, samtidig
            med at træets naturlige skønhed kommer frem.
          </p>

          <p>
            Hos BM Gulvservice arbejder vi med moderne
            teknikker, professionelt udstyr og kvalitetsmaterialer
            for at sikre et flot og holdbart resultat.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricing} id="priser">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>VORES PRISER</span>

          <h2>
            Find den rette
            <span> gulvløsning</span>
          </h2>

          <p>
            Vi tilbyder forskellige løsninger afhængigt af
            gulvets tilstand og det ønskede resultat.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {packages.map((item) => (
            <article
              key={item.number}
              className={`${styles.priceCard} ${
                item.featured ? styles.featuredCard : ""
              }`}
            >
              {item.featured && (
                <span className={styles.popularLabel}>
                  POPULÆRT VALG
                </span>
              )}

              <span className={styles.packageNumber}>
                {item.number}
              </span>

              <h3>
                {item.title}
                <span>{item.subtitle}</span>
              </h3>

              <div className={styles.price}>
                <span>Fra</span>
                <strong>{item.price}</strong>
                <span>kr. / m²</span>
              </div>

              <span className={styles.vat}>
                Ekskl. moms
              </span>

              <div className={styles.packageDivider} />

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/kontakt" className={styles.priceButton}>
                Få et tilbud
                <span>↗</span>
              </Link>
            </article>
          ))}
        </div>

        <p className={styles.priceNote}>
          Alle priser er fra-priser pr. m² og ekskl. moms.
          Den endelige pris afhænger af gulvets tilstand og
          opgavens omfang. Kontakt os for et konkret tilbud.
        </p>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsVisual}>
          <Image
            src="/images/about-detail.jpg"
            alt="Detaljer i professionelt gulvarbejde"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />

          <div className={styles.visualBadge}>
            <strong>3 ÅR</strong>
            <span>Garanti på gulvarbejde</span>
          </div>
        </div>

        <div className={styles.benefitsContent}>
          <span className={styles.eyebrow}>
            FORDELENE VED GULVAFSLIBNING
          </span>

          <h2>
            Mere end bare
            <span> et flot gulv</span>
          </h2>

          <p className={styles.benefitsIntro}>
            Professionel gulvafslibning handler både om
            udseende, beskyttelse og gulvets levetid.
          </p>

          <div className={styles.benefitList}>
            {benefits.map((benefit) => (
              <article
                className={styles.benefitItem}
                key={benefit.number}
              >
                <span className={styles.benefitNumber}>
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>VORES ARBEJDSPROCES</span>

          <h2>
            Sådan foregår en
            <span> gulvafslibning</span>
          </h2>

          <p>
            Vi arbejder struktureret og grundigt for at sikre
            det bedste resultat fra start til slut.
          </p>
        </div>

        <div className={styles.processGrid}>
          {process.map((step) => (
            <article className={styles.processCard} key={step.number}>
              <span className={styles.processNumber}>
                {step.number}
              </span>

              <div className={styles.processLine} />

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL QUALITY */}
      <section className={styles.quality}>
        <div className={styles.qualityContent}>
          <span className={styles.eyebrow}>
            PROFESSIONELT HÅNDVÆRK
          </span>

          <h2>
            Et flot resultat kræver
            <span> det rigtige udstyr</span>
          </h2>

          <p>
            Vi anvender moderne slibemaskiner og professionelt
            udstyr, der hjælper os med at opnå en ensartet
            overflade og minimere støv og gener under arbejdet.
          </p>

          <p>
            Vores erfarne fagfolk arbejder effektivt og
            omhyggeligt. Vi tilpasser slibningen efter
            træsorten, gulvets tilstand og den ønskede finish.
          </p>

          <Link href="/vores-arbejde" className={styles.textLink}>
            Se vores arbejde
            <span>↗</span>
          </Link>
        </div>

        <div className={styles.qualityImage}>
          <Image
            src="/images/service-gulvafslibning.jpg"
            alt="BM Gulvservice udfører professionel gulvafslibning"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>BM GULVSERVICE</span>

          <h2>
            Klar til at give dine gulve
            <span> nyt liv?</span>
          </h2>

          <p>
            Kontakt os i dag og få en uforpligtende snak
            om gulvafslibning og dine muligheder.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <Link href="/kontakt" className={styles.ctaButton}>
            Få et gratis tilbud
            <span>↗</span>
          </Link>

          <a href="tel:+4552659452" className={styles.phoneLink}>
            Ring til os: +45 52 65 94 52
          </a>
        </div>
      </section>
    </main>
  );
}
