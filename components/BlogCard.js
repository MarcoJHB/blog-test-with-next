import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({ title, category, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
      <p className={styles.category}>{category.name}</p>
      <div className={styles.text}>
        <Link href={'/blog/' + slug}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
      </div>
    </div>
  );
}
