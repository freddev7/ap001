import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/logos' />
        <Route path='/medias' />
        <Route path='/websites' />
      </Routes>
    </Router>
  )
}

export default App
