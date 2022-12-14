import styles from '../styles/About.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/container';

export default function About() {
  return (
    <main className={styles.about}>
      <div className={styles.pageHeader}>
        <Image
          src="/img/marcojhb.github.io_gravity-collision_.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt="Gravity Collision"
        />
      </div>
      <Container>
        <h1 className={styles.title}>About Me</h1>
        <p>
          Looking for my
          <Link href="#">
            <a>CV</a>
          </Link>
          ?
        </p>
        <h2 className="secondaryHeading">My quick story</h2>
        <p>
          I have had a passion for making things efficient and effective, whether from a design or
          function perspective. It all started during university, while in my final year of
          Industrial Engineering, that I discovered that I wanted to experience more of the world,
          too. Since then I jave worked in Philadelphia, Thailand, Spain and more.
        </p>
        <h2 className="secondaryHeading">As a front-end developer</h2>
        <p>
          Improving UI and UX has always run through my veins, ever since I started editing my
          Android homescreen and creating my own desktop widgets on my PC in high school. Back then,
          programming seemed like an impossible task. However, once I started building websites for
          my own website company using WordPress, I was hooked.
        </p>
        <p>
          Since 2020, I've been trying to learn as much as I can about front-end web design. Working
          full-time meant that I could only learn in the mornings or on the weekend, but it didn't
          stop me.
        </p>
        <h3>Useful Stats</h3>
        <ul>
          <li>234 commits on GitHub</li>
          <li>12 websites built</li>
          <li>5 languages</li>
        </ul>
        <p>
          My goal is to improve my knowledge in React, NextJS and headless CMS management for users.
          I believe that design only tells half the story. Important content and HTML structure is
          just as important if the client wishes to optimise their website on Google.
        </p>
        <h2 className="secondaryHeading">As a person</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veniam illo amet cumque
          impedit nam sunt veritatis, quidem officia dolores soluta possimus iusto minus recusandae
          eos fuga illum harum. Aperiam!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veniam illo amet cumque
          impedit nam sunt veritatis, quidem officia dolores soluta possimus iusto minus recusandae
          eos fuga illum harum. Aperiam!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi veniam illo amet cumque
          impedit nam sunt veritatis, quidem officia dolores soluta possimus iusto minus recusandae
          eos fuga illum harum. Aperiam!
        </p>
        <h2>Let us have a chat!</h2>
        <p>I would love to hear from you.</p>
      </Container>
    </main>
  );
}
