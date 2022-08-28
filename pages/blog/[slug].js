import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Container from '../../components/Container.js';

const graphcms = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/cl6vsf4ud3ejc01t605uw0vdo/master'
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      category {
        name
      }
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      {/* <PostHeader coverImage={post.coverImage} /> */}
      <img src={post.coverPhoto.url} className={styles.cover}></img>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}></div>
          <h2 className={styles.title}>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </div>
      </Container>
    </main>
  );
}
