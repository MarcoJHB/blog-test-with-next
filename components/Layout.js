import Footer from '../components/Footer';
import Meta from '../components/Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
