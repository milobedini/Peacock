import Feed from './pages/Feed'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './styles/Home.module.scss'
import { useState } from 'react'
import Register from './pages/Register'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
