
import Image from "next/image";
import styles from "./Portfolio.module.scss";

const projects = [
  {
    id: 1,
    image: "/images/projects/project-1.jpg",
    alt: "Elegant trægulv i moderne soveværelse",
    className: "large",
  },
  {
    id: 2,
    image: "/images/projects/project-2.jpg",
    alt: "Professionel installation af gulv",
    className: "medium",
  },
  {
    id: 3,
    image: "/images/projects/project-3.jpg",
    alt: "Montering af nyt gulv",
    className: "small",
  },
  {
    id: 4,
    image: "/images/projects/project-4.jpg",
    alt: "Smukt trægulv i moderne kontor",
    className: "medium",
  },
  {
    id: 5,
    image: "/images/projects/project-5.jpg",
    alt: "Professionel rengøring af trægulv",
    className: "small",
  },
  {
    id: 6,
    image: "/images/projects/project-6.jpg",
    alt: "Moderne stue med flot trægulv",
    className: "small",
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Vores arbejde</span>

          <h2>
            Se vores seneste <span>projekter</span>
          </h2>

          <p>
            Vi leverer professionelt gulvarbejde med fokus på kvalitet,
            præcision og flotte resultater. Se et udvalg af vores
            seneste projekter.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.project} ${
                styles[project.className]
              }`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 40vw"
                className={styles.projectImage}
              />

              <div className={styles.imageOverlay}>
                <span className={styles.projectNumber}>
                  0{project.id}
                </span>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
