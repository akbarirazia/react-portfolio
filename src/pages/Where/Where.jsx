import React, { useEffect, useRef } from "react"
import Navbar from "../components/Navbar/Navbar"
import "./Where.css"
import Animation from "../components animation/Animation"
import Map from "../Map/Map"
import Spline from "@splinetool/react-spline"
import ContactForm from "../ContactForm/ContactForm"
import HeartBeatEffect from "../components animation/HeartBeatEffect"

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
    Animation(heaven, 1, 0, "play", -200, 100)
    Animation(heaven, 2, 0, "play", 100, 0, 1, 1)
    Animation(back, 3, -150)
    Animation(right, 3, 150)
    Animation(left, 3, -50)
    HeartBeatEffect(beat)
    Animation(name, 1, 50)
    Animation(email, 1.2, -50)
    Animation(msg, 1.3, 0, "restart", 100)
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
            <small className="small" ref={left}>
              End of 2002, when I was dropped on earth and ever since want to go
              back. My friend, I'm stuck in between
              <span className="colorful"> Venus and Mars</span>{" "}
              <span style={{ fontSize: "1.1rem" }}>😭</span>. But hey, there is
              an even easier way to get in touch with me
            </small>
            {/* <small ref={back}>
              End of 2002, when I was dropped on earth and ever since want to go
              back
            </small>
            <small ref={right}>
              My friend, I'm stuck in between
              <span className="colorful"> Venus and Mars</span>{" "}
              <span style={{ fontSize: "1.1rem" }}>😭</span>
            </small>
            <small ref={left}>
              {" "}
              But hey, there is an even easier way to get in touch with me
            </small> */}
          </div>
          <br />
          <div className="touch">
            <div className="contact">
              <p ref={back}>
                <span className="colorful">Contact Form</span>
              </p>
              <br />
              <div className="inputs">
                <ContactForm username={name} useremail={email} msg={msg} />
              </div>
            </div>
            <div className="map">
              <p ref={right}>
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