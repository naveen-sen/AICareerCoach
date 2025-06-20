import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { ThemeProvider } from './components/theme-provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
