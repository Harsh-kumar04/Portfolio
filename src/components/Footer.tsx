import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Github as GitHub, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Harsh Kumar</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate web developer dedicated to creating beautiful, functional, 
              and user-friendly websites and applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/Harsh-kumar04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hk412/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:harshkumar9544@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:harsh.kumar@example.com" className="hover:text-white transition-colors duration-300">
                  harshkumar9544@gmail.com
                </a>
              </li>
              <li>Ahemdabad, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Harsh Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;