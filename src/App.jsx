import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'
import About from './components/About'
import Signup from './components/Signup'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App