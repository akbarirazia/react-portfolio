import Spline from "@splinetool/react-spline"
import { useRef, useEffect } from "react"
import Who from "./Who"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Links from "./Links"
import WhoMe from "./pages/WhoMe"
import What from "./pages/What"
import Where from "./pages/Where"
import Home from "./Home"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pages/whome" element={<WhoMe />} />
          <Route path="/pages/what" element={<What />} />
          <Route exact path="/pages/where" element={<Where />} />
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Links />
      </Router>
    </>
  )
}
