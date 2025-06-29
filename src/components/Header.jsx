import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import '../styles/Header.css';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <div className="header-inner">
        <h1 className="header-title">
          
          <div className="hover-underline"></div>
        </h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Notifications">Notifications</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/Profile">Profile</Link>

        </nav>
      </div>
    </motion.header>
  );
}
