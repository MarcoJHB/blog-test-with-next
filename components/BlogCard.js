import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({ title, category, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
      {/* <div className={styles.imgContainer}>
          <img src={coverPhoto.url}></img>
        </div> */}
      <p className={styles.category}>{category.name}</p>
      <div className={styles.text}>
        <Link href={'/resources/' + slug}>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  );
}
