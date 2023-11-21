import React from "react"
import "./Button.css"
function Button({ children, type = "button", onClick }) {
  return (
    <button className="myBtn" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
