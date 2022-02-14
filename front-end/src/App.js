import Feed from './pages/Feed'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './styles/Home.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
