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
        margin: "4rem auto",
        marginBottom: "4rem",
        alignItems: "center",
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
          textAlign: "center", 
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
          textAlign: "center",
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
          alignSelf: "center",
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
      
      <section style={{
        // Features List Style
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "4rem auto",
        padding: "0 2rem",
        }}>
          
          <div style={{
            background: "#3a385f",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            flex: "1",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#fff",
            }}>Simple Interface</h3>
            <p style={{
              color: "#fff",
            }}>A clean, distraction-free design to focus on inspiration.</p>
          </div>
          
          <div style={{
            background: "#3a385f",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            flex: "1",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#fff",
            }}>Copy & Paste</h3>
            <p style={{
              color: "#fff",
            }}>Instantly copy any quote to share or save for later</p>
          </div>
          
          <div style={{
            background: "#3a385f",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            flex: "1",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#fff",
            }}>Curated Quotes</h3>
            <p style={{
              color: "#fff",
            }}>Hand-selected quotes that spark creativity and drive</p>
          </div>
        </section>

      <QuoteGenerator id="quotes"/>

      {/* Contact Section */}
      <section id="contact" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "900px",
        margin: "4rem auto",
        padding: "4rem 2rem",
        background: "#2a2946",
        borderRadius: "12px",
        }}>
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "2rem",
          textAlign: "center",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}>
          Contact Us
        </h2>
        <p style={{
          fontSize: "1.2rem",
          color: "#aaa",
          marginBottom: "3rem",
          textAlign: "center",
          maxWidth: "600px",
        }}>
          We'd love to hear from you! Get in touch with the Riveo team.
        </p>
        
        <div style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}>
          {/* Partner 1 */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            background: "#343c46",
            borderRadius: "12px",
            minWidth: "280px",
            flex: "1",
            maxWidth: "350px",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "1rem",
            }}>
              Roy Lu
            </h3>
            <p style={{
              color: "#aaa",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}>
              Founder, Designer & Developer
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}>
              <a href="mailto:roylu0404@gmail.com" style={{
                color: "#6763ac",
                textDecoration: "none",
                fontSize: "1rem",
              }}>
                roylu0404@gmail.com
              </a>
              <a href="https://github.com/misplacedorange" style={{
                color: "#6763ac",
                textDecoration: "none",
                fontSize: "1rem",
              }}>
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Partner 2 */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            background: "#343c46",
            borderRadius: "12px",
            minWidth: "280px",
            flex: "1",
            maxWidth: "350px",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "1rem",
            }}>
              Dinesh Sinnathamby
            </h3>
            <p style={{
              color: "#aaa",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}>
              Designer & Developer
            </p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}>
              <a href="mailto:dineshsinnath@gmail.com" style={{
                color: "#6763ac",
                textDecoration: "none",
                fontSize: "1rem",
              }}>
                dineshsinnath@gmail.com
              </a>
              <a href="https://github.com/crackle2k" style={{
                color: "#6763ac",
                textDecoration: "none",
                fontSize: "1rem",
              }}>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </StrictMode>
);