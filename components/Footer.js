import Container from './container';
import styles from '../styles/Footer.module.css';
import ContactForm from './contactForm';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.leftCol}>
            <p>Get in touch with me today!</p>
            {/* <ContactForm /> */}
            <div className={styles.socialIcons}>
              <Link href="https://twitter.com/MarcoJHB">
                <a>
                  <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="60px"
                    height="60px"
                  >
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.instagram.com/marcojhb/">
                <a>
                  <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="60px"
                    height="60px"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/marco-agas-a2b64a34/">
                <a>
                  <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </Link>
              <Link href="https://github.com/MarcoJHB">
                <a>
                  <svg
                    width="60"
                    height="59"
                    viewBox="0 0 60 59"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      // fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M30 0.103516C13.425 0.103516 0 13.5285 0 30.1035C0 43.3785 8.5875 54.591 20.5125 58.566C22.0125 58.8285 22.575 57.9285 22.575 57.141C22.575 56.4285 22.5375 54.066 22.5375 51.5535C15 52.941 13.05 49.716 12.45 48.0285C12.1125 47.166 10.65 44.5035 9.375 43.791C8.325 43.2285 6.825 41.841 9.3375 41.8035C11.7 41.766 13.3875 43.9785 13.95 44.8785C16.65 49.416 20.9625 48.141 22.6875 47.3535C22.95 45.4035 23.7375 44.091 24.6 43.341C17.925 42.591 10.95 40.0035 10.95 28.5285C10.95 25.266 12.1125 22.566 14.025 20.466C13.725 19.716 12.675 16.641 14.325 12.516C14.325 12.516 16.8375 11.7285 22.575 15.591C24.975 14.916 27.525 14.5785 30.075 14.5785C32.625 14.5785 35.175 14.916 37.575 15.591C43.3125 11.691 45.825 12.516 45.825 12.516C47.475 16.641 46.425 19.716 46.125 20.466C48.0375 22.566 49.2 25.2285 49.2 28.5285C49.2 40.041 42.1875 42.591 35.5125 43.341C36.6 44.2785 37.5375 46.0785 37.5375 48.891C37.5375 52.9035 37.5 56.1285 37.5 57.141C37.5 57.9285 38.0625 58.866 39.5625 58.566C45.5179 56.5553 50.6929 52.7277 54.3592 47.6219C58.0254 42.5161 59.9982 36.3892 60 30.1035C60 13.5285 46.575 0.103516 30 0.103516Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.rightCol}>
            {/* <ul className={styles.footerMenu}>
              {['About', 'Projects', 'Blog', 'Testimonials'].map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>Marcocodo @2022 </p>
        </div>
      </Container>
    </footer>
  );
}
