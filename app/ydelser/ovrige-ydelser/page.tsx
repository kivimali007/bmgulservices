
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Paintbrush,
  Waves,
  Home,
  Layers3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import styles from "./OvrigeYdelser.module.scss";

export const metadata: Metadata = {
  title: "Øvrige ydelser | BM Gulvservice",
  description:
    "BM Gulvservice tilbyder professionelt malerarbejde, fugning, istandsættelse ved fraflytning og slibning af bordplader. Kontakt os for et uforpligtende tilbud.",
};

const services = [
  {
    number: "01",
    title: "Malerarbejde",
    subtitle: "Professionelt malerarbejde inde og ude",
    description:
      "Vi tilbyder professionel maling af både indendørs og udendørs overflader. Fra vægge og lofter til døre og vinduer. Vi anvender kvalitetsmaterialer og arbejder med fokus på et flot og ensartet resultat.",
    details: [
      "Maling af vægge og lofter",
      "Maling af døre og vinduer",
      "Indendørs og udendørs malerarbejde",
      "Fokus på kvalitet og finish",
    ],
    Icon: Paintbrush,
  },
  {
    number: "02",
    title: "Fugning",
    subtitle: "Præcise og holdbare fugeløsninger",
    description:
      "Vi tilbyder professionel fugning både inde og ude. Vi hjælper med fugning i badeværelser og køkkener samt omkring vinduer, døre og facadeelementer.",
    details: [
      "Fugning af badeværelser",
      "Fugning af køkkener",
      "Fugning omkring vinduer og døre",
      "Fugning af facadeelementer",
    ],
    Icon: Waves,
  },
  {
    number: "03",
    title: "Istandsættelse ved fraflytning",
    subtitle: "Klargøring af boligen til næste beboer",
    description:
      "Vi tilbyder professionel istandsættelse ved fraflytning, så boligen fremstår pæn, velholdt og indflytningsklar. Vi hjælper med at gøre overgangen nemmere og mere overskuelig.",
    details: [
      "Istandsættelse af boligen",
      "Fokus på pæne overflader",
      "Professionel udførelse",
      "Klargøring til næste beboer",
    ],
    Icon: Home,
  },
  {
    number: "04",
    title: "Slibning af bordplader",
    subtitle: "Giv dine træoverflader nyt liv",
    description:
      "Vi fjerner ridser, pletter og almindelig slitage fra bordplader og giver træoverfladen en glat og flot finish. Uanset om det drejer sig om køkkenbordplader, spiseborde eller skriveborde.",
    details: [
      "Slibning af køkkenbordplader",
      "Slibning af spiseborde",
      "Fjernelse af ridser og pletter",
      "Flot og jævn overflade",
    ],
    Icon: Layers3,
  },
];

const benefits = [
  "Personlig rådgivning",
  "Professionelt håndværk",
  "Kvalitetsmaterialer",
  "Fokus på detaljerne",
];

export default function OvrigeYdelserPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Forside</Link>
              <span>/</span>
              <Link href="/ydelser">Ydelser</Link>
              <span>/</span>
              <span>Øvrige ydelser</span>
            </div>

            <span className={styles.eyebrow}>
              <span />
              BM GULVSERVICE
            </span>

            <h1>
              Mere end gulve.
              <br />
              <span>Vi klarer også resten.</span>
            </h1>

            <p>
              Hos BM Gulvservice tilbyder vi flere
              professionelle løsninger til dit hjem
              og din virksomhed. Fra malerarbejde og
              fugning til istandsættelse og slibning
              af bordplader.
            </p>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Få et gratis tilbud
                <ArrowUpRight size={19} />
              </Link>

              <a href="#services" className={styles.secondaryButton}>
                Se vores ydelser
                <ArrowRight size={18} />
              </a>
            </div>

            <div className={styles.heroBenefits}>
              {benefits.slice(0, 3).map((benefit) => (
                <span key={benefit}>
                  <CheckCircle2 size={16} />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualFrame}>
              <div className={styles.visualTop}>
                <span>BM</span>
                <span>GULVSERVICE</span>
              </div>

              <div className={styles.visualCenter}>
                <Sparkles size={43} strokeWidth={1.3} />
                <strong>
                  Kvalitet
                  <br />
                  i hver detalje.
                </strong>
                <span>PROFESSIONELT HÅNDVÆRK</span>
              </div>

              <div className={styles.visualBottom}>
                <span>01 — 04</span>
                <span>VORES EKSPERTISE</span>
              </div>
            </div>

            <div className={styles.visualBadge}>
              <strong>BM</strong>
              <span>Professionel service</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>ØVRIGE YDELSER</span>
          <span>01 / 04</span>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introLabel}>
            <span className={styles.sectionEyebrow}>
              FLERE MULIGHEDER
            </span>

            <span className={styles.introNumber}>01 — 04</span>
          </div>

          <div className={styles.introContent}>
            <h2>
              Én samarbejdspartner.
              <br />
              <span>Flere professionelle løsninger.</span>
            </h2>

            <p>
              Vi ved, at der kan være behov for mere end
              professionel gulvbehandling. Derfor tilbyder
              vi også en række andre ydelser, som hjælper
              med at skabe flotte og velholdte omgivelser.
            </p>

            <p>
              Uanset opgavens størrelse lægger vi vægt på
              god dialog, grundighed og et resultat, der
              lever op til dine forventninger.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services} id="services">
        <div className={styles.servicesContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>
              HVAD KAN VI HJÆLPE MED?
            </span>

            <h2>
              Vores øvrige
              <span> ydelser</span>
            </h2>

            <p>
              Se vores forskellige løsninger, og find den
              hjælp, der passer til dit projekt.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = service.Icon;

              return (
                <article
                  className={styles.serviceCard}
                  key={service.number}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>
                      {service.number}
                    </span>

                    <div className={styles.cardIcon}>
                      <Icon size={27} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <span className={styles.cardSubtitle}>
                      {service.subtitle}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className={styles.cardDetails}>
                    {service.details.map((detail) => (
                      <div key={detail}>
                        <CheckCircle2 size={16} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/kontakt"
                    className={styles.cardLink}
                    aria-label={`Kontakt os om ${service.title}`}
                  >
                    Kontakt os om denne ydelse
                    <ArrowUpRight size={19} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whyUs}>
        <div className={styles.whyContainer}>
          <div className={styles.whyContent}>
            <span className={styles.sectionEyebrow}>
              DERFOR VÆLGER KUNDERNE OS
            </span>

            <h2>
              Godt håndværk.
              <br />
              <span>Personlig service.</span>
            </h2>

            <p>
              Vi sætter en ære i at levere professionelt
              arbejde med fokus på kvalitet og detaljer.
              For os handler et godt resultat ikke kun
              om selve arbejdet, men også om en god
              oplevelse gennem hele processen.
            </p>

            <Link href="/om-os" className={styles.whyLink}>
              Læs mere om os
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className={styles.whyList}>
            {[
              {
                number: "01",
                title: "Personlig rådgivning",
                text: "Vi tager udgangspunkt i dine ønsker og behov.",
              },
              {
                number: "02",
                title: "Kvalitet i arbejdet",
                text: "Vi arbejder grundigt og med fokus på detaljerne.",
              },
              {
                number: "03",
                title: "God kommunikation",
                text: "Vi prioriterer en god dialog gennem hele projektet.",
              },
            ].map((item) => (
              <div className={styles.whyItem} key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <CheckCircle2 size={21} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>
              LAD OS HJÆLPE DIG
            </span>

            <h2>
              Har du et projekt
              <br />
              <span>vi kan hjælpe med?</span>
            </h2>

            <p>
              Kontakt BM Gulvservice i dag. Vi tager gerne
              en snak om dine ønsker og finder den rette
              løsning til dit projekt.
            </p>
          </div>

          <Link href="/kontakt" className={styles.ctaButton}>
            Få et uforpligtende tilbud
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}