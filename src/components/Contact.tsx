import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-blue-${isDark ? '500/20' : '100'} flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a href="mailto:harsh.kumar@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      harshkumar9544@gmail.com
                    </a>
                  </div>
                </div>
                
                
                
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-green-${isDark ? '500/20' : '100'} flex items-center justify-center text-green-600 dark:text-green-400 mr-4`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ahemdabad, India
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-10 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Harsh-kumar04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hk412/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

              </div>
            </div>
          </div>
          
          <div>
            <form>
              <div className="bg-gray-900 rounded-lg p-4">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdH455GHYOeDbc1pWHaG-y5VsW3A8aunu7lStDYYp59i-4RXA/viewform?embedded=true"
    width="100%"
    height="700"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    title="Contact Form"
    className="w-full rounded-md"
    style={{ backgroundColor: 'transparent' }}
  >
    Loading…
  </iframe>
</div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;