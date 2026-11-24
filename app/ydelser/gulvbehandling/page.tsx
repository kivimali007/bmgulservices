
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./Gulvbehandling.module.scss";

export const metadata: Metadata = {
  title: "Gulvbehandling | Lak, olie og sæbe – BM Gulvservice",
  description:
    "Få professionel gulvbehandling hos BM Gulvservice. Vi tilbyder behandling med lak, olie og sæbe, der beskytter dine trægulve og giver dem nyt liv.",
};

const treatments = [
  {
    number: "01",
    title: "Lakbehandling",
    subtitle: "Maksimal beskyttelse",
    description:
      "Lak skaber en slidstærk overflade, der beskytter trægulvet mod daglig slitage, ridser og pletter. En ideel løsning til rum med meget aktivitet.",
    features: [
      "Slidstærk overflade",
      "Nem daglig rengøring",
      "Lang holdbarhed",
    ],
    type: "lacquer",
    image: "/images/lak.jpg",
  },
  {
    number: "02",
    title: "Oliebehandling",
    subtitle: "Naturlig varme og glød",
    description:
      "Olie fremhæver træets naturlige struktur og åretegninger. Behandlingen giver gulvet et varmt og eksklusivt udtryk med en smuk naturlig finish.",
    features: [
      "Naturligt udseende",
      "Fremhæver træets struktur",
      "Mulighed for vedligeholdelse",
    ],
    type: "oil",
    image: "/images/ulje.jpg",
  },
  {
    number: "03",
    title: "Hvid lud",
    subtitle: "Et lyst og naturligt udtryk",
    description:
      "Hvid lud giver gulvet en mat og naturlig overflade. Det er en klassisk behandling, som hjælper med at beskytte træet og bevare det lyse udtryk.",
    features: [
      "Mat finish",
      "Naturligt udseende",
      "Løbende vedligeholdelse",
    ],
    type: "soap",
    image: "/images/sapun.jpg"
  },
];

const benefits = [
  {
    number: "01",
    title: "Beskyttelse mod slid",
    description:
      "En professionel behandling beskytter gulvet mod hverdagens belastninger og hjælper med at bevare overfladen.",
  },
  {
    number: "02",
    title: "Smukkere trægulve",
    description:
      "Den rigtige behandling fremhæver træets naturlige farver, struktur og karakter.",
  },
  {
    number: "03",
    title: "Længere levetid",
    description:
      "Med den rette behandling og vedligeholdelse kan du forlænge gulvets levetid betydeligt.",
  },
];

const process = [
  {
    number: "01",
    title: "Vurdering af gulvet",
    description:
      "Vi gennemgår gulvets tilstand og rådgiver dig om den behandling, der passer bedst til træsorten og dine ønsker.",
  },
  {
    number: "02",
    title: "Forberedelse",
    description:
      "Gulvet rengøres grundigt, og overfladen klargøres, så behandlingen kan påføres jævnt og korrekt.",
  },
  {
    number: "03",
    title: "Professionel behandling",
    description:
      "Vi påfører den valgte behandling med fokus på ensartet finish, god beskyttelse og et flot resultat.",
  },
  {
    number: "04",
    title: "Tørring og afslutning",
    description:
      "Gulvet får den nødvendige tid til at tørre og hærde. Vi gennemgår resultatet og vejleder dig om vedligeholdelse.",
  },
];

export default function GulvbehandlingPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Hjem</Link>
              <span>/</span>
              <Link href="/ydelser">Ydelser</Link>
              <span>/</span>
              <span>Gulvbehandling</span>
            </div>

            <span className={styles.eyebrow}>
              <span />
              PROFESSIONEL GULVBEHANDLING
            </span>

            <h1>
              Beskyt dine gulve.
              <br />
              Fremhæv deres
              <br />
              <span>naturlige skønhed.</span>
            </h1>

            <p className={styles.heroDescription}>
              Giv dine trægulve nyt liv med professionel
              gulvbehandling. Vi hjælper dig med at vælge
              den rette behandling med lak, olie eller
              sæbe, så dit gulv både bliver smukt og
              beskyttet.
            </p>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Få et gratis tilbud
                <span>↗</span>
              </Link>

              <a href="tel:+4552659452" className={styles.phoneLink}>
                <span className={styles.phoneIcon}>☎</span>
                <span>
                  <small>Ring til os</small>
                  <strong>52 65 94 52</strong>
                </span>
              </a>
            </div>

            <div className={styles.heroTrust}>
              <span>✓ Professionel rådgivning</span>
              <span>✓ Kvalitetsmaterialer</span>
              <span>✓ Fokus på holdbarhed</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>GULVBEHANDLING MED OMHU</span>
          <span>BM GULVSERVICE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.intro}>
        <div className={styles.introLabel}>
          <span className={styles.sectionNumber}>01 /</span>
          <span>HVAD ER GULVBEHANDLING?</span>
        </div>

        <div className={styles.introContent}>
          <h2>
            Giv dine trægulve
            <span> nyt liv og bedre beskyttelse.</span>
          </h2>

          <p>
            Er dine gulve blevet matte, tørre eller har de
            synlige pletter? Med professionel gulvbehandling
            kan du forvandle dine trægulve og give dem nyt liv.
          </p>

          <p>
            Vi tilbyder behandling med olie, lak og sæbe,
            som beskytter mod slid og fremhæver træets
            naturlige skønhed. Den rette behandling giver
            gulvet et flot udseende og hjælper med at
            bevare det i mange år.
          </p>

          <Link href="/kontakt" className={styles.textLink}>
            Lad os rådgive dig
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className={styles.treatments}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrowDark}>
              VORES BEHANDLINGER
            </span>

            <h2>
              Find den rette
              <span> behandling til dit gulv.</span>
            </h2>
          </div>

          <p>
            Forskellige gulve kræver forskellige løsninger.
            Vi hjælper dig med at vælge den behandling,
            der passer til både gulvet og din hverdag.
          </p>
        </div>

        <div className={styles.treatmentGrid}>
          {treatments.map((treatment) => (
            <article
              className={styles.treatmentCard}
              key={treatment.number}
            >
              <div
                className={`${styles.treatmentVisual} ${
                  styles[treatment.type as "lacquer" | "oil" | "soap"]
                }`}
                style={
                  treatment.image
                    ? {
                        backgroundImage: `linear-gradient(
                          0deg,
                          rgba(17, 43, 58, 0.75),
                          rgba(17, 43, 58, 0.05) 75%
                        ), url("${treatment.image}")`,
                      }
                    : undefined
                }
              >
                <span className={styles.treatmentNumber}>
                  {treatment.number}
                </span>

                <span className={styles.treatmentVisualText}>
                  {treatment.title}
                </span>
              </div>

              <div className={styles.treatmentContent}>
                <span className={styles.treatmentSubtitle}>
                  {treatment.subtitle}
                </span>

                <h3>{treatment.title}</h3>

                <p>{treatment.description}</p>

                <ul>
                  {treatment.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/kontakt" className={styles.cardLink}>
                  Få rådgivning
                  <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <span className={styles.eyebrow}>
            HVORFOR VÆLGE GULVBEHANDLING?
          </span>

          <h2>
            Mere end bare et
            <span> flot gulv.</span>
          </h2>

          <p>
            En korrekt udført gulvbehandling handler både
            om udseende, beskyttelse og gulvets fremtidige
            holdbarhed.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <article className={styles.benefitCard} key={benefit.number}>
              <span className={styles.benefitNumber}>
                {benefit.number}
              </span>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>

              <span className={styles.benefitArrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.processIntro}>
          <span className={styles.eyebrowDark}>
            SÅDAN ARBEJDER VI
          </span>

          <h2>
            Fra første vurdering
            <span> til færdigt gulv.</span>
          </h2>

          <p>
            Vi sørger for en professionel og overskuelig
            proces, hvor kvalitet og god kommunikation
            er i centrum.
          </p>

          <Link href="/kontakt" className={styles.primaryButton}>
            Kontakt os
            <span>↗</span>
          </Link>
        </div>

        <div className={styles.processList}>
          {process.map((step) => (
            <article className={styles.processItem} key={step.number}>
              <span className={styles.processNumber}>
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <span className={styles.processArrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* RELATED SERVICE */}
      <section className={styles.related}>
        <div className={styles.relatedContent}>
          <span className={styles.eyebrow}>
            HAR DIT GULV BRUG FOR MERE?
          </span>

          <h2>
            Start med professionel
            <span> gulvafslibning.</span>
          </h2>

          <p>
            Hvis gulvet har dybe ridser, gammel behandling
            eller tydelige ujævnheder, kan en gulvafslibning
            være det rigtige første skridt inden den nye
            behandling.
          </p>

          <Link
            href="/ydelser/gulvafslibning"
            className={styles.secondaryButton}
          >
            Læs om gulvafslibning
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>
            BM GULVSERVICE
          </span>

          <h2>
            Skal dine gulve have
            <span> nyt liv?</span>
          </h2>

          <p>
            Kontakt os i dag. Vi hjælper dig med at finde
            den rette gulvbehandling til dit hjem.
          </p>
        </div>

        <Link href="/kontakt" className={styles.ctaButton}>
          Få et uforpligtende tilbud
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
