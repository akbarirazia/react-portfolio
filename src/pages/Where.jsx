import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar/Navbar"

import "./Where.css"
import Animation from "./components animation/Animation"
import Map from "./Map/Map"
import Button from "./components/Button"
import Spline from "@splinetool/react-spline"

function Where() {
  const heaven = useRef(null)
  const back = useRef(null)
  const right = useRef(null)
  const left = useRef(null)
  useEffect(() => {
    // console.log(heaven)
    Animation(heaven, 1, 0, "play", -200, 100)
    Animation(heaven, 1, 0, "play", 100, 0, 1, 1)
    Animation(back, 3, -50)
    Animation(right, 3, 50)
    Animation(left, 3, -50)
  })
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="container">
          <div className="fell">
            <br />
            <h2 ref={heaven}>
              I FELL FROM <span className="colorful">HEAVEN</span>
            </h2>
            <Spline scene="https://prod.spline.design/VPOrxeUHegxoZgU4/scene.splinecode" />
          </div>
          <div className="fell">
            <p ref={back}>
              End of 2002 when I was dropped on earth and ever since want to go
              back
            </p>
            <p ref={right}>
              My location just in between
              <span className="colorful"> venus and mars</span>
            </p>
            <p ref={left}>
              {" "}
              But hey, there is an even easier way to get in touch with me
            </p>
          </div>

          <div>
            <p>Exact Location</p>
            <Map />
          </div>

          <div className="spacer"></div>
        </div>
      </div>
    </>
  )
}

export default Where
