
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "./VoresArbejde.module.scss";

const projects = [
  {
    id: 1,
    title: "Professionel gulvafslibning",
    category: "Gulvafslibning",
    image: "/images/service-gulvafslibning.jpg",
  },
  {
    id: 2,
    title: "Gulvafhøvling",
    category: "Gulvafslibning",
    image: "/images/service-gulvafhovling.jpg",
  },
  {
    id: 3,
    title: "Smuk gulvbehandling",
    category: "Gulvbehandling",
    image: "/images/service-gulvbehandling.jpg",
  },
  {
    id: 4,
    title: "Trapper og træarbejde",
    category: "Trapper",
    image: "/images/service-trapper.jpg",
  },
  {
    id: 5,
    title: "Reparation af gulve",
    category: "Reparation",
    image: "/images/service-gulvreparation.jpg",
  },
  {
    id: 6,
    title: "Specialopgaver",
    category: "Øvrige opgaver",
    image: "/images/service-ovrige.jpg",
  },
  {
    id: 7,
    title: "Vores håndværk",
    category: "Gulvbehandling",
    image: "/images/about-main.jpg",
  },
  {
    id: 8,
    title: "Detaljer og kvalitet",
    category: "Gulvafslibning",
    image: "/images/about-detail.jpg",
  },
  {
    id: 9,
    title: "Gulvarbejde med præcision",
    category: "Gulvbehandling",
    image: "/images/hero-flooring.jpg",
  },
];

const filters = [
  "Alle projekter",
  "Gulvafslibning",
  "Gulvbehandling",
  "Trapper",
  "Reparation",
  "Øvrige opgaver",
];

export default function VoresArbejdePage() {
  const [activeFilter, setActiveFilter] = useState("Alle projekter");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === "Alle projekter"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const currentIndex = projects.findIndex(
    (project) => project.id === selectedImage
  );

  const currentProject = projects[currentIndex];

  const closeLightbox = () => setSelectedImage(null);

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedImage(projects[nextIndex].id);
  };

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + projects.length) % projects.length;

    setSelectedImage(projects[previousIndex].id);
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, currentIndex]);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            BM GULVSERVICE
          </span>

          <h1>
            Vores <span>arbejde</span>
          </h1>

          <p>
            Se et udvalg af vores arbejde og oplev,
            hvordan godt håndværk gør en forskel.
          </p>

          <div className={styles.breadcrumb}>
            <Link href="/">Forside</Link>
            <span>/</span>
            <span>Vores arbejde</span>
          </div>
        </div>

        <div className={styles.heroBadge}>
          <strong>BM</strong>
          <span>Professionelt håndværk</span>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introLabel}>
          <span className={styles.eyebrow}>
            VORES PORTFØLJE
          </span>
          <span className={styles.introLine} />
        </div>

        <div className={styles.introContent}>
          <h2>
            Kvalitet, du kan <span>se.</span>
          </h2>

          <p>
            Hvert gulvprojekt er unikt. Vi arbejder med
            omhu, præcision og fokus på detaljerne for
            at skabe flotte og holdbare resultater.
            Se vores arbejde herunder.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryTop}>
          <div>
            <span className={styles.eyebrow}>
              INSPIRATION
            </span>
            <h2>Udvalgte projekter</h2>
          </div>

          <span className={styles.projectCount}>
            {filteredProjects.length.toString().padStart(2, "0")} projekter
          </span>
        </div>

        {/* FILTERS */}
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? styles.activeFilter
                  : ""
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className={styles.galleryGrid}>
          {filteredProjects.map((project, index) => (
            <article
              className={styles.projectCard}
              key={project.id}
              onClick={() => setSelectedImage(project.id)}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  priority={index < 3}
                />

                <div className={styles.imageOverlay}>
                  <span className={styles.zoomIcon}>
                    <ArrowUpRight size={23} />
                  </span>
                </div>

                <span className={styles.projectNumber}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <div className={styles.projectInfo}>
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentProject && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Projektbillede"
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Luk billede"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.previous}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Forrige billede"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.lightboxImage}>
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                sizes="95vw"
                priority
              />
            </div>

            <div className={styles.lightboxCaption}>
              <div>
                <span>{currentProject.category}</span>
                <h3>{currentProject.title}</h3>
              </div>

              <span>
                {currentIndex + 1} / {projects.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.next}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Næste billede"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>
            SKAL VI HJÆLPE DIG?
          </span>

          <h2>
            Klar til at forvandle
            <span> dit gulv?</span>
          </h2>

          <p>
            Kontakt os og få en uforpligtende snak
            om dit næste gulvprojekt.
          </p>
        </div>

        <Link href="/kontakt" className={styles.ctaButton}>
          Få et gratis tilbud
          <ArrowUpRight size={19} />
        </Link>
      </section>
    </main>
  );
}
