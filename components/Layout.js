import Footer from './Footer.js';
import Meta from './meta.js';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
    