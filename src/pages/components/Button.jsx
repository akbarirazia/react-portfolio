import React from "react"

function Button({ children, type = "button", onClick }) {
  return (
    <button
      style={{
        padding: ".8rem",
        borderRadius: "5px",
        border: "none",

        background: "linear-gradient(45deg, hotpink , chartreuse , #682ae9 )",
        fontFamily: "Montserrat",
        cursor: "pointer",
        color: "white",
        textShadow: "0px 0px 2px #682ae9 ",
        boxShadow: "0px 0px 2px #682ae9 ",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
