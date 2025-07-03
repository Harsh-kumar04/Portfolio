import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Github as GitHub, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Money from '../assets/money.jpg'; 
import tracklify from '../assets/Trakilify.jpg'; 


// Define the project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const [activeProject, setActiveProject] = useState(0);

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Money Map",
      description: "A web application designed as a financial planning tool to help students track their expenses, set realistic budgets, and manage savings effectively. It features interactive charts that provide clear visual insights into spending patterns, simplifying financial management. With a user-friendly interface and an intuitive dashboard highlighting key financial information, the app motivates students to develop healthy money habits. This tool not only meets their financial needs but also encourages smarter, long-term financial decisions through engaging and accessible design.",
      image: Money,
      technologies: ["Html", "CSS", "Java Script", "LocalStorage" ],
      githubUrl: "https://github.com/Harsh-kumar04/Monet-Map",
      liveUrl: "https://monet-map.vercel.app/"
    },
    {
      id: 2,
      title: "Tracklify",
      description: "A web application designed to help users efficiently manage their job and internship applications. It offers key features such as adding, editing, and deleting entries, powerful search capabilities, and status filters to streamline tracking. Utilizing LocalStorage ensures persistent data saving so users’ information is preserved across sessions. The app provides a clean, user-friendly interface that simplifies application management and keeps users organized throughout their job search journey.",

      image:tracklify ,
      technologies: ["Html", "CSS", "Java Script", "LocalStorage"],
      githubUrl: "https://github.com/Harsh-kumar04/Tracklify",
      liveUrl: "https://tracklify.vercel.app/"
    },
    {
      id: 3,
      title: "Project Travelling",
      description: "A travel planning application that helps users plan their trips, discover new destinations, and share their travel experiences. The app features interactive maps, itinerary planning, and social sharing capabilities.",
      image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Html", "CSS", "Boot Strap", "Django" ,"Python"],
      githubUrl: "https://github.com/Harsh-kumar04/Project_Travelling",
      liveUrl: "https://project-travelling.vercel.app/"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent projects. Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            
            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            
            {/* Project display */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out transform"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                <div className="flex">
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                          <div className="relative h-64 md:h-full">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r ${isDark ? 'md:from-gray-900/90' : 'md:from-black/60'} md:to-transparent`}></div>
                          </div>
                        </div>
                        
                        <div className="md:w-1/2 p-8 flex flex-col">
                          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {project.description}
                          </p>
                          
                          <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index} 
                                className={`text-xs font-medium px-3 py-1 rounded-full bg-blue-${isDark ? '500/20' : '100'} text-blue-${isDark ? '400' : '600'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-auto flex space-x-4">
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              <GitHub size={20} className="mr-2" />
                              <span>Code</span>
                            </a>
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              <ExternalLink size={20} className="mr-2" />
                              <span>Live Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeProject === index 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/Harsh-kumar04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHub size={18} className="mr-2" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;