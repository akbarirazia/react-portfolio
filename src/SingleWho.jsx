import React from "react"

function SingleWho({ text, subtext, onClick, refs }) {
  return (
    <p onClick={onClick} ref={refs}>
      {text} <br />
      <sub>{subtext}</sub>
    </p>
  )
}

export default SingleWho
