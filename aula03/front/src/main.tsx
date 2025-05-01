import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Ex01 from './ex01.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ex01 />
  </StrictMode>,

)
