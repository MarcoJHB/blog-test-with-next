import styles from '../../styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Container from '../../components/container';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

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
    <Layout>
      <Head>
        <title>{post.title + ' | Marco Agas Portfolio'}</title>
      </Head>
      <main className={styles.blog}>
        {/* <PostHeader coverImage={post.coverImage} /> */}
        <Image
          width={2000}
          height={1000}
          alt={`Cover Image for ${post.title}`}
          className={styles.cover}
          src={post.coverPhoto.url}
        />
        <Container>
          <div className={styles.content}>
            <div className={styles.title}></div>
            <h2 className={styles.title}>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
