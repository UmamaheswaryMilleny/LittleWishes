import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
        <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#0B3D2E",
          color: "#FFFFFF",
        },
      }}
    />
  </StrictMode>,
)
