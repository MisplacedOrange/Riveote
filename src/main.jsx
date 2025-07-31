import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <h2>Welcome to Riveo</h2>
      <p>This is your main content area.</p>
    </Layout>
  </StrictMode>
);