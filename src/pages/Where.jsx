import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar/Navbar"

import "./Where.css"
import Animation from "./components animation/Animation"
import Map from "./Map/Map"

function Where() {
  const heaven = useRef(null)
  const back = useRef(null)
  useEffect(() => {
    // console.log(heaven)
    Animation(heaven, 1, 0, "play", -200, 100)
    Animation(heaven, 1, 0, "play", 100, 0, 1, 1)
    Animation(back, 2, -50)
  })
  return (
    <>
      <Navbar />
      <div className="background"> </div>
      <div className=" wrapper">
        <div className="heaven">
          <div className="container">
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
          </div>
        </div>
        <div className="container">
          <p>Find me in the map?</p>
          <Map />
          <p>But hey, there is an even easier way to get in touch</p>
          <p className="colorful"> Here is the form, Say Hello </p>
        </div>
      </div>
    </>
  )
}

export default Where
