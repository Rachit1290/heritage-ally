import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Navbar from './Components.jsx/Navbar.jsx'
import Footer from './Components.jsx/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <Footer />
  </StrictMode>,
)
