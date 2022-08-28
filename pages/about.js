import styles from '../styles/About.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/Container.js';

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
        <h3>My quick story</h3>
        <p>
          I have had a passion for making things efficient and effective, whether from a design or
          function perspective. It all started during university, while in my final year of
          Industrial Engineering, that I discovered that I wanted to experience more of the world,
          too. Since then I jave worked in Philadelphia, Thailand, Spain and more.
        </p>
        <h3>As a front-end developer</h3>
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
        <h3>As a person</h3>
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
