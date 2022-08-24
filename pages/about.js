import styles from '../styles/About.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/container';
import Head from 'next/head';

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
        />
      </div>
      <Container>
        <h2 className={styles.title}>About Me</h2>
        <h3>Education</h3>
        <p>B.Eng (Industrial Engineering)</p>
        <h3>Career</h3>
        <ul>
          <li>Digital Marketing Manager (The Juice Creative)</li>
          <li>Simulation Engineer (4Sight | SET)</li>
        </ul>
        <h3>Programming Languages</h3>
      </Container>
    </main>
  );
}
