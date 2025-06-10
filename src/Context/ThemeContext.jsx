import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context object
const StateContext = createContext();

// Provider component
export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#03C9D7'); // Default theme color
  const [currentMode, setCurrentMode] = useState('Light');      // Light/Dark mode
  const [activeMenu, setActiveMenu] = useState(true);           // Sidebar visibility
  const [themeSettings, setThemeSettings] = useState(false);    // Show/hide theme settings modal
  const [screenSize, setScreenSize] = useState(undefined);      // For responsive layout

  useEffect(() => {
    const savedColor = localStorage.getItem('colorMode');
    const savedMode = localStorage.getItem('themeMode');
    if (savedColor) setCurrentColor(savedColor);
    if (savedMode) setCurrentMode(savedMode);
  }, []);

  const setMode = (e) => {
    const mode = e.target.value;
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        themeSettings,
        setScreenSize,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for consuming the context
export const useStateContext = () => useContext(StateContext);
