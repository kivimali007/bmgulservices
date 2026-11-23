
import styles from "./Benefits.module.scss";

const benefits = [
  {
    number: "01",
    icon: "guarantee",
    title: "Tilfredshedsgaranti",
    description:
      "Vi går op i kvalitet og detaljer, så du får et resultat, du kan være tilfreds med.",
    link: "/om-os",
    linkText: "Læs mere",
    featured: false,
  },
  {
    number: "02",
    icon: "quality",
    title: "Kvalitetsmaterialer",
    description:
      "Vi anvender kvalitetsprodukter og gennemtestede metoder til alle vores gulvopgaver.",
    link: "/ydelser",
    linkText: "Læs mere",
    featured: false,
  },
  {
    number: "03",
    icon: "team",
    title: "Professionelt team",
    description:
      "Vores erfarne team leverer professionelt håndværk med fokus på kvalitet og service.",
    link: "/om-os",
    linkText: "Læs mere",
    featured: true,
  },
];

function BenefitIcon({ type }: { type: string }) {
  if (type === "guarantee") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 3L29 8L36 7L37 14L43 18L39 24L43 31L36 34L35 41L28 39L23 45L18 39L11 41L10 34L4 30L8 23L4 17L11 13L12 6L19 8L24 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M16 24L22 30L33 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle
          cx="21"
          cy="25"
          r="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 24L20 32L40 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="31" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="23" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7 36C7 30 11 27 17 27M41 36C41 30 37 27 31 27M14 44V39C14 32 18 29 24 29C30 29 34 32 34 39V44M19 44V39M29 44V39"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section className={styles.benefits} aria-label="Vores fordele">
      <div className={styles.container}>
        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className={`${styles.card} ${
                benefit.featured ? styles.featured : ""
              }`}
            >
              <div className={styles.icon}>
                <BenefitIcon type={benefit.icon} />
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <a href={benefit.link} className={styles.link}>
                {benefit.linkText}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
