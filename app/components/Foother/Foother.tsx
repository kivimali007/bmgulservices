
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>
                <span />
                <span />
                <span />
                <span />
              </span>
              <span>BM Gulvservice</span>
            </Link>

            <p>
              BM Gulvservice tilbyder professionel
              gulvafslibning, gulvafhøvling og
              gulvbehandling. Vi leverer kvalitet,
              godt håndværk og flotte resultater.
            </p>

            <Link href="/kontakt" className={styles.contactButton}>
              Kontakt os
              <span>→</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3>Quick Links</h3>

            <ul className={styles.links}>
              <li><Link href="/">› <span>Home</span></Link></li>
              <li><Link href="/om-os">› <span>About Us</span></Link></li>
              <li><Link href="/ydelser">› <span>Services</span></Link></li>
              <li><Link href="/projekter">› <span>Projects</span></Link></li>
              <li><Link href="/kontakt">› <span>Contact</span></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h3>Contact Info</h3>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>⌖</span>
              <p>
                København og omegn
                <br />
                Danmark
              </p>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <Link href="/kontakt">Send os en besked</Link>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>◷</span>
              <p>Kontakt os for et tilbud</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>Get In Touch</h3>

            <p>
              Har du brug for professionel
              gulvbehandling? Kontakt os i dag
              og få et uforpligtende tilbud.
            </p>

            <Link href="/kontakt" className={styles.newsletterButton}>
              Kontakt BM Gulvservice
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>
            Professional Flooring Services | BM Gulvservice
          </p>

          <p>
            © {new Date().getFullYear()} BM Gulvservice.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
