import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({ title, category, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url}></img>
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.category}>
            <p>{category.name}</p>
            <p className={styles.datePublished}>{datePublished}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
