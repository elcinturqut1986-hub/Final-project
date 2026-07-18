import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ArticleProvider } from './context/ArticleContext'
import Home from './pages/Home'
import Article from './pages/Article'
import Saved from './pages/Saved'
import Login from './pages/Login'

function App() {
  return (
    <ArticleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ArticleProvider>
  )
}

export default App
