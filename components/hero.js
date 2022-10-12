import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [awesomeText, setAwesomeText] = useState('awesome');

  const handleMouseOver = (e) => {
    setIsHovering(true);
    setAwesomeText(e.target.getAttribute('data-id'));
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <header className={styles.hero}>
      <div className={styles.heroBox}>
        <h1 className="hero fw-regular fs-display-lg">
          I’m Marco, and I like to
          <br />
          make <span className="awesome-text text-primary-400">{awesomeText}</span>
          <br />
          websites.
        </h1>
        <p className="hero fs-body">Pursuing front-end development - one div at a time.</p>
        <Link href="#about">
          <button className={styles.btn}>About this guy</button>
        </Link>
      </div>
      <div className="scroll-text scroll-text-1">
        <span>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
          <a
            className="spanish text-hover"
            data-id={'increíble'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hola
          </a>
          <a
            className="korean text-hover"
            data-id={'엄청난'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            안녕하세요
          </a>
          <a
            className="italian text-hover"
            data-id={'eccezionale'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Ciao
          </a>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
        </span>
      </div>
      <div className="scroll-text scroll-text-2">
        <span>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
          <a
            className="spanish text-hover"
            data-id={'increíble'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hola
          </a>
          <a
            className="korean text-hover"
            data-id={'엄청난'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            안녕하세요
          </a>
          <a
            className="italian text-hover"
            data-id={'eccezionale'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Ciao
          </a>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
        </span>
      </div>
      <div className="scroll-text scroll-text-3">
        <span>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
          <a
            className="spanish text-hover"
            data-id={'increíble'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hola
          </a>
          <a
            className="korean text-hover"
            data-id={'엄청난'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            안녕하세요
          </a>
          <a
            className="italian text-hover"
            data-id={'eccezionale'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Ciao
          </a>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
        </span>
      </div>
      <div className="scroll-text scroll-text-4">
        <span>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
          <a
            className="spanish text-hover"
            data-id={'increíble'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hola
          </a>
          <a
            className="korean text-hover"
            data-id={'엄청난'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            안녕하세요
          </a>
          <a
            className="italian text-hover"
            data-id={'eccezionale'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Ciao
          </a>
          <a
            className="greek text-hover"
            data-id={'φοβερό'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Χαίρετε
          </a>
          <a
            className="zulu text-hover"
            data-id={'emangalisayo'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Sawubona
          </a>
          <a
            className="french text-hover"
            data-id={'extraordinaire'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Bonjour
          </a>
          <a
            className="chinese text-hover"
            data-id={'惊人'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            你好
          </a>
          <a
            className="afrikaans text-hover"
            data-id={'ontsagwekkende'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Hallo
          </a>
        </span>
      </div>
    </header>
  );
}
