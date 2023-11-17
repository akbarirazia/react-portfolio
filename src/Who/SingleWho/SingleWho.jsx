import React from "react"

function SingleWho({ text, subtext, onClick, refs }) {
  return (
    <p onClick={onClick} ref={refs}>
      {text} <br />
      <sub
        style={{
          fontSize: "1.2rem",
          marginLeft: "1rem",
          color: "black",
          textShadow: "none",
        }}
        // className="colorful"
      >
        {subtext}
      </sub>
    </p>
  )
}

export default SingleWho
