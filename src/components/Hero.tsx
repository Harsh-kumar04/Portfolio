import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Github as GitHub, Linkedin, Instagram } from 'lucide-react';
import passportImage from '../assets/passport.jpg'; 

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 pb-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute top-20 right-0 w-72 h-72 bg-blue-${isDark ? '600' : '200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
        <div className={`absolute top-40 -left-4 w-72 h-72 bg-purple-${isDark ? '600' : '200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-${isDark ? '600' : '200'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-blue-700 dark:text-blue-500 font-medium">Hi, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Harsh Kumar
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 dark:text-gray-400">
                I build exceptional web experiences
              </h2>
              <p className="text-lg max-w-lg text-gray-600 dark:text-gray-400 mt-6">
                I'm a passionate developer focused on building clean, responsive, and useful web experiences. I'm currently learning full-stack development and working on real-world projects that solve everyday problems.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="#projects" 
                  className="btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-secondary"
                >
                  Contact Me
                </a>
              </div>
              
              <div className="flex items-center space-x-6 mt-8">
                <a href="https://github.com/Harsh-kumar04" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <GitHub size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/hk412/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/20"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img 
              src={passportImage}  
              alt="Harsh Kumar" 
              className="w-full h-full object-cover"
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;