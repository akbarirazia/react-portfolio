import React, { useState } from "react"
import Navbar from "./Navbar"
import Spline from "@splinetool/react-spline"
import "./Where.css"
import { CircularProgress } from "@mui/material"

function Where() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          {/* <Spline
            scene="https://prod.spline.design/VPOrxeUHegxoZgU4/scene.splinecode"
            className="earth"
          /> */}
        </div>
      </div>
    </>
  )
}

export default Where
