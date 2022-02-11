import PostList from './pages/PostList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <h1>Peacock</h1>
          <Routes>
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
