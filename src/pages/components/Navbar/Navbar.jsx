import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import AkbariRazia from "./AkbariRazia/AkbariRazia.jsx"
import Toggle from "../Toggle"
import { useTranslation } from "react-i18next"

function Navbar({ option }) {
  const { t } = useTranslation()
  return (
    <div className="navbar container">
      <Toggle option={option} />
      {/* <AkbariRazia /> */}
      {/* <p>
        <Link to="/">akbarirazia()</Link>
      </p> */}
      <ul>
        <li>
          <Link to="/pages/what">{t("NAVBAR.WHAT", ".what()")}</Link>
        </li>
        <li>
          <Link to="/pages/whome">{t("NAVBAR.WHO", ".who()")}</Link>
        </li>
        <li>
          <Link to="/pages/where">{t("NAVBAR.WHERE", ".where()")}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
