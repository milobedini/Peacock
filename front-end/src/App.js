import Feed from './pages/Feed'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './styles/Home.module.scss'
import { useEffect, useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { getToken } from './helpers/auth'
import Profile from './pages/Profile'
import NewPost from './pages/NewPost'
import 'react-toastify/dist/ReactToastify.css'
import EditPost from './pages/EditPost'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Feed
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
