import React from "react";

const Layout = ({ children }) => (
  <div className="layout">
    <header style={{
      // Header Style
      background: "#202c44ff", 
      padding: "1.5rem 0.5rem", 
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      position: "fixed", 
      top: 0,
      left: 0,
      width: "100%"
      }}>
      <nav style={{
        // Navigation Style
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <h1 style={{ 
          // Logo Style
          fontSize: "2rem", 
          fontWeight: 700, 
          margin: 0 }}>
          Riveo</h1>
        <ul style={{ 
          display: "flex", 
          gap: "2rem", 
          listStyle: "none", 
          margin: 0,
          }}>
        <li><a href="#" >Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
      </nav>
    </header>
    <main style={{
      // Main Content Style
      padding: "4rem 1.5rem",
      }}>
      {children}
      
    </main>
    <footer>
      <p>© 2025 Riveo. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;