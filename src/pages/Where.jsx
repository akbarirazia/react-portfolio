import React, { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"

import "./Where.css"
import Animation from "./components animation/Animation"

function Where() {
  const heaven = useRef(null)
  const back = useRef(null)
  useEffect(() => {
    console.log(heaven)
    Animation(heaven, 1, 0, "play", -200)
    Animation(back, 2, -50)
  })
  return (
    <>
      <div className="background">
        <Navbar />

        <div className="container wrapper">
          <h2 ref={heaven}>
            I FELL FROM <span className="colorful">HEAVEN</span>
          </h2>
          <p ref={back}>
            End of 2002 when I was dropped on earth and ever since want to go
            back
          </p>
          <p>
            My location, just in between{" "}
            <span className="colorful">venus and mars</span>
          </p>
          <p>But hey, there is an easy way to get in touch</p>
          <br /> <br />
          <p className="colorful">Say Hello </p>
        </div>
      </div>
    </>
  )
}

export default Where
