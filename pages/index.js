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
import Animation from '../components/Animation';

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
    <Layout className={styles.container}>
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
            I've had a passion for front-end development ever since I learnt how to customise my
            Android homescreen, but now I just want to help make websites better in every way.
          </p>
          <button className={styles.btn}>Get in touch</button>
        </div>
        <div className="scroll-text scroll-text-1">
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
        <div className="scroll-text scroll-text-2">
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
        <div className="scroll-text scroll-text-3">
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
          <article className={styles.projectContent}>
            <div className={styles.imgCol}>
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.textCol}>
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">REST Countries</h3>
                <p>
                  <strong>Overview: </strong> Based on the Frontend Mentor Challenge.
                </p>
                <p>
                  <strong>Problem: </strong> Use the REST Countries API to pull various country data
                  and display it accordingly.
                </p>
                <p>
                  <strong>Solution: </strong> Connect to REST Countries API with simple JS and build
                  the site in plain HTML/CSS.
                </p>
                <h4>Tech Stack</h4>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
                <h4>Useful Links</h4>
                <div>
                  <button className={styles.iconButton}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 60 59"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M30 0.103516C13.425 0.103516 0 13.5285 0 30.1035C0 43.3785 8.5875 54.591 20.5125 58.566C22.0125 58.8285 22.575 57.9285 22.575 57.141C22.575 56.4285 22.5375 54.066 22.5375 51.5535C15 52.941 13.05 49.716 12.45 48.0285C12.1125 47.166 10.65 44.5035 9.375 43.791C8.325 43.2285 6.825 41.841 9.3375 41.8035C11.7 41.766 13.3875 43.9785 13.95 44.8785C16.65 49.416 20.9625 48.141 22.6875 47.3535C22.95 45.4035 23.7375 44.091 24.6 43.341C17.925 42.591 10.95 40.0035 10.95 28.5285C10.95 25.266 12.1125 22.566 14.025 20.466C13.725 19.716 12.675 16.641 14.325 12.516C14.325 12.516 16.8375 11.7285 22.575 15.591C24.975 14.916 27.525 14.5785 30.075 14.5785C32.625 14.5785 35.175 14.916 37.575 15.591C43.3125 11.691 45.825 12.516 45.825 12.516C47.475 16.641 46.425 19.716 46.125 20.466C48.0375 22.566 49.2 25.2285 49.2 28.5285C49.2 40.041 42.1875 42.591 35.5125 43.341C36.6 44.2785 37.5375 46.0785 37.5375 48.891C37.5375 52.9035 37.5 56.1285 37.5 57.141C37.5 57.9285 38.0625 58.866 39.5625 58.566C45.5179 56.5553 50.6929 52.7277 54.3592 47.6219C58.0254 42.5161 59.9982 36.3892 60 30.1035C60 13.5285 46.575 0.103516 30 0.103516Z"
                        fill="black"
                      />
                    </svg>
                    GitHub Code
                  </button>
                  <button className={styles.iconButton}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 60 59"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M30 0.103516C13.425 0.103516 0 13.5285 0 30.1035C0 43.3785 8.5875 54.591 20.5125 58.566C22.0125 58.8285 22.575 57.9285 22.575 57.141C22.575 56.4285 22.5375 54.066 22.5375 51.5535C15 52.941 13.05 49.716 12.45 48.0285C12.1125 47.166 10.65 44.5035 9.375 43.791C8.325 43.2285 6.825 41.841 9.3375 41.8035C11.7 41.766 13.3875 43.9785 13.95 44.8785C16.65 49.416 20.9625 48.141 22.6875 47.3535C22.95 45.4035 23.7375 44.091 24.6 43.341C17.925 42.591 10.95 40.0035 10.95 28.5285C10.95 25.266 12.1125 22.566 14.025 20.466C13.725 19.716 12.675 16.641 14.325 12.516C14.325 12.516 16.8375 11.7285 22.575 15.591C24.975 14.916 27.525 14.5785 30.075 14.5785C32.625 14.5785 35.175 14.916 37.575 15.591C43.3125 11.691 45.825 12.516 45.825 12.516C47.475 16.641 46.425 19.716 46.125 20.466C48.0375 22.566 49.2 25.2285 49.2 28.5285C49.2 40.041 42.1875 42.591 35.5125 43.341C36.6 44.2785 37.5375 46.0785 37.5375 48.891C37.5375 52.9035 37.5 56.1285 37.5 57.141C37.5 57.9285 38.0625 58.866 39.5625 58.566C45.5179 56.5553 50.6929 52.7277 54.3592 47.6219C58.0254 42.5161 59.9982 36.3892 60 30.1035C60 13.5285 46.575 0.103516 30 0.103516Z"
                        fill="black"
                      />
                    </svg>
                    Live Site
                  </button>
                 
                </div>
              </div>
            </div>
          </article>
          <article className={styles.projectContent}>
            <div className={styles.textCol}>
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className={styles.imgCol}>
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
          </article>
          <article className={styles.projectContent}>
            <div className={styles.imgCol}>
              <div class="img-container">
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.textCol}>
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
          <article className={styles.projectContent}>
            <div className={styles.textCol}>
              <div class="text__block">
                <h3 class="fs-tertiary-heading fw-bold text-neutral-100">Project Name 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</p>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className={styles.imgCol}>
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
      </main>
    </Layout>
  );
}
