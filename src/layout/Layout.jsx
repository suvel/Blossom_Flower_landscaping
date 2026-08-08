import { Outlet } from 'react-router-dom';
import Spinner from './Spinner.jsx';
import Topbar from './Topbar.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Copyright from './Copyright.jsx';
import BackToTop from './BackToTop.jsx';

export default function Layout() {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
}
