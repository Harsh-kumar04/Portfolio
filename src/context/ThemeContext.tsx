import { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (!savedTheme) {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};