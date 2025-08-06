import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import QuoteGenerator from './QuoteGenerator.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
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
        overflow: "hidden",
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
          fontFamily: "Arial, sans-serif",
          }}>
          Riveo is a minimalist quote generator built to spark <span className="italic" style={{ color: "#6763ac" }}>INSPIRATION.</span>

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
        <button 
          onClick={()=>{
            const quotesSection = document.getElementById('quotes');
            if (quotesSection) {
              quotesSection.scrollIntoView({ behavior: 'smooth', block: "center" })
            }
          }}
          style={{
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
        <section id="features" style={{
          // Features Section Style  
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
          <div style={{
            // Features Heading Style
            fontFamily: "Arial, sans-serif",
          }}>

          </div>
        </section>
        <section style={{
          // Features List Style
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "4rem auto",
            padding: "0 2rem",
            }}>
              
              <feature1 style={{
                background: "#3a385f",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                flex: "1",
              }}>
                <h3 style={{
                  // Feature 1 Title Style
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#fff",
                }}>Simple Interface</h3>
                <p style={{
                  // Feature 1 Description Style
                  color: "#fff",
                }}>A clean, distraction-free design to focus on inspiration.</p>
              </feature1>
              
              <feature2 style={{
                background: "#3a385f",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                flex: "1",
              }}>
                <h3 style={{
                  // Feature 2 Title Style
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#fff",
                }}>Copy & Paste</h3>
                <p style={{
                  // Feature 2 Description Style
                  color: "#fff",
                }}>Instantly copy any quote to share or save for later</p>
              </feature2>
              
              <feature3 style={{
                background: "#3a385f",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                flex: "1",
              }}>
                <h3 style={{
                  // Feature 3 Title Style
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#fff",
                }}>Simple Interface</h3>
                <p style={{
                  // Feature 3 Description Style
                  color: "#fff",
                }}>Hand-selected quotes that spark creativity and drive</p>
              </feature3>
            </section>
      <QuoteGenerator id ="quotes"/>
    </Layout>
  </StrictMode>
);