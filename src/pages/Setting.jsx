import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Setting.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1> Error 404</h1>
      
      <p><h1>The page you are looking for will be developed later and has ni refrence just for demo to show and check.</h1></p>
      <Link to="/" className="home-btn">okkk</Link>
    </div>
  );
};

export default NotFound;
