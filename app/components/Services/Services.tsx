
import Image from "next/image";
import styles from "./Services.module.scss";

const services = [
  {
    number: "01",
    title: "Gulvafslibning",
    description: "Professionel afslibning af trægulve med et flot og ensartet resultat.",
    image: "/images/service-gulvafslibning.jpg",
  },
  {
    number: "02",
    title: "Gulvafhøvling",
    description: "Effektiv afhøvling af gamle og slidte trægulve.",
    image: "/images/service-gulvafhovling.jpg",
  },
  {
    number: "03",
    title: "Gulvbehandling",
    description: "Beskyttende behandling, der giver gulvet nyt liv og lang holdbarhed.",
    image: "/images/service-gulvbehandling.jpg",
  },
  {
    number: "04",
    title: "Trapper & Træterrasser",
    description: "Slibning og behandling af trapper og udendørs træterrasser.",
    image: "/images/service-trapper.jpg",
  },
  {
    number: "05",
    title: "Gulvreparation",
    description: "Reparation og forbedring af beskadigede og slidte gulve.",
    image: "/images/service-gulvreparation.jpg",
  },
  {
    number: "06",
    title: "Øvrige ydelser",
    description: "Professionel hjælp til forskellige opgaver inden for gulvservice.",
    image: "/images/service-ovrige.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              VORES YDELSER
            </span>

            <h2>
              Hvad kan vi hjælpe <span>dig med?</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Vi tilbyder professionel gulvservice med fokus på kvalitet,
            holdbarhed og et flot resultat. Uanset opgavens størrelse
            står vi klar til at hjælpe dig.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.number}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />

                <span className={styles.number}>
                  {service.number}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className={styles.readMore}>
                  Læs mere
                  <span className={styles.arrow}>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomLine}>
          <span />
          <p>KVALITET · ERFARING · PROFESSIONELT HÅNDVÆRK</p>
          <span />
        </div>

      </div>
    </section>
  );
}
