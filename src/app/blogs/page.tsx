import Link from "next/link";
import styles from "./Blogs.module.css";
import { blogs } from "../../Data/blogsData";

export default function BlogsPage() {
  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blogs</h1>
        <p className={styles.subheading}>
          Writing about frontend, UI, and what I learn along the way
        </p>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className={styles.content}>
                <span className={styles.date}>{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <div className={styles.tags}>
                  {blog.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
