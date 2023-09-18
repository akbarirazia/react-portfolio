import React from "react"
import "./Who.css"
import SingleWho from "./SingleWho"

function Who({ onClick }) {
  return (
    <div className="flex justify-center gap-4x text-wrapper flex-wrap">
      <SingleWho text="What?" subtext="have I done" onClick={onClick} />
      <SingleWho text="Who?" subtext="am I" onClick={onClick} />
      <SingleWho text="Where?" subtext="to contact me" onClick={onClick} />
    </div>
  )
}

export default Who
