import postStyles from './PostStyles.module.css';

export default function PostBody({ content }) {
  return <div className={styles.post} dangerouslySetInnerHTML={{ __html: content?.html }} />;
}
