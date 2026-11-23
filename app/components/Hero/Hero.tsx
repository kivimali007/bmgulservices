import {
  ArrowUpRight,
  Play,
} from "lucide-react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>BM Gulvservice</span>
          </div>

          <h1 className={styles.title}>
            Professionel
            <br />
            <span>gulvservice</span>
            <br />
            med kvalitet i fokus
          </h1>

          <p className={styles.description}>
            Vi hjælper med gulvafslibning, gulvafhøvling og
            gulvbehandling, så dine gulve får nyt liv og holder
            i mange år.
          </p>

          <div className={styles.actions}>
            <a href="/kontakt" className={styles.primaryButton}>
              <span>Få et gratis tilbud</span>
              <ArrowUpRight size={19} />
            </a>

            <a href="/vores-arbejde" className={styles.videoButton}>
              <span className={styles.playButton}>
                <Play size={16} fill="currentColor" />
              </span>

              <span>Se vores arbejde</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomShape} />

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}