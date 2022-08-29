import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

const colorRange = ['#6FCF97', '#F2C94C', '#56CCF2', '#F2994A', '#2D9CDB', '#BB6BD9'];

export default function BlogPost({ title, category, coverPhoto, datePublished, slug }) {
  function colorSwap() {
    for (let i = 0; i < colorRange.length; i++) {
      return colorRange[i];
    }
  }

  return (
    <div style={{ backgroundColor: `${colorSwap()}` }} className={styles.card}>
      <p className={styles.category}>{category.name}</p>
      <div className={styles.text}>
        <Link href={'/blog/' + slug}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
      </div>
    </div>
  );
}
