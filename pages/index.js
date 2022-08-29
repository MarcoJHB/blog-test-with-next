import Container from '../components/Container';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/img/marco-profile-pic.webp';
import Project from '../components/Project';
import Head from 'next/head';

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
    <Layout className={styles.container}>
      <Head>
        <title>Marco Agas - Portfolio</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header__box}>
          <h1 className="header__title fw-regular fs-display-lg">
            I’m Marco, and I like to
            <br />
            make <span className="awesome-text text-primary-400">awesome</span>
            <br />
            websites.
          </h1>
          <p className="header__body fs-body">
            I have had a passion for front-end development ever since I learnt how to customise my
            Android homescreen, but now I just want to help make websites better in every way.
          </p>
          <button className={styles.btn}>Get in touch</button>
        </div>
        <div className="scroll-text scroll-text-1">
          <span>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
            <a className="spanish text-hover">Hola</a>
            <a className="korean text-hover">안녕하세요</a>
            <a className="italian text-hover">Ciao</a>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
          </span>
        </div>
        <div className="scroll-text scroll-text-2">
          <span>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
            <a className="spanish text-hover">Hola</a>
            <a className="korean text-hover">안녕하세요</a>
            <a className="italian text-hover">Ciao</a>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
          </span>
        </div>
        <div className="scroll-text scroll-text-3">
          <span>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
            <a className="spanish text-hover">Hola</a>
            <a className="korean text-hover">안녕하세요</a>
            <a className="italian text-hover">Ciao</a>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
          </span>
        </div>
        <div className="scroll-text scroll-text-4">
          <span>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
            <a className="spanish text-hover">Hola</a>
            <a className="korean text-hover">안녕하세요</a>
            <a className="italian text-hover">Ciao</a>
            <a className="greek text-hover">Χαίρετε</a>
            <a className="zulu text-hover">Sawubona</a>
            <a className="french text-hover">Bonjour</a>
            <a className="chinese text-hover">你好</a>
            <a className="afrikaans text-hover">Hallo</a>
          </span>
        </div>
      </header>
      <main>
        <section className={styles.about}>
          <div className={styles.about__box}>
            <div className={styles.leftCol}>
              <div className={styles.profileContainer}>
                <Image src={profilePic} alt="Marco Profile Image" />
              </div>
              <h2 className={styles.secondaryHeading}>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque
                debitis officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque
                debitis officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque
                debitis officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
              </p>
            </div>

            <div className={styles.rightCol}>
              <h2 className={styles.secondaryHeading}>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque
                debitis officia odit:
              </p>
              <ul>
                {[
                  'Javascript',
                  'HTML',
                  'CSS',
                  'GitHub',
                  'SEO',
                  'Google Analytics',
                  'SASS',
                  'RESTful APIs',
                  'Git',
                  'WordPress',
                  'VS Code',
                ].map((item) => (
                  <li key="{item}">{item}</li>
                ))}
              </ul>
              <h2 className={styles.secondaryHeading}>Current Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum doloremque
                debitis officia odit impedit facilis sequi, aspernatur reiciendis incidunt!
              </p>
              <Link href="about">
                <button>Full Bio</button>
              </Link>
            </div>
          </div>
        </section>

        <Container>
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
        </Container>

        <section className={styles.projects}>
          <h2 className={styles.secondaryHeading}>Some projects I built that you might enjoy</h2>
          <div id="mouse-project">View Project</div>
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
            overview="Based on the Frontend Mentor Challenge."
            problem="Use the REST Countries API to pull various country data and
            display it accordingly."
            solution="Connect to REST Countries API with simple JS and build the
            site in plain HTML/CSS."
            stacks={['Javascript', 'CSS', 'HTML']}
            github="https://github.com/MarcoJHB/LoveYouMoreThan"
            liveLink="https://marcojhb.github.io/LoveYouMoreThan/"
            className={styles.projectCard}
            imgSrc={'/img/marcojhb.github.io_LoveYouMoreThan_.png'}
          />
          <Project
            name="🍎 Gravity Collision"
            overview="A simple playground for having fun with gravity and canvas."
            problem="Using the canvas, build a page that simulates balls dropping from the top."
            solution="Use canvas and vector formulas"
            stacks={['Javascript', 'CSS', 'HTML']}
            github="https://github.com/MarcoJHB/gravity-collision"
            liveLink="https://marcojhb.github.io/LoveYouMoreThan/"
            className={styles.projectCard}
            imgSrc={'/img/marcojhb.github.io_gravity-collision_.png'}
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
