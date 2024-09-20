import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './scrollTotTop.jsx'
import App from './App.jsx'
import Header from './components/FixedComponents/Header/index.jsx'
import Footer from './components/FixedComponents/Footer/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Header />
      <App />
      <Footer />
    </Router>
  </StrictMode>,
)
