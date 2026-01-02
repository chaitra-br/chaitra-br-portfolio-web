import Link from "next/link";
import Image from "next/image";
import styles from "./Blogs.module.css";
import { blogs } from "../../Data/blogsData";

export default function Blogs() {
  return (
    <section id="blogs" className={styles.blogs}>
      <h2 className={styles.heading}>Blogs</h2>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className={styles.card}
          >
            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className={styles.image}
              />
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <span className={styles.date}>{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <span className={styles.readMore}>Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
