import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard.js';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/img/marco-profile-pic.webp';
import Script from 'next/script';

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
      <Layout>
        <Head>
          <title>My Portfolio</title>
          <meta
            name="description"
            content="Web Development and Web Design, here is my portfolio that shows off my projects and industry insights"
          />
          <link rel="icon" href="/favicon.svg" />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollToPlugin.min.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></Script>
          <Script src="./components/Animation.js" defer />
        </Head>

        <header class="header">
          <div class="header__box">
            <h1 class="header__title fw-regular fs-display-lg">
              I’m Marco, and I like to
              <br />
              make <span class="awesome-text text-primary-400">awesome</span>
              <br />
              websites.
            </h1>
            <p class="header__body fs-body">
              I've had a passion for front-end development ever since I learnt how to customise my
              Android homescreen, but now I just want to help make websites better in every way.
            </p>
            <button class="btn fs-btn fs-body">Get in touch</button>
          </div>
          <div class="scroll-text scroll-text-1">
            <span>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
              <a class="spanish text-hover">Hola</a>
              <a class="korean text-hover">안녕하세요</a>
              <a class="italian text-hover">Ciao</a>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
            </span>
          </div>
          <div class="scroll-text scroll-text-2">
            <span>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
              <a class="spanish text-hover">Hola</a>
              <a class="korean text-hover">안녕하세요</a>
              <a class="italian text-hover">Ciao</a>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
            </span>
          </div>
          <div class="scroll-text scroll-text-3">
            <span>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
              <a class="spanish text-hover">Hola</a>
              <a class="korean text-hover">안녕하세요</a>
              <a class="italian text-hover">Ciao</a>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
            </span>
          </div>
          <div class="scroll-text scroll-text-4">
            <span>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
              <a class="spanish text-hover">Hola</a>
              <a class="korean text-hover">안녕하세요</a>
              <a class="italian text-hover">Ciao</a>
              <a class="greek text-hover">Χαίρετε</a>
              <a class="zulu text-hover">Sawubona</a>
              <a class="french text-hover">Bonjour</a>
              <a class="chinese text-hover">你好</a>
              <a class="afrikaans text-hover">Hallo</a>
            </span>
          </div>
        </header>

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
        <main>
          <Container>
            <section>
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
            </section>
          </Container>
        </main>
        <Link href="blog">
          <button>More Posts</button>
        </Link>

        <section class="projects">
          <h2 class="section-heading fs-secondary-heading text-neutral-100">
            Some projects I built that you might enjoy
          </h2>
          <div id="mouse-project">View Project</div>
          <article class="project__content project-1">
            <div class="img-col">
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div class="text-col">
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </article>
          <article class="project__content project-2">
            <div class="text-col">
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div class="img-col">
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
          </article>
          <article class="project__content project-3">
            <div class="img-col">
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div class="text-col">
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </article>
          <article class="project__content project-4">
            <div class="text-col">
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div class="img-col">
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
          </article>
          <button class="btn fs-btn fs-body">More Projects</button>
        </section>
        <section class="testimonials">
          <article class="testimonial">
            <div class="testimonial-text fs-tertiary-heading text-neutral-900">
              <p>
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure placeat perspiciatis
                velit minus praesentium nulla distinctio voluptatum sapiente facere maiores
                molestias odit vel quod id nostrum quaerat aliquam consequatur delectus unde
                veritatis, accusamus vero amet! Fugit id odit officia rerum."
              </p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="testimononial-img">
              <div class="profile-background">
                <img src="" alt="" />
              </div>
            </div>
          </article>
          <article class="testimonial">
            <div class="testimononial-img">
              <div class="profile-background">
                <img src="" alt="" />
              </div>
            </div>
            <div class="testimonial-text fs-tertiary-heading text-neutral-900">
              <p>
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure placeat perspiciatis
                velit minus praesentium nulla distinctio voluptatum sapiente facere maiores
                molestias odit vel quod id nostrum quaerat aliquam consequatur delectus unde
                veritatis, accusamus vero amet! Fugit id odit officia rerum."
              </p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </article>
        </section>
      </Layout>
    </div>
  );
}
