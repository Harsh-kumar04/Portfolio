import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-10
    icon?: string;
  }[];
}

const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 4 },
        { name: "JavaScript", level: 6 },
        { name: "Boot-Strap", level: 8 },
        { name: "HTML5/CSS3", level: 9 },
        { name: "Tailwind CSS", level: 8 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 3 },
        { name: "Python", level: 7 },
        { name: "Java", level: 6 },
        { name: "Django", level: 7 },
        { name: "WordPress", level: 8 },
      
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 8 },
        { name: "Canva", level: 9 },
        { name: "Vercel", level: 6 },
        { name: "Figma", level: 7 },
        { name: "Responsive Design", level: 9 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            These are the technologies and tools I've worked with and feel comfortable using.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-2`}
            >
              <h3 className="text-xl font-bold mb-6 text-center pb-2 border-b border-gray-200 dark:border-gray-700">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level >= 8 ? 'Expert' : skill.level >= 6 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level >= 8 ? 'bg-blue-600 dark:bg-blue-400' :
                          skill.level >= 6 ? 'bg-green-500 dark:bg-green-400' :
                          'bg-amber-500 dark:bg-amber-400'
                        }`}
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Other Skills & Qualities</h3>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Problem Solving", icon: "🧩" },
                { name: "Team Collaboration", icon: "👥" },
                { name: "UI/UX Design", icon: "🎨" },
                { name: "Agile Methodology", icon: "🔄" },
                { name: "Continuous Learning", icon: "📚" },
                { name: "Project Management", icon: "📊" },
                { name: "Responsive Design", icon: "📱" },
                { name: "Performance Optimization", icon: "⚡" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-300 hover:bg-${index % 2 === 0 ? 'blue' : 'purple'}-${isDark ? '500/20' : '50'}`}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;