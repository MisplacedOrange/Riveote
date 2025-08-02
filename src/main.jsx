import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <section style={{ 
        // Section Style
        display: "flex",
        flexDirection: "column",
        marginTop: "4rem",
        alignItems: "flex-start",
        maxWidth: "600px",
        margin: "0 auto",
        }}>
    <h2 style={{ 
      // Heading Style
      fontSize: "2.5rem", 
      fontWeight: 700,
      marginTop: "6rem",
      marginBottom: "1rem",
      textAlign: "left", 
      maxWidth: "800px",
      lineHeight: "1.4",
      }}>
      Riveo is a minimalist quote generator built to spark inspiration
    </h2>
    <p style={{
      // Description Style
      fontSize: "1.25rem", 
      color: "#aaa",
      marginBottom: "2rem", 
      textAlign: "left",
      }}>
      Fuel your next move with quotes that inspire bold thinking and creative momentum.
    </p>
    <button style={{
      // Button Style
      alignContent: "left",
      padding: "0.5rem 2.5rem",
      background: "#cbcbcbff",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}>
      Get Started!
    </button>
  </section>
    </Layout>
  </StrictMode>
);