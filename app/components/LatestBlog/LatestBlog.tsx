
import Image from "next/image";
import Link from "next/link";
import { latestBlogPosts } from "../../blog/blog";
import styles from "./LatestBlog.module.scss";

export default function LatestBlog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headingContent}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              INSPIRATION & RÅD
            </span>

            <h2>
              Seneste <span>artikler</span>
            </h2>

            <p>
              Få inspiration, gode råd og nyttig viden om
              trægulve, gulvbehandling og vedligeholdelse.
            </p>
          </div>

          <Link href="/blog" className={styles.allArticles}>
            SE ALLE ARTIKLER
            <span>→</span>
          </Link>
        </div>

        <div className={styles.blogGrid}>
          {latestBlogPosts.map((post) => (
            <article
              className={styles.blogCard}
              key={post.slug}
            >
              <Link
                href={`/blog/${post.slug}`}
                className={styles.imageLink}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className={styles.blogImage}
                  />

                  <span className={styles.category}>
                    {post.category}
                  </span>

                  <span className={styles.imageArrow}>
                    ↗
                  </span>
                </div>
              </Link>

              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span>
                    {new Date(post.date).toLocaleDateString(
                      "da-DK",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className={styles.dot}></span>

                  <span>Artikel</span>
                </div>

                <h3>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p>{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.readMore}
                >
                  LÆS ARTIKLEN
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}