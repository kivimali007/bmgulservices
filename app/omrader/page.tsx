
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Home,
  Phone,
} from "lucide-react";
import styles from "./Omrader.module.scss";

export const metadata: Metadata = {
  title: "Områder | BM Gulvservice",
  description:
    "BM Gulvservice tilbyder professionel gulvafslibning, gulvbehandling og malerarbejde i København, Ballerup, Glostrup, Taastrup og resten af Sjælland.",
};

const areas = [
  "København",
  "Glostrup",
  "Taastrup",
  "Amager",
  "Hillerød",
  "Rødovre",
  "Ballerup",
  "Valby",
  "Albertslund",
  "Greve",
  "Lyngby",
];

const benefits = [
  "Professionel gulvafslibning og behandling",
  "Arbejde for både private og erhverv",
  "Personlig rådgivning og god service",
  "Fokus på kvalitet og holdbare resultater",
];

export default function OmraderPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <span />
              BM GULVSERVICE
            </span>

            <h1>
              Vi dækker
              <br />
              <span>hele dit område</span>
            </h1>

            <p>
              Professionel gulvservice på Sjælland.
              Vi kører ud til både private og erhverv
              og leverer kvalitetsarbejde med fokus
              på det gode resultat.
            </p>

            <div className={styles.breadcrumb}>
              <Link href="/">Forside</Link>
              <span>/</span>
              <span>Områder</span>
            </div>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Få et gratis tilbud
                <ArrowUpRight size={19} />
              </Link>

              <a href="tel:+4552659452" className={styles.phoneLink}>
                <Phone size={18} />
                52 65 94 52
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroVisualInner}>
              <MapPin size={42} strokeWidth={1.4} />

              <span className={styles.visualLabel}>
                VORES DÆKNINGSOMRÅDE
              </span>

              <strong>Sjælland</strong>

              <span className={styles.visualDescription}>
                Fra København til resten af Sjælland
              </span>

              <div className={styles.visualDivider} />

              <div className={styles.visualBottom}>
                <span>PRIVATE & ERHVERV</span>
                <CheckCircle2 size={20} />
              </div>
            </div>

            <div className={styles.floatingBadge}>
              <MapPin size={18} />
              <span>Vi kommer til dig</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introHeading}>
            <span className={styles.eyebrow}>
              HVOR ARBEJDER VI?
            </span>

            <h2>
              Professionel gulvservice
              <span> tæt på dig</span>
            </h2>
          </div>

          <div className={styles.introText}>
            <p>
              Hos BM Gulvservice tilbyder vi professionel
              gulvafslibning, gulvbehandling og malerarbejde
              i en lang række byer og lokalområder på Sjælland.
            </p>

            <p>
              Uanset om du har brug for hjælp i dit private
              hjem, din lejlighed, på kontoret eller i
              erhvervslokaler, står vi klar med solidt
              håndværk og personlig service.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className={styles.areas}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            VORES LOKALE OMRÅDER
          </span>

          <h2>
            Vi arbejder i <span>flere byer</span>
          </h2>

          <p>
            Her er nogle af de områder, hvor vi tilbyder
            vores professionelle gulv- og malerarbejde.
          </p>
        </div>

        <div className={styles.areasLayout}>
          <div className={styles.areasGrid}>
            {areas.map((area, index) => (
              <article className={styles.areaCard} key={area}>
                <div className={styles.areaIcon}>
                  <MapPin size={20} />
                </div>

                <div className={styles.areaInfo}>
                  <span className={styles.areaNumber}>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h3>{area}</h3>

                  <span className={styles.areaDescription}>
                    Gulvservice og behandling
                  </span>
                </div>

                <ArrowUpRight
                  size={19}
                  className={styles.areaArrow}
                />
              </article>
            ))}

            <article className={styles.moreCard}>
              <span className={styles.moreIcon}>+</span>

              <div>
                <h3>Og mange flere</h3>
                <p>
                  Vi dækker også andre byer og lokalområder
                  på Sjælland.
                </p>
              </div>
            </article>
          </div>

          <aside className={styles.areasSidebar}>
            <div className={styles.sidebarTop}>
              <span className={styles.eyebrow}>
                ER DU I TVIVL?
              </span>

              <h3>
                Dækker vi
                <span> din adresse?</span>
              </h3>

              <p>
                Er du usikker på, om vi kører ud til dit
                område? Kontakt os, så finder vi ud af,
                hvordan vi kan hjælpe dig.
              </p>
            </div>

            <div className={styles.sidebarDivider} />

            <div className={styles.sidebarContact}>
              <span className={styles.sidebarContactIcon}>
                <Phone size={20} />
              </span>

              <div>
                <small>RING TIL OS</small>
                <a href="tel:+4552659452">
                  +45 52 65 94 52
                </a>
              </div>
            </div>

            <Link href="/kontakt" className={styles.sidebarButton}>
              Kontakt os
              <ArrowUpRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className={styles.customers}>
        <div className={styles.customersContainer}>
          <div className={styles.customersHeading}>
            <span className={styles.eyebrow}>
              HVEM HJÆLPER VI?
            </span>

            <h2>
              Vi hjælper både
              <span> private og erhverv</span>
            </h2>

            <p>
              Uanset størrelsen på dit projekt tilpasser
              vi vores løsninger til dine ønsker og behov.
            </p>
          </div>

          <div className={styles.customerCards}>
            <article className={styles.customerCard}>
              <div className={styles.customerIcon}>
                <Home size={30} />
              </div>

              <span>01 / PRIVATE</span>

              <h3>Private hjem</h3>

              <p>
                Vi hjælper boligejere med at give deres
                trægulve nyt liv gennem professionel
                gulvafslibning og behandling.
              </p>

              <Link href="/ydelser/gulvafslibning">
                Se vores ydelser
                <ArrowUpRight size={17} />
              </Link>
            </article>

            <article className={styles.customerCard}>
              <div className={styles.customerIcon}>
                <Building2 size={30} />
              </div>

              <span>02 / ERHVERV</span>

              <h3>Erhverv og virksomheder</h3>

              <p>
                Vi tilbyder professionel gulvservice
                til kontorer, virksomheder og andre
                erhvervslokaler.
              </p>

              <Link href="/ydelser">
                Se vores ydelser
                <ArrowUpRight size={17} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* WHY BM */}
      <section className={styles.why}>
        <div className={styles.whyContainer}>
          <div className={styles.whyContent}>
            <span className={styles.eyebrow}>
              BM GULVSERVICE
            </span>

            <h2>
              Kvalitet og service
              <span> i hele processen</span>
            </h2>

            <p>
              Vi lægger stor vægt på godt håndværk,
              personlig kontakt og løsninger, der
              passer til det enkelte gulvprojekt.
              Vores mål er at sikre dig en god oplevelse
              fra første kontakt til færdigt resultat.
            </p>

            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={19} />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link href="/om-os" className={styles.whyLink}>
              Læs mere om os
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className={styles.whyVisual}>
            <div className={styles.whyVisualContent}>
              <span>BM GULVSERVICE</span>

              <strong>
                Godt håndværk.
                <br />
                Flotte resultater.
              </strong>

              <div className={styles.whyVisualLine} />

              <small>
                PROFESSIONEL GULVSERVICE PÅ SJÆLLAND
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>
            VI ER KLAR TIL AT HJÆLPE
          </span>

          <h2>
            Skal vi hjælpe dig
            <span> med dit næste projekt?</span>
          </h2>

          <p>
            Kontakt BM Gulvservice i dag. Vi tager gerne
            en uforpligtende snak om dine ønsker og behov.
          </p>

          <Link href="/kontakt" className={styles.ctaButton}>
            Få et gratis tilbud
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
