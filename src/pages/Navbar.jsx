import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import AkbariRazia from "./AkbariRazia"

function Navbar() {
  return (
    <div className="navbar container">
      <AkbariRazia />
      {/* <p>
        <Link to="/">akbarirazia()</Link>
      </p> */}
      <ul>
        <li>
          <Link to="/pages/what">.what()</Link>
        </li>
        <li>
          <Link to="/pages/whome">.who()</Link>
        </li>
        <li>
          <Link to="/pages/where">.where()</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
