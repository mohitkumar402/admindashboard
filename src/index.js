import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './Context/ThemeContext';  // ✅ FIXED HERE

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>   {/* ✅ Wrapping App with ContextProvider */}
    <App />
  </ContextProvider>
);
