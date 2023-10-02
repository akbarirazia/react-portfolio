import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar/Navbar"

import "./Where.css"
import Animation from "./components animation/Animation"
import Map from "./Map/Map"
import Button from "./components/Button"
import Spline from "@splinetool/react-spline"
import { TextField } from "@mui/material"
import ContactForm from "./ContactForm/ContactForm"
import HeartBeatEffect from "./components animation/HeartBeatEffect"

function Where() {
  const heaven = useRef(null)
  const back = useRef(null)
  const right = useRef(null)
  const left = useRef(null)
  const beat = useRef(null)
  const name = useRef(null)
  const email = useRef(null)
  const msg = useRef(null)
  useEffect(() => {
    // console.log(heaven)
    Animation(heaven, 1, 0, "play", -200, 100)
    Animation(heaven, 1, 0, "play", 100, 0, 1, 1)
    Animation(back, 3, -50)
    Animation(right, 3, 50)
    Animation(left, 3, -50)
    HeartBeatEffect(beat)
    Animation(name, 1, 100)
    Animation(email, 1.3, -50)
    Animation(msg, 1.2, 0, "restart", 100)
    // Animation()
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
          <div className="mars">
            <p ref={back}>
              End of 2002, when I was dropped on earth and ever since want to go
              back
            </p>
            <p ref={right}>
              My location just in between
              <span className="colorful"> Venus and Mars</span>
            </p>
            <p ref={left}>
              {" "}
              But hey, there is an even easier way to get in touch with me
            </p>
          </div>
          <br />
          <div className="touch">
            <div className="contact">
              <p>
                <span className="colorful">Contact Form</span>
              </p>
              <br />
              <div className="inputs">
                <ContactForm username={name} useremail={email} msg={msg} />
              </div>
            </div>
            <div className="map">
              <p>
                <span className="colorful">Exact Location</span>
              </p>
              <Map />
            </div>
          </div>
          <br />
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Made with{" "}
            <span
              ref={beat}
              style={{ display: "inline-block", color: "white" }}
            >
              🤍
            </span>{" "}
            in 2023
          </p>
          <div className="spacer"></div>
        </div>
      </div>
    </>
  )
}

export default Where
