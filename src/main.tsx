import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/index.css'
import Homepage from './pages/homepage/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
