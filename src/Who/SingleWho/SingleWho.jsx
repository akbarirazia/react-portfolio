import React from "react"

function SingleWho({ text, subtext, onClick, refs }) {
  return (
    <p onClick={onClick} ref={refs} className="who">
      {text} <br />
      <sub
        style={{
          fontSize: "1.2rem",
          marginLeft: "1rem",
          color: "black",
          textShadow: "none",
        }}
      >
        {subtext}
      </sub>
    </p>
  )
}

export default SingleWho
