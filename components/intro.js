import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Intro.module.css';
import profilePic from '../public/img/marco-profile-pic.webp';
import Container from './container';

export default function Intro() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about__box}>
        <div className={styles.leftCol}>
          <div className={styles.profileContainer}>
            <Image src={profilePic} alt="Marco Profile Image" />
          </div>
          <h2 className="secondaryHeading">About Me</h2>
          <p>
            I have had a passion for front-end development ever since I learnt how to customise my{' '}
            <Link href="https://www.youtube.com/user/mycolorscreen" passHref>
              <a className="link">Android homescreen</a>
            </Link>
            . And, ever since university, the online world always fascinated me. I have worked in
            all careers, from marketing to engineering, but each time my passion for web development
            grew stronger.
          </p>
          <p>
            Currently, I am learning as much about{' '}
            <Link href="https://github.com/MarcoJHB" passHref>
              <a className="link">front-end development</a>
            </Link>{' '}
            as possible using the various skills I have picked up along my journey.
          </p>
        </div>

        <div className={styles.rightCol}>
          <h2 className="secondaryHeading">Skills</h2>
          <p>Below are some of the tools and technologies I use to help bring ideas to reality:</p>
          <ul className="skillsList">
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
            ].map((element, index) => (
              <li key="{index}">{element}</li>
            ))}
          </ul>
          <h2 className="secondaryHeading">Current Projects</h2>
          <p>
            I am currently sinking myself into React and NextJS, follow me on&nbsp;
            <Link href="https://twitter.com/MarcoJHB">
              <a className="link">Twitter</a>
            </Link>{' '}
            as I attempt to complete my&nbsp;
            <Link href="https://twitter.com/hashtag/100DaysOfCode">
              <a className="link">#100daysofcode</a>
            </Link>
            .
          </p>
          <Link href="#projects" className='intButton'>
            <button>See some projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
