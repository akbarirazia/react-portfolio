import React from "react"

function SingleWho({ text, subtext, onClick, refs }) {
  return (
    <p onClick={onClick} ref={refs}>
      {text} <br />
      <sub
        style={{
          fontSize: "1.2rem",
          marginRight: "1rem",
          color: "black",
          textShadow: "0px 0px 0px black",
        }}
      >
        {subtext}
      </sub>
    </p>
  )
}

export default SingleWho
