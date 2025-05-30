import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './Pages/sign-in'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
