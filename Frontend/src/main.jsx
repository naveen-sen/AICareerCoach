import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { dark } from '@clerk/themes'
import {ClerkProvider} from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <BrowserRouter>
      <ThemeProvider>
        <ClerkProvider
        appearance={{
        baseTheme: dark,
        }}
        publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <App />
        </ClerkProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  
  
  
)
