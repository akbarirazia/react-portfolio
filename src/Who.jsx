import React from "react"
import "./Who.css"
import SingleWho from "./SingleWho"
import { Link } from "react-router-dom"

function Who({ onClick }) {
  return (
    <div className="flex justify-center gap-4x text-wrapper ">
      <Link to="/pages/what" className="link">
        <SingleWho text="What?" subtext="the hell" onClick={onClick} />
      </Link>
      <Link to="/pages/whome" className="link">
        <SingleWho text="Who?" subtext="the hell" onClick={onClick} />
      </Link>
      <Link path="/pages/where" className="link">
        <SingleWho text="Where?" subtext="the hell" onClick={onClick} />
      </Link>
    </div>
  )
}

export default Who
