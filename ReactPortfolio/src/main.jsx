import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
