import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router'
import './index.css'
import { KioskProvider } from './context/KioskProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KioskProvider>
      <RouterProvider router={Router}>
      </RouterProvider>
    </KioskProvider>
  </StrictMode>,
)
