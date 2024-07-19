import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Header } from "./components/Global/Header";
import { ParallaxProvider } from "react-scroll-parallax"

export default function App() {
  return (
    <Router>
      <ParallaxProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </ParallaxProvider>
    </Router>
  )
}