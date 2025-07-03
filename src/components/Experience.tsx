import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const { isDark } = useContext(ThemeContext);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([1]));

  const toggleItem = (id: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: " Wyreflow Technologies ",
      location: "Bhopal, India",
      period: "March 2025 - May 2025",
      description: [
        " Internship role in the Technical Department, focusing on front-end web development. ",
        "Entrusted with responsibilities involving access to sensitive company and client data, requiring adherence to strict confidentiality and ethical standards.",
        "Eager to contribute to live projects, collaborate with technical teams, and apply front-end skills in a real-world professional environment.",
        
      ],
      skills: ["React", "Figma", "HTML/CSS", "Java script", ]
    },
    {

      id: 2,
      title: "Master's in Computer application",
      company: "Lakshmi Narain College of Technology",
      location: "Bhopal , Madhya Pradesh",
      period: "Nov 2023 – May 2025 | CGPA: 7.87",
      description: [
        "Gained in-depth knowledge of software engineering, data structures, and web development.",

        
        "Built real-world projects focusing on user experience and functionality.",

        "Improved collaboration and problem-solving skills through team-based assignments and internships."
      ],
      skills: []
    },
    
    {
      id: 3,
      title: "Web TeamLead (NGO)",
      company: "Noble Citizen Foundation",
      location: "Delhi, India",
      period: "May 2025 - Present",
      description: [
        "As a Website Team Volunteer at the Noble Citizen Foundation, I support the organization’s digital presence through website management, content updates, and online outreach initiatives. Working closely with the Foundation’s Volunteer Coordinator,",

        
        "Promoted to lead the Web Team after serving as a Volunteer Web Team Member.Responsible for coordinating web development tasks, supporting team members, and contributing to the digital presence of the foundation.",

        "Grateful for the trust and excited to continue making a positive impact through leadership and collaboration."
      ],
      skills: ["Wordpress", "Elementor", "Website Optimization", "SEO Basics" ]
    },
    {
      id: 2,
      title: "Bachelor's in Computer application",
      company: "Ganpat University ",
      location: "Ganpat University, Mehsana",
      period: "July 2020 – May 2023 | CGPA: 8.05",
      description: [
        "Developed a strong foundation in programming, databases, and computer fundamentals.",

        
        "Discovered a passion for web development and started building small projects.",

        "Participated in academic activities that enhanced technical and communication skills."
      ],
      skills: []
    },
    
  
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Acadamics / Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Experience items */}
            {experiences.map((item, index) => {
              const isExpanded = expandedItems.has(item.id);
              
              return (
                <div key={item.id} className="mb-12 relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 ${index === 0 ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'} z-10`}></div>
                  
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:pl-0' : 'md:ml-auto md:pl-16 md:pr-0'} md:w-1/2`}>
                    <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 ${isExpanded ? '' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} transition-colors duration-300`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${index === 0 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'} mb-3`}>
                            <Calendar size={14} className="inline mr-1" />
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                            <Briefcase size={16} className="mr-1" />
                            <span>{item.company}, {item.location}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleItem(item.id)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        >
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      
                      {isExpanded && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                          <ul className="space-y-2 pl-5 list-disc text-gray-600 dark:text-gray-400">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills & Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <span 
                                  key={i} 
                                  className={`text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-300`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;