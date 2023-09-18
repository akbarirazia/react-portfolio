import React from "react"

function SingleWho({ text, subtext, onClick }) {
  return (
    <p onClick={onClick}>
      {text} <br />
      <sub>{subtext}</sub>
    </p>
  )
}

export default SingleWho
