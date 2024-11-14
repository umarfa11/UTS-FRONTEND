import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/home/home'
import Tentang from './pages/tentang/tentang'
import Minuman from './pages/minuman/minuman'
import Makanan from './pages/makanan/makanan'
import Footer from './pages/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Myapp() {
  return (
    <Router>
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/makanan" element={<Makanan />} />
        <Route path="/minuman" element={<Minuman />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}