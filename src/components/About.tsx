import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Code, Layout, Server, Smartphone } from 'lucide-react';

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm a passionate web developer with experience in creating modern, 
            responsive web applications. My journey in tech started with curiosity about 
            how websites work, which led me to dive deep into web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">What I Do</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-blue-${isDark ? '500/20' : '100'} flex items-center justify-center text-blue-600 dark:text-blue-400`}>
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I build responsive and intuitive user interfaces using modern frameworks and libraries like React, 
                    ensuring excellent user experiences across all devices.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-purple-${isDark ? '500/20' : '100'} flex items-center justify-center text-purple-600 dark:text-purple-400`}>
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Project Building & Problem Solving</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I create real-life solutions through web apps — like a job tracker and a student budget planner — using the skills I’m continuously developing.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-green-${isDark ? '500/20' : '100'} flex items-center justify-center text-green-600 dark:text-green-400`}>
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Learning Full-Stack Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently learning React, Node.js, Express, and MongoDB to expand into full-stack web development (MERN Stack).
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-amber-${isDark ? '500/20' : '100'} flex items-center justify-center text-amber-600 dark:text-amber-400`}>
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Team Collaboration & Volunteering</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I’ve led the website team at Noble Citizen Foundation (NGO), working with cross-functional teams to enhance the organization’s online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  My journey in web development began with a passion for creating digital solutions. I've worked on various projects, from simple websites to complex web applications, constantly expanding my skills and knowledge.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                I have completed my Master’s in Computer Applications from Lakshmi Narain College of Technology and my Bachelor’s in Computer Applications from Ganpat University.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                 I enjoy the challenges that come with web development and am always eager to learn new technologies and frameworks. My goal is to create meaningful and impactful web experiences that solve real problems.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="btn-primary"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;