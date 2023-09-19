import React from "react"
import "./Who.css"
import SingleWho from "./SingleWho"

function Who({ onClick }) {
  return (
    <div className="flex justify-center gap-4x text-wrapper flex-wrap">
      <SingleWho text="What?" subtext="the hell" onClick={onClick} />
      <SingleWho text="Who?" subtext="the hell" onClick={onClick} />
      <SingleWho text="Where?" subtext="the hell" onClick={onClick} />
    </div>
  )
}

export default Who
