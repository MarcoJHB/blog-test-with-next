import styles from '../styles/Project.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({
  name,
  overview,
  problem,
  solution,
  stacks,
  github,
  liveLink,
  imgSrc,
}) {
  return (
    <article className={styles.projectContent}>
      <div className={styles.imgCol}>
        <div className={styles.imgContainer}>
          <Image src={imgSrc} layout="fill" objectFit="cover" alt={name}></Image>
        </div>
      </div>
      <div className={styles.textCol}>
        <div class="text__block">
          <h3 class="fs-tertiary-heading fw-bold text-neutral-100">{name}</h3>
          <div>
            <h4>Project Summary</h4>
            <p>
              <strong>Overview: </strong>
              {overview}
            </p>
            <p>
              <strong>Problem: </strong>
              {problem}
            </p>
            <p>
              <strong>Solution: </strong>
              {solution}
            </p>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <ul>
              {Array.from(stacks).map((stack) => (
                <li>{stack}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <div className={styles.projectButtons}>
              <Link href={github} passHref>
                <button className={styles.iconButton}>
                  <div className={styles.iconContainer}>
                    <svg
                      width="20"
                      height="20"
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
                  </div>
                  GitHub Code
                </button>
              </Link>
              <Link href={liveLink} passHref>
                <button className={styles.iconButton}>
                  <div className={styles.iconContainer}>
                    <svg
                      width="20"
                      height="20"
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
                  </div>
                  Live Site
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
