import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="Marco Agas | Front-End Web Developer"
        content="Developing websites, apps and more."
      />
      <link rel="icon" href="/favicon.svg" />
      <link src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></link>
      <link src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></link>
      <link src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollToPlugin.min.js"></link>
      <link src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></link>
      <link src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></link>
      <link src="./components/Animation.js" defer />
      <meta property="og:image" content="/favicon/favicon-32x32.png" />
      <meta
        name="description"
        content="Web Development and Web Design, here is my portfolio that shows off my projects and industry insights"
      />
    </Head>
  );
}
