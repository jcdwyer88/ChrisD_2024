import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { App } from './App.tsx'
import Theme from "./assets/Theme.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Theme>
          <App />
      </Theme>
  </StrictMode>,
)
