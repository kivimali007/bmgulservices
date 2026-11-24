
"use client";

import type { FormEvent } from "react";
import styles from "./forms.module.scss";

export default function Forms() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    console.log("Formular data:", Object.fromEntries(formData));

    alert("Tak for din henvendelse! Vi vender tilbage hurtigst muligt.");
    form.reset();
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <div className={styles.formIntro}>
          <span className={styles.eyebrow}>
            <span />
            BM GULVSERVICE
          </span>

          <h2>
            Få et gratis
            <span> og uforpligtende tilbud</span>
          </h2>

          <p>
            Fortæl os lidt om dit projekt. Vi kontakter dig
            hurtigst muligt med rådgivning og et tilbud,
            der passer til dine behov.
          </p>

          <div className={styles.formBenefits}>
            <div>
              <span>01</span>
              <p>Gratis og uforpligtende tilbud</p>
            </div>

            <div>
              <span>02</span>
              <p>Personlig rådgivning</p>
            </div>

            <div>
              <span>03</span>
              <p>Professionelt håndværk</p>
            </div>
          </div>

          <div className={styles.contactBox}>
            <span className={styles.contactIcon}>☎</span>

            <div>
              <small>HAR DU SPØRGSMÅL?</small>
              <a href="tel:+4552659452">
                +45 52 65 94 52
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formCardHeader}>
            <div>
              <span>FORTÆL OS OM DIT PROJEKT</span>
              <h3>Få et tilbud</h3>
            </div>

            <div className={styles.headerIcon}>↗</div>
          </div>

          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="name">
                  Navn <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Dit fulde navn"
                  autoComplete="name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">
                  Telefonnummer <span>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+45"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">
                  E-mail <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="din@email.dk"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="city">
                  By / Postnummer <span>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="F.eks. København"
                  autoComplete="postal-code"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Din adresse"
                  autoComplete="street-address"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="area">Areal (m²)</label>
                <input
                  type="number"
                  id="area"
                  name="area"
                  min="1"
                  placeholder="F.eks. 75"
                />
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="service">
                  Hvilken service har du brug for? <span>*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Vælg en service
                  </option>
                  <option value="Gulvafslibning">
                    Gulvafslibning
                  </option>
                  <option value="Gulvafhøvling">
                    Gulvafhøvling
                  </option>
                  <option value="Gulvbehandling">
                    Gulvbehandling
                  </option>
                  <option value="Malerarbejde">
                    Malerarbejde
                  </option>
                  <option value="Andet">Andet</option>
                </select>
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="message">
                  Beskriv dit projekt
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Fortæl os lidt om dit gulvprojekt, dine ønsker og eventuelle spørgsmål..."
                />
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="images">
                  Tilføj billeder af dit gulv
                </label>

                <div className={styles.uploadBox}>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                  />

                  <span className={styles.uploadIcon}>＋</span>

                  <div>
                    <strong>Vælg billeder</strong>
                    <small>
                      Upload billeder af dit gulv (JPG, PNG eller WEBP)
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formFooter}>
              <p>
                <span>*</span> Obligatoriske felter
              </p>

              <button type="submit">
                Send forespørgsel
                <span>↗</span>
              </button>
            </div>

            <div className={styles.privacyText}>
              Vi behandler dine oplysninger fortroligt og
              bruger dem kun til at besvare din forespørgsel.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
