import React from "react";

const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <nav>
        <h1>Riveo</h1>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <p>© 2025 Riveo. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;