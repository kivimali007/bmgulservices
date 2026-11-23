
import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.scss";

const benefits = [
  "Højeste kvalitetsstandarder",
  "100% kundetilfredshed",
  "Grundig kvalitetskontrol",
  "Personlig service og rådgivning",
  "Professionelt team",
  "Materialer af høj kvalitet",
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>

        {/* LEFT - IMAGE COMPOSITION */}
        <div className={styles.visual}>

          <div className={styles.mainImage}>
            <Image
              src="/images/about-main.jpg"
              alt="Professionel gulvlægger hos BM Gulvservice"
              fill
              priority={false}
              sizes="(max-width: 800px) 100vw, 45vw"
            />
          </div>

          <div className={styles.secondaryImage}>
            <Image
              src="/images/about-detail.jpg"
              alt="Professionelt gulvarbejde"
              fill
              sizes="(max-width: 800px) 60vw, 20vw"
            />
          </div>

          <div className={styles.experience}>
            <div className={styles.experienceNumber}>
              20<span>+</span>
            </div>
            <p>
              Års erfaring
              <br />
              med gulvservice
            </p>
          </div>

          <div className={styles.imageAccent} />
        </div>

        {/* RIGHT - CONTENT */}
        <div className={styles.content}>

          <div className={styles.eyebrow}>
            <span />
            OM BM GULVSERVICE
          </div>

          <h2>
            Professionel gulvservice
            <br />
            med fokus på <span>kvalitet</span>
          </h2>

          <p className={styles.description}>
            Hos BM Gulvservice leverer vi professionel gulvservice
            med fokus på kvalitet, godt håndværk og tilfredse kunder.
            Vi hjælper med at give dine gulve nyt liv gennem grundigt
            arbejde og de rigtige materialer.
          </p>

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div className={styles.benefit} key={benefit}>
                <span className={styles.check}>✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* SMALL IMAGE */}
          <div className={styles.detailImage}>
            <Image
              src="/images/hero-flooring.jpg"
              alt="Gulvafslibning med professionelt udstyr"
              fill
              sizes="(max-width: 800px) 100vw, 220px"
            />
          </div>

          {/* BOTTOM ACTION */}
          <div className={styles.bottom}>
            <div className={styles.signature}>
              <div className={styles.signatureIcon}>BM</div>

              <div>
                <strong>BM Gulvservice</strong>
                <span>Professionelt gulvhåndværk</span>
              </div>
            </div>

            <Link href="/om-os" className={styles.button}>
              LÆS MERE OM OS
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
