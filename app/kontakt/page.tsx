
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import styles from "./Kontakt.module.scss";

export const metadata: Metadata = {
  title: "Kontakt | BM Gulvservice",
  description:
    "Kontakt BM Gulvservice og få et gratis og uforpligtende tilbud på professionel gulvbehandling.",
};

export default function KontaktPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
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

        <div
          className={styles.heroOverlay}
          aria-hidden="true"
        />
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>

          {/* CONTACT INFORMATION */}
          <div className={styles.contactInfo}>
            <span className={styles.sectionLabel}>
              KONTAKT OS
            </span>

            <h2>
              Vi står klar til at
              <span> hjælpe dig</span>
            </h2>

            <p>
              Fortæl os lidt om dit projekt. Vi vender tilbage
              hurtigst muligt med rådgivning og et uforpligtende tilbud.
            </p>

            <div className={styles.infoList}>
              <a
                href="tel:+4552659452"
                className={styles.infoItem}
              >
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
              <span>
                Gratis og uforpligtende tilbud
              </span>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className={styles.formWrapper}>
            <div className={styles.formHeading}>
              <div>
                <span className={styles.formLabel}>
                  FÅ ET TILBUD
                </span>

                <h2>Fortæl os om dit projekt</h2>
              </div>

              <span className={styles.formNumber}>
                01 / 01
              </span>
            </div>

            <form
              className={styles.contactForm}
              action="mailto:info@bmgulvservice.dk"
              method="post"
              encType="text/plain"
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    Navn <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="Navn"
                    type="text"
                    placeholder="Dit fulde navn"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    Telefon <span>*</span>
                  </label>

                  <input
                    id="phone"
                    name="Telefon"
                    type="tel"
                    placeholder="+45 12 34 56 78"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    E-mail <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="din@email.dk"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">
                    Adresse
                  </label>

                  <input
                    id="address"
                    name="Adresse"
                    type="text"
                    placeholder="Din adresse"
                    autoComplete="street-address"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">
                  Hvad har du brug for? <span>*</span>
                </label>

                <select
                  id="service"
                  name="Service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Vælg en service
                  </option>

                  <option value="Gulvafslibning">
                    Gulvafslibning
                  </option>

                  <option value="Gulvbehandling">
                    Gulvbehandling
                  </option>

                  <option value="Gulvafslibning og behandling">
                    Gulvafslibning & gulvbehandling
                  </option>

                  <option value="Lakering">
                    Lakering
                  </option>

                  <option value="Oliebehandling">
                    Oliebehandling
                  </option>

                  <option value="Andet">
                    Andet
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Fortæl os om dit projekt
                </label>

                <textarea
                  id="message"
                  name="Besked"
                  rows={6}
                  placeholder="Beskriv gerne gulvets størrelse, type, nuværende stand og hvad du ønsker..."
                />
              </div>

              <div className={styles.formFooter}>
                <p className={styles.formRequired}>
                  <span>*</span> Påkrævede felter
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Send forespørgsel
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className={styles.formPrivacy}>
                Ved at sende formularen accepterer du, at BM
                Gulvservice må kontakte dig vedrørende din
                forespørgsel.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
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
