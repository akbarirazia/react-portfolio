import { useRef, useEffect, useState } from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Links from "./pages/components/Links/Links"
import WhoMe from "./pages/WhoMe/WhoMe"
import What from "./pages/What/What"
import Where from "./pages/Where/Where"
import Home from "./pages/MainGate/Home"
import { CircularProgress } from "@mui/material"

export default function App() {
  const [loading, setLoading] = useState(true)

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
