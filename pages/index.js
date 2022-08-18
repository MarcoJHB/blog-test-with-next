import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard.js';
import Link from 'next/link';

const colorRange = ['#6FCF97', '#F2C94C', '#56CCF2', '#F2994A', '#2D9CDB', '#BB6BD9'];

const graphcms = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/cl6vsf4ud3ejc01t605uw0vdo/master'
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      category {
        name
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Web Development and Web Design, here is my portfolio that shows off my projects and industry insights"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={styles.about}>
        <div className={styles.about__box}>
          <div className={styles.leftCol}>
            <div className={styles.profileContainer}>
              <img src="./public/img/marco-profile-pic.webp" alt="" />
            </div>
            <h2 class="fs-secondary-heading">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque debitis
              officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque debitis
              officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque debitis
              officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
            </p>
          </div>

          <div className={styles.rightCol}>
            <h2 class="fs-secondary-heading">Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque debitis
              officia odit:
            </p>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>GitHub</li>
              <li>SEO</li>
              <li>Google Analytics</li>
              <li>SASS</li>
              <li>RESTful APIs</li>
              <li>Git</li>
              <li>WordPress</li>
              <li>VS Code</li>
            </ul>
            <h2 class="fs-secondary-heading">Current Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque debitis
              officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
            </p>
            <button class="btn fs-btn fs-body">Full Bio</button>
          </div>
        </div>
      </section>
      <main className={styles.main}>
        {posts
          .map((post) => (
            <BlogCard
              title={post.title}
              category={post.category}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
            />
          ))
          .sort((a, b) => {
            if (a.datePublished < b.date) {
              return 1;
            } else {
              return -1;
            }
          })
          .slice(0, 6)}
      </main>
      <Link href="blog">
        <button>More Posts</button>
      </Link>
    </div>
  );
}
