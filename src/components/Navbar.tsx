import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
            >
              Harsh Kumar
            </button>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </nav>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="mobile-nav-link">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;