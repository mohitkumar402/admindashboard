import { createContext, useState } from 'react';

// Step 1: Create Context
export const SidebarContext = createContext();

// Step 2: Provide Context globally
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default sidebar is open

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
