
import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";

const advantages = [
  {
    number: "01",
    icon: "✦",
    title: "Professionel erfaring",
    description:
      "Vi har fokus på godt håndværk og løsninger, der holder i mange år.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Materialer i høj kvalitet",
    description:
      "Vi lægger vægt på kvalitetsmaterialer og den rette behandling til hvert gulv.",
  },
  {
    number: "03",
    icon: "♙",
    title: "Grundigt håndværk",
    description:
      "Vi arbejder omhyggeligt med hver eneste detalje for at sikre et flot resultat.",
  },
  {
    number: "04",
    icon: "✧",
    title: "Personlig service",
    description:
      "Vi tager udgangspunkt i dine ønsker og finder den løsning, der passer til dig.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>

        {/* HEADER */}

        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              HVORFOR VÆLGE OS?
            </span>

            <h2>
              Vi leverer kvalitet
              <br />
              <span>fra start til slut.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Hos BM Gulvservice går vi op i kvalitet, godt håndværk
            og tilfredse kunder. Vi arbejder målrettet på at give
            dine gulve nyt liv med et resultat, du kan glæde dig over.
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div className={styles.content}>

          {/* LEFT IMAGE */}

          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-flooring.jpg"
              alt="Professionel gulvservice og gulvbehandling"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />

            <div className={styles.imageLabel}>
              <span className={styles.labelLine} />
              <span>BM GULVSERVICE</span>
            </div>

            <div className={styles.imageCaption}>
              <span>01 /</span>
              <p>Professionelt håndværk med fokus på detaljerne</p>
            </div>
          </div>

          {/* RIGHT ADVANTAGES */}

          <div className={styles.advantages}>
            <div className={styles.advantagesHeader}>
              <span>DET ER DET, DER GØR FORSKELLEN</span>
              <div />
            </div>

            <div className={styles.advantagesGrid}>
              {advantages.map((item) => (
                <article
                  className={styles.advantage}
                  key={item.number}
                >
                  <div className={styles.advantageTop}>
                    <span className={styles.icon}>
                      {item.icon}
                    </span>

                    <span className={styles.number}>
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.bottomText}>
              <span className={styles.bottomCheck}>✓</span>
              <p>
                Kvalitet i hver detalje – fra første kontakt til færdigt gulv.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
