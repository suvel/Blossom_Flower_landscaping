import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import AccreditationPage from './pages/AccreditationPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

// GitHub Pages has no server-side routing: public/404.html redirects a deep
// link to "/?redirect=<path>". This restores the intended route once React
// Router has mounted.
function GitHubPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <GitHubPagesRedirect />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/accreditation" element={<AccreditationPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
