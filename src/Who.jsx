import React, { useEffect, useRef } from "react"
import "./Who.css"
import SingleWho from "./SingleWho"
import { Link } from "react-router-dom"
import { gsap } from "gsap/all"

function Who({ onClick }) {
  // const what = useRef(null)
  // const who = useRef(null)
  // const where = useRef(null)
  // console.log(what)
  // useEffect(() => {
  //   gsap.from(what, { y: 100, duration: 3, ease: "power2.out" })
  // }, [])

  return (
    <div className="flex justify-center text-wrapper ">
      <Link to="/pages/what" className="link">
        <SingleWho text="What?" subtext="the hell" onClick={onClick} />
      </Link>
      <Link to="/pages/whome" className="link">
        <SingleWho text="Who?" subtext="the hell" onClick={onClick} />
      </Link>
      <Link to="/pages/where" className="link">
        <SingleWho text="Where?" subtext="the hell" onClick={onClick} />
      </Link>
    </div>
  )
}

export default Who
