import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiMonitor } from 'react-icons/fi';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  const themes = [
    { id: 'light', label: 'Light', icon: <FiSun /> },
    { id: 'dark', label: 'Dark', icon: <FiMoon /> },
    { id: 'system', label: 'System', icon: <FiMonitor /> },
  ];

  useEffect(() => {
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    // Handle system theme preference
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="theme-switcher">
      {themes.map((t) => (
        <motion.button
          key={t.id}
          className={`theme-button ${theme === t.id ? 'active' : ''}`}
          onClick={() => handleThemeChange(t.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={`Switch to ${t.label} theme`}
          aria-label={`Switch to ${t.label} theme`}
        >
          {t.icon}
          <span className="theme-label">{t.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;