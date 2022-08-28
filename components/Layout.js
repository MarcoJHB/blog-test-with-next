import Footer from '../components/Footer.js';
import Meta from '../components/Meta.js';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
