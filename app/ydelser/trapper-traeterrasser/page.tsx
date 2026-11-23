
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./TrapperTraeterrasser.module.scss";

export const metadata: Metadata = {
  title: "Trapper & træterrasser | BM Gulvservice",
  description:
    "Professionel slibning af trætrapper, træterrasser og bordplader. BM Gulvservice fjerner ridser, gammel behandling og slitage og giver træet nyt liv.",
};

const services = [
  {
    number: "01",
    title: "Slibning af trapper",
    description:
      "Vi tilbyder professionel slibning af trætrapper. Vi fjerner gammel lak, pletter og ridser og giver dine trapper en flot og jævn overflade.",
    features: [
      "Fjernelse af gammel lak og overfladebehandling",
      "Slibning af ridser og slidte områder",
      "Et flot og ensartet resultat",
    ],
    className: "stairs",
  },
  {
    number: "02",
    title: "Slibning af træterrasser",
    description:
      "Vi fjerner gammel belægning, ujævnheder og skader og giver dine træflader et flot og jævnt resultat.",
    features: [
      "Fjernelse af gammel overfladebehandling",
      "Udjævning af slidte områder",
      "Et fornyet og flot udseende",
    ],
    className: "terrace",
  },
  {
    number: "03",
    title: "Slibning af bordplader",
    description:
      "Vi fjerner ridser, pletter og slitage og giver din bordplade en glat og flot finish. Uanset om det er en køkkenbordplade, spisebord eller skrivebord.",
    features: [
      "Fjernelse af ridser og pletter",
      "Behandling af slidte træoverflader",
      "En glat og flot finish",
    ],
    className: "tabletop",
  },
];

const benefits = [
  {
    number: "01",
    title: "Professionelt håndværk",
    description:
      "Vi arbejder med præcision og omhu for at sikre et flot resultat på alle træoverflader.",
  },
  {
    number: "02",
    title: "Moderne udstyr",
    description:
      "Vi anvender professionelt udstyr og effektive teknikker til at forny dine træoverflader.",
  },
  {
    number: "03",
    title: "Personlig rådgivning",
    description:
      "Vi tager udgangspunkt i dine ønsker og træets tilstand for at finde den rette løsning.",
  },
];

const process = [
  {
    number: "01",
    title: "Kontakt og rådgivning",
    description:
      "Vi starter med en samtale om dit projekt, dine ønsker og træoverfladens nuværende tilstand.",
  },
  {
    number: "02",
    title: "Professionel slibning",
    description:
      "Vi udfører slibearbejdet med fokus på præcision, grundighed og et ensartet resultat.",
  },
  {
    number: "03",
    title: "Færdigt resultat",
    description:
      "Vi gennemgår arbejdet og sikrer, at træoverfladen fremstår flot og velbehandlet.",
  },
];

export default function TrapperTraeterrasserPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              BM GULVSERVICE
            </div>

            <h1>
              Trapper &{" "}
              <span>træterrasser</span>
            </h1>

            <p>
              Professionel slibning af træoverflader.
              Vi giver dine trapper, terrasser og
              bordplader nyt liv med fokus på kvalitet,
              præcision og et flot resultat.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/kontakt"
                className={styles.primaryButton}
              >
                Få et gratis tilbud
                <span>↗</span>
              </Link>

              <a
                href="tel:+4552659452"
                className={styles.phoneButton}
              >
                Ring til os
                <strong>52 65 94 52</strong>
              </a>
            </div>

            <div className={styles.heroTrust}>
              <span>✓ Professionelt håndværk</span>
              <span>✓ Personlig service</span>
              <span>✓ Flot finish</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualFrame}>
              <span className={styles.visualTopLabel}>
                BM GULVSERVICE
              </span>

              <div className={styles.visualBottom}>
                <strong>Træ med nyt liv.</strong>
                <span>Præcision i hver detalje</span>
              </div>
            </div>

            <div className={styles.heroVisualAccent}>
              <strong>01</strong>
              <span>Kvalitet i hvert projekt</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>PROFESSIONEL SLIBNING</span>
          <span>TRAPPER · TERRASSER · BORDPLADER</span>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introHeading}>
            <div className={styles.eyebrowDark}>
              <span />
              VI SLIBER OGSÅ TRÆOVERFLADER
            </div>

            <h2>
              Mere end bare gulve.
              <span> Vi fornyer træ.</span>
            </h2>
          </div>

          <div className={styles.introContent}>
            <p>
              Har du brug for at forny dine trapper,
              træterrasser eller bordplader? Hos BM
              Gulvservice tilbyder vi professionel
              slibning, der giver dine træoverflader
              et smukt og glat finish.
            </p>

            <p>
              Uanset om det er en gammel trappe, en
              slidt terrasse eller en brugt bordplade,
              hjælper vi med at fjerne skrammer, ridser
              og slitage, så træet får et flottere
              udseende.
            </p>

            <p>
              Vi arbejder effektivt og med fokus på
              kvalitet, så du får et resultat, du kan
              glæde dig over.
            </p>

            <Link
              href="/kontakt"
              className={styles.textLink}
            >
              Lad os høre om dit projekt
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <div className={styles.eyebrowDark}>
              <span />
              VORES YDELSER
            </div>

            <h2>
              Vi giver dine træoverflader
              <span> nyt liv</span>
            </h2>

            <p>
              Vi tilbyder professionel slibning af
              forskellige træoverflader med fokus på
              et flot, jævnt og ensartet resultat.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                className={styles.serviceCard}
                key={service.number}
              >
                <div
                  className={`${styles.serviceVisual} ${
                    styles[service.className]
                  }`}
                >
                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>

                  <span className={styles.serviceVisualText}>
                    BM GULVSERVICE
                  </span>
                </div>

                <div className={styles.serviceContent}>
                  <span className={styles.serviceLabel}>
                    PROFESSIONEL SLIBNING
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={styles.serviceLink}
                  >
                    Få et tilbud
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsIntro}>
            <div className={styles.eyebrow}>
              <span />
              DERFOR SKAL DU VÆLGE OS
            </div>

            <h2>
              Godt håndværk
              <span> hele vejen.</span>
            </h2>

            <p>
              Vi går op i detaljerne og arbejder
              målrettet for at skabe et flot resultat.
              Din tilfredshed er vigtig for os.
            </p>

            <Link
              href="/kontakt"
              className={styles.benefitsButton}
            >
              Kontakt os
              <span>↗</span>
            </Link>
          </div>

          <div className={styles.benefitsList}>
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

                <span className={styles.benefitArrow}>↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeading}>
            <div className={styles.eyebrowDark}>
              <span />
              SÅDAN ARBEJDER VI
            </div>

            <h2>
              Fra første kontakt
              <span> til flot resultat.</span>
            </h2>

            <p>
              Vi gør processen enkel og overskuelig
              fra den første samtale til det færdige
              arbejde.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step) => (
              <article
                className={styles.processCard}
                key={step.number}
              >
                <span className={styles.processNumber}>
                  {step.number}
                </span>

                <div className={styles.processLine} />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <div>
            <div className={styles.eyebrow}>
              <span />
              BM GULVSERVICE
            </div>

            <h2>
              Klar til at give træet
              <span> nyt liv?</span>
            </h2>

            <p>
              Kontakt os i dag og fortæl os om dit
              projekt. Vi hjælper dig gerne med
              professionel rådgivning og et
              uforpligtende tilbud.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link
              href="/kontakt"
              className={styles.ctaButton}
            >
              Få et gratis tilbud
              <span>↗</span>
            </Link>

            <a
              href="tel:+4552659452"
              className={styles.ctaPhone}
            >
              52 65 94 52
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
