import Spline from "@splinetool/react-spline"
import { useRef, useEffect } from "react"
import Who from "./Who"
import Navbar from "./Navbar"

export default function App() {
  const skull = useRef()

  function onLoad(spline) {
    const obj = spline.findObjectById("e12b4707-7b84-4470-94c3-71fd766a03b6")

    skull.current = obj
  }

  function moveObj() {
    // console.log(skull.current)
    setTimeout(() => {
      skull.current.rotation.x += -31
    }, 100)

    skull.current.rotation.x += 31
  }

  return (
    <>
      <div className="wrapper">
        <Spline
          scene="https://prod.spline.design/479RT2NzHx8EkjTt/scene.splinecode"
          onLoad={onLoad}
          className="spline-iframe"
        />
        {/* <button onClick={moveObj}>click for the object to node</button> */}
      </div>
      <Who onClick={() => moveObj()} />
    </>
  )
}
