import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import QuoteGenerator from './QuoteGenerator.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      {/* Text content section - left aligned within container */}
      <section style={{ 
        // Section Style
        display: "flex",
        flexDirection: "column",
        marginTop: "4rem",
        marginLeft: "12rem",
        marginRight: "auto", 
        marginBottom: "4rem",
        alignItems: "flex-start",
        maxWidth: "900px",
        padding: "0 2rem",
        }}>
        <h2 style={{ 
          // Heading Style
          fontSize: "4rem", 
          fontWeight: 700,
          marginTop: "6rem",
          marginBottom: "1rem",
          textAlign: "left", 
          lineHeight: "1.4",
          maxWidth: "5",
          }}>
          Riveo is a minimalist quote generator built to spark <span style={{ color: "#6763ac" }}>INSPIRATION.</span>
        </h2>
        <p style={{
          // Description Style
          fontSize: "1.25rem", 
          color: "#aaa",
          marginBottom: "2rem", 
          textAlign: "left",
          color: "#fff",
          }}>
          Fuel your next move with quotes that inspire bold thinking and creative momentum.
        </p>
        <button style={{
          // Button Style
          alignSelf: "flex-start",
          padding: "0.75rem 1.75rem",
          background: "#ffffffff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}>
          Get Started!
        </button>
      </section>        
      <QuoteGenerator/>
    </Layout>
  </StrictMode>
);