import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Home,
  Phone,
  Sparkles,
} from "lucide-react";
import styles from "../omrader/Omrader.module.scss";

export const metadata: Metadata = {
  title: "Ydelser | BM Gulvservice",
  description:
    "Se alle ydelser hos BM Gulvservice: gulvafslibning, gulvafhøvling, gulvbehandling, trapper og træterrasser samt malerarbejde og fugning.",
};

const services = [
  {
    label: "Gulvafslibning",
    href: "/ydelser/gulvafslibning",
    description: "Slidte trægulve fornyes",
  },
  {
    label: "Gulvafhøvling",
    href: "/ydelser/gulvafhovling",
    description: "Ujævne gulve rettes op",
  },
  {
    label: "Gulvbehandling",
    href: "/ydelser/gulvbehandling",
    description: "Lak, olie og sæbe",
  },
  {
    label: "Trapper & træterrasser",
    href: "/ydelser/trapper-traeterrasser",
    description: "Slibning og behandling",
  },
  {
    label: "Øvrige ydelser",
    href: "/ydelser/ovrige-ydelser",
    description: "Maler- og fugearbejde m.m.",
  },
];

const benefits = [
  "Professionel gulvafslibning og behandling",
  "Arbejde for både private og erhverv",
  "Personlig rådgivning og god service",
  "Fokus på kvalitet og holdbare resultater",
];

export default function YdelserPage() {
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
              Vores
              <br />
              <span>ydelser</span>
            </h1>

            <p>
              Fra gulvafslibning og gulvbehandling til
              trapper, træterrasser og malerarbejde. Vi
              leverer solidt håndværk til både private
              og erhverv på Sjælland.
            </p>

            <div className={styles.breadcrumb}>
              <Link href="/">Forside</Link>
              <span>/</span>
              <span>Ydelser</span>
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
              <Sparkles size={42} strokeWidth={1.4} />

              <span className={styles.visualLabel}>
                VI TILBYDER
              </span>

              <strong>Gulvservice</strong>

              <span className={styles.visualDescription}>
                Afslibning, behandling og meget mere
              </span>

              <div className={styles.visualDivider} />

              <div className={styles.visualBottom}>
                <span>PRIVATE & ERHVERV</span>
                <CheckCircle2 size={20} />
              </div>
            </div>

            <div className={styles.floatingBadge}>
              <CheckCircle2 size={18} />
              <span>Kvalitet i hver detalje</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introHeading}>
            <span className={styles.eyebrow}>
              HVAD KAN VI HJÆLPE MED?
            </span>

            <h2>
              Alt inden for
              <span> gulvservice</span>
            </h2>
          </div>

          <div className={styles.introText}>
            <p>
              Hos BM Gulvservice giver vi trægulve, trapper
              og terrasser nyt liv. Vi fjerner ridser, slitage
              og gammel behandling og afslutter med lak, olie
              eller sæbe, der beskytter træet i mange år.
            </p>

            <p>
              Vi tilbyder også malerarbejde, fugning,
              istandsættelse ved fraflytning og slibning
              af bordplader, så du kan samle hele projektet
              ét sted.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.areas}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>
            VORES YDELSER
          </span>

          <h2>
            Vælg den <span>rette løsning</span>
          </h2>

          <p>
            Læs mere om de enkelte ydelser, eller kontakt
            os for rådgivning om dit projekt.
          </p>
        </div>

        <div className={styles.areasLayout}>
          <div className={styles.areasGrid}>
            {services.map((service, index) => (
              <Link
                href={service.href}
                className={styles.areaCard}
                key={service.href}
              >
                <div className={styles.areaIcon}>
                  <CheckCircle2 size={20} />
                </div>

                <div className={styles.areaInfo}>
                  <span className={styles.areaNumber}>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h3>{service.label}</h3>

                  <span className={styles.areaDescription}>
                    {service.description}
                  </span>
                </div>

                <ArrowUpRight
                  size={19}
                  className={styles.areaArrow}
                />
              </Link>
            ))}
          </div>

          <aside className={styles.areasSidebar}>
            <div className={styles.sidebarTop}>
              <span className={styles.eyebrow}>
                ER DU I TVIVL?
              </span>

              <h3>
                Hvilken ydelse
                <span> passer til dig?</span>
              </h3>

              <p>
                Er du usikker på, hvilken behandling dit gulv
                har brug for? Kontakt os, så hjælper vi dig
                med at finde den bedste løsning.
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
                Læs om gulvafslibning
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

              <Link href="/omrader">
                Se vores områder
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
