import Spline from "@splinetool/react-spline"
import { useRef, useEffect, useState } from "react"
import Who from "./Who"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Links from "./Links"
import WhoMe from "./pages/WhoMe"
import What from "./pages/What"
import Where from "./pages/Where"
import Home from "./Home"
import { CircularProgress } from "@mui/material"

export default function App() {
  const [loading, setLoading] = useState(true)
  // const location = useLocation()
  window.onload = () => {
    setLoading(false)
  }

  let isDark = localStorage.getItem("isDark")
  useEffect(() => {
    const body = document.body
    if (isDark === "true") {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode")
    }
    // localStorage.setItem("isDark", isDark)
  }, [])

  return (
    <>
      {loading ? (
        <div className="center">
          <CircularProgress />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/pages/whome" element={<WhoMe />} />
            <Route path="/pages/what" element={<What />} />
            <Route exact path="/pages/where" element={<Where />} />
            <Route exact path="/" element={<Home />} />
          </Routes>

          <Links />
        </Router>
      )}
      {/* {loading && (
        
      )} */}
    </>
  )
}
