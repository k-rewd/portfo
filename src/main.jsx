import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <ParallaxProvider scrollAxis="horizontal">
    <StrictMode>
      <App />
    </StrictMode>,
  </ParallaxProvider>
)
