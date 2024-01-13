import Spline from "@splinetool/react-spline"
import { useRef, useEffect } from "react"
import Who from "../Who/Who"
import "./Home.css"
import * as React from "react"

import Toggle from "../components/Toggle"
import ColorToggleButton from "../components/LanguageToggle/LanToggle"
export default function Home() {
  //the skulll movements
  const skull = useRef()

  function onLoad(spline) {
    const obj = spline.findObjectById("e12b4707-7b84-4470-94c3-71fd766a03b6")

    skull.current = obj
  }

  function moveObj() {
    skull.current.scale.y = 50.3
    skull.current.scale.z = 50.3
    skull.current.scale.x = 50.3

    skull.current.rotation.z = 0
    skull.current.rotation.x = 0
    skull.current.rotation.y = 0

    setTimeout(() => {
      skull.current.rotation.x += -31
      skull.current.scale.y += 10
      skull.current.scale.z += 10
      skull.current.scale.x += 10
    }, 200)

    skull.current.rotation.x += 31
    skull.current.scale.y -= 10
    skull.current.scale.z -= 10
    skull.current.scale.x -= 10
  }

  return (
    <>
      <div className="toggle">
        <div className="container bar">
          <ColorToggleButton />
          <Toggle />
        </div>
      </div>
      <div className="wrapper">
        <Spline
          scene="https://prod.spline.design/479RT2NzHx8EkjTt/scene.splinecode"
          onLoad={onLoad}
          className="spline-iframe"
        />
      </div>
      <Who onClick={() => moveObj()} />
    </>
  )
}
