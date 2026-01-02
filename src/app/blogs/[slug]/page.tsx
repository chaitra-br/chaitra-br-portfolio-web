import { notFound } from "next/navigation";
import styles from "./BlogDetail.module.css";
import { blogs } from "../../../Data/blogsData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params; // ✅ REQUIRED in Next 15

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className={styles.blog}>
      <div className={styles.container}>
        {/* IMAGE */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.image}
          />
        )}

        <h1 className={styles.title}>{blog.title}</h1>

        <div className={styles.meta}>
          <span>{blog.date}</span>
        </div>

        <div className={styles.content}>
          {blog.content
            .trim()
            .split("\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
      </div>
    </article>
  );
}
