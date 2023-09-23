import React, { useEffect, useRef } from "react"
import "./Who.css"
import SingleWho from "./SingleWho"
import { Link } from "react-router-dom"
import { gsap } from "gsap/all"
import Animation from "./pages/components animation/Animation"

function Who({ onClick }) {
  const what = useRef(null)
  const who = useRef(null)
  const where = useRef(null)
  // console.log(what)
  useEffect(() => {
    Animation(what, 1, 0, "play", -50)
    Animation(who, 1, 0, "play", 50)
    Animation(where, 1, 0, "play", -50)
  }, [])

  return (
    <div className="flex justify-center text-wrapper ">
      <Link to="/pages/what" className="link">
        <SingleWho
          text="What?"
          subtext="the hell"
          onClick={onClick}
          refs={what}
        />
      </Link>
      <Link to="/pages/whome" className="link">
        <SingleWho
          text="Who?"
          subtext="the hell"
          onClick={onClick}
          refs={who}
        />
      </Link>
      <Link to="/pages/where" className="link">
        <SingleWho
          text="Where?"
          subtext="the hell"
          onClick={onClick}
          refs={where}
        />
      </Link>
    </div>
  )
}

export default Who
