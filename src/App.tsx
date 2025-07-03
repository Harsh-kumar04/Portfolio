import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = document.documentElement.scrollTop;
    setScrollProgress((currentScroll / totalScroll) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Navbar />
        <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50" style={{ width: `${scrollProgress}%` }} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;