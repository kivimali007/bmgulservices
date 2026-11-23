
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./Gulvafhovling.module.scss";

export const metadata: Metadata = {
  title: "Gulvafhøvling | BM Gulvservice",
  description:
    "Få nyt liv i dine gamle trægulve med professionel gulvafhøvling. BM Gulvservice hjælper dig med at vurdere den rette behandling til dit gulv.",
};

const benefits = [
  {
    number: "01",
    title: "Forlæng gulvets levetid",
    description:
      "Gulvafhøvling fjerner beskadigede lag af træet og kan give dit eksisterende gulv mulighed for at holde i mange år fremover.",
  },
  {
    number: "02",
    title: "Et flottere og mere ensartet gulv",
    description:
      "Behandlingen kan fjerne dybere ridser, buler og ujævnheder, så gulvet får en mere jævn og fornyet overflade.",
  },
  {
    number: "03",
    title: "Et alternativ til udskiftning",
    description:
      "I stedet for at udskifte hele gulvet kan afhøvling i mange tilfælde give det eksisterende træ nyt liv.",
  },
  {
    number: "04",
    title: "Tilpasset dit trægulv",
    description:
      "Parketgulve, plankegulve og andre trægulve kan have forskellige behov. Derfor vurderer vi altid gulvet inden arbejdet.",
  },
];

const process = [
  {
    number: "01",
    title: "Vi vurderer gulvet",
    description:
      "Vi undersøger gulvets tilstand, træets tykkelse og om afhøvling er den rigtige løsning.",
  },
  {
    number: "02",
    title: "Vi forbereder arbejdet",
    description:
      "Området klargøres, så arbejdet kan udføres grundigt og med fokus på et godt resultat.",
  },
  {
    number: "03",
    title: "Gulvet afhøvles",
    description:
      "Ved hjælp af specialmaskiner fjernes det øverste lag af træet for at komme dybere ridser, belægninger og ujævnheder til livs.",
  },
  {
    number: "04",
    title: "Vi rådgiver om den videre behandling",
    description:
      "Når gulvet er afhøvlet, kan vi rådgive om den efterfølgende behandling, så overfladen får det udtryk og den beskyttelse, du ønsker.",
  },
];

export default function GulvafhovlingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/">Forside</Link>
            <span>/</span>
            <Link href="/ydelser">Ydelser</Link>
            <span>/</span>
            <span>Gulvafhøvling</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              BM GULVSERVICE · PROFESSIONEL GULVBEHANDLING
            </span>

            <h1>
              Genoplev dit
              <span> gamle trægulv</span>
            </h1>

            <p>
              Er dit trægulv slidt, ujævnt eller præget af dybe ridser?
              Med professionel gulvafhøvling kan vi give gulvet nyt liv
              uden nødvendigvis at skulle udskifte det.
            </p>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Få en gratis vurdering
                <span>→</span>
              </Link>

              <a
                href="tel:+4552659452"
                className={styles.phoneButton}
              >
                Ring 52 65 94 52
              </a>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>Erfaring og faglighed</span>
            <span className={styles.heroBottomLine} />
            <span>Fokus på kvalitet</span>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span>OM GULVAFHØVLING</span>
            </div>

            <div className={styles.introContent}>
              <h2>
                Når almindelig gulvslibning
                <span> ikke er nok</span>
              </h2>

              <p className={styles.lead}>
                Nogle trægulve har brug for mere end en almindelig
                afslibning. Her kan gulvafhøvling være den rette løsning.
              </p>

              <p>
                Gulvafhøvling er en proces, hvor det øverste lag af træet
                fjernes ved hjælp af en specialmaskine. Behandlingen er
                særligt relevant, når gulvet har dybe ridser, buler,
                misfarvninger eller større ujævnheder.
              </p>

              <p>
                Ved at fjerne det beskadigede toplag kan vi genskabe en
                mere ensartet overflade og fremhæve træets naturlige
                struktur. Resultatet afhænger altid af gulvets tilstand
                og træets tykkelse.
              </p>

              <Link href="/kontakt" className={styles.textLink}>
                Få en vurdering af dit gulv <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrowDark}>DERFOR VÆLGER KUNDER OS</span>
            <h2>
              Fordelene ved
              <span> gulvafhøvling</span>
            </h2>
            <p>
              En grundig behandling kan gøre en stor forskel for både
              gulvets udseende og dets videre levetid.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => (
              <article className={styles.benefitCard} key={benefit.number}>
                <span className={styles.cardNumber}>{benefit.number}</span>
                <div className={styles.cardLine} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.choice}>
        <div className={styles.container}>
          <div className={styles.choiceGrid}>
            <div className={styles.choiceVisual}>
              <div className={styles.visualFrame}>
                <span className={styles.visualSmall}>BM GULVSERVICE</span>
                <span className={styles.visualBig}>TRÆ</span>
                <span className={styles.visualBottom}>
                  Nyt liv til eksisterende gulve
                </span>
              </div>
              <div className={styles.visualCaption}>
                Det rigtige arbejde begynder med den rigtige vurdering.
              </div>
            </div>

            <div className={styles.choiceContent}>
              <span className={styles.eyebrowDark}>DEN RETTE LØSNING</span>

              <h2>
                Er gulvafhøvling
                <span> det rette valg for dig?</span>
              </h2>

              <p>
                Gulvafhøvling kan være en god løsning, hvis dit trægulv
                er meget slidt, men stadig har tilstrækkelig tykkelse
                til behandlingen.
              </p>

              <p>
                Det er dog ikke alle gulve, der egner sig til afhøvling.
                Hvis træet er blevet for tyndt eller er beskadiget på en
                måde, hvor afhøvling ikke er forsvarlig, kan en anden
                behandling være mere passende.
              </p>

              <div className={styles.notice}>
                <span className={styles.noticeIcon}>i</span>
                <p>
                  Vi vurderer altid gulvets tilstand og hjælper dig med
                  at vælge mellem gulvafhøvling, gulvafslibning eller
                  en anden løsning.
                </p>
              </div>

              <Link href="/kontakt" className={styles.primaryButton}>
                Kontakt os for rådgivning
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrowDark}>VORES ARBEJDSMETODE</span>
            <h2>
              Fra slidt gulv
              <span> til ny overflade</span>
            </h2>
            <p>
              Vi arbejder ud fra gulvets konkrete behov og lægger vægt
              på en grundig og professionel proces.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map((step) => (
              <article className={styles.processCard} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span className={styles.eyebrow}>
              LAD OS HJÆLPE DIG VIDERE
            </span>

            <h2>
              Dit gamle gulv
              <span> fortjener nyt liv</span>
            </h2>

            <p>
              Kontakt BM Gulvservice for en gratis og uforpligtende
              vurdering. Vi hjælper dig med at finde den rigtige løsning
              til dit trægulv.
            </p>

            <div className={styles.ctaActions}>
              <Link href="/kontakt" className={styles.ctaButton}>
                Få et tilbud
                <span>→</span>
              </Link>

              <a href="tel:+4552659452" className={styles.ctaPhone}>
                52 65 94 52
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
