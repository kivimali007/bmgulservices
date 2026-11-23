
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import styles from "./Kontakt.module.scss";

export const metadata: Metadata = {
  title: "Kontakt | BM Gulvservice",
  description:
    "Kontakt BM Gulvservice og få et gratis og uforpligtende tilbud på professionel gulvbehandling.",
};

export default function KontaktPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>BM GULVSERVICE</span>

          <h1>
            Lad os tale om
            <span> dit gulvprojekt</span>
          </h1>

          <p>
            Har du brug for professionel gulvafslibning eller
            gulvbehandling? Kontakt os og få et gratis og
            uforpligtende tilbud.
          </p>

          <div className={styles.breadcrumb}>
            <Link href="/">Forside</Link>
            <span>/</span>
            <span>Kontakt</span>
          </div>
        </div>

        <div className={styles.heroDecoration}>
          <span>BM</span>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <span className={styles.sectionLabel}>KONTAKT OS</span>

            <h2>
              Vi står klar til at
              <span> hjælpe dig</span>
            </h2>

            <p>
              Fortæl os lidt om dit projekt. Vi vender tilbage
              hurtigst muligt med rådgivning og et uforpligtende tilbud.
            </p>

            <div className={styles.infoList}>
              <a href="tel:+4552659452" className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Phone size={21} />
                </span>
                <span>
                  <small>RING TIL OS</small>
                  <strong>+45 52 65 94 52</strong>
                </span>
              </a>

              <a
                href="mailto:info@bmgulvservice.dk"
                className={styles.infoItem}
              >
                <span className={styles.infoIcon}>
                  <Mail size={21} />
                </span>
                <span>
                  <small>SKRIV TIL OS</small>
                  <strong>info@bmgulvservice.dk</strong>
                </span>
              </a>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <MapPin size={21} />
                </span>
                <span>
                  <small>VORES SERVICE</small>
                  <strong>København og omegn</strong>
                </span>
              </div>
            </div>

            <div className={styles.trustNote}>
              <CheckCircle2 size={20} />
              <span>Gratis og uforpligtende tilbud</span>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formHeading}>
              <div>
                <span className={styles.formLabel}>FÅ ET TILBUD</span>
                <h2>Fortæl os om dit projekt</h2>
              </div>
              <span className={styles.formNumber}>01 / 01</span>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div>
          <span>BM GULVSERVICE</span>
          <h2>Klar til at give dit gulv nyt liv?</h2>
        </div>
        <a href="tel:+4552659452">
          Ring til os
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
