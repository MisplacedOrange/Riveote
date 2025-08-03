import React from "react";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <header className="header">
      <nav className="nav">
        <h1 className="logo"> 
          <div className="logo-container">
            <img src="/src/assets/Riveo.png" className="logo-image" alt="Riveo logo" />
            Riveo
          </div>
        </h1>
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Features</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main className="main">
      {children}
    </main>
    <footer className="footer">
      <p>© 2025 Riveo. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;