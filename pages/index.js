import Container from '../components/container';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/blogCard';
import Link from 'next/link';
import Image from 'next/image';
import Project from '../components/project';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Head from 'next/head';
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

// const graphcms = new GraphQLClient(
//   'https://api-eu-west-2.hygraph.com/v2/cl6vsf4ud3ejc01t605uw0vdo/master'
// );

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

// export async function getStaticProps() {
//   const { posts } = await graphcms.request(QUERY);
//   return {
//     props: {
//       posts,
//     },
//     revalidate: 10,
//   };
// }

export default function Home({ posts }) {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector('.scroll-text-1'),
  //     {
  //       opacity: 0,
  //       y: -20,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //     }
  //   );
  // }, []);

  return (
    <Layout className={styles.container}>
      <Head>
        <title>Marco Agas | Front-End Web Developer</title>
      </Head>
      <Hero />
      <main>
        <Intro />
        {/* <Container>
          <section className={styles.centerSection}>
            <h2 className={styles.secondaryHeading}>
              Discover the best things to read, watch, make, and more!
            </h2>
            <div className={styles.blog}>
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
            </div>
            <Link href="blog">
              <button>More Posts</button>
            </Link>
          </section>
        </Container> */}

        <section className={styles.projects} id="projects">
          <h2 className={styles.secondaryHeading}>Some projects I built that you might enjoy</h2>
          <div className="mouse-project">View Project</div>
          <Project
            name="🗺️ REST Countries with Dark Mode"
            overview="Based on the Frontend Mentor Challenge."
            problem="Use the REST Countries API to pull various country data and
            display it accordingly."
            solution="Connect to REST Countries API with simple JS and build the
            site in plain HTML/CSS."
            stacks={['Javascript', 'CSS', 'HTML']}
            github="https://github.com/MarcoJHB/rest-countries-colour-switcher"
            liveLink="https://marcojhb.github.io/rest-countries-colour-switcher/"
            className={styles.projectCard}
            imgSrc="/img/rest-countries.jpg"
          />
          <Project
            name="❤️ Love you more than"
            overview="I sometimes try impress my girlfriend with cool birthday presents. This time I decided to show her the results of late nights on my PC."
            problem="I wanted to create a list of things I loved her more than, while still making it an enjoying experience."
            solution="Create a basic site that generates a random quote from an array I generated."
            stacks={['Javascript', 'CSS', 'HTML']}
            github="https://github.com/MarcoJHB/LoveYouMoreThan"
            liveLink="https://marcojhb.github.io/LoveYouMoreThan/"
            className={styles.projectCard}
            imgSrc={'/img/marcojhb.github.io_LoveYouMoreThan_.png'}
          />
          <Project
            name="🔢 Test Yo Math"
            overview="I build an app to help boost my basic math arithmetic skills"
            problem="Increasing the difficulty and also saving names to a database."
            solution="Used react to handle repetition and saving scores to Firebase."
            stacks={['React', 'Firebase', 'CSS']}
            github="https://github.com/MarcoJHB/basic-math-quiz"
            liveLink="https://test-yo-math.netlify.app/"
            className={styles.projectCard}
            imgSrc={'/img/test-math.jpg'}
          />
          <Project
            name="🤸 Twister Phone Game"
            overview="My partner and I decided to try out fun games together, so we decided to try out the popular game called Twister."
            problem="I wanted the game to be played on my phone with minimal interactions required."
            solution="A simply HTML/CSS site that only requires taps from the user to change the colour/body part."
            stacks={['Javascript', 'CSS', 'HTML']}
            github="https://github.com/MarcoJHB/twister"
            liveLink="https://marcojhb.github.io/twister/"
            className={styles.projectCard}
            imgSrc={'/img/marcojhb.github.io_twister_.png'}
          />
        </section>
      </main>
    </Layout>
  );
}
