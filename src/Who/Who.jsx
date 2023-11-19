import React, { useEffect, useRef } from "react"
import "./Who.css"
import SingleWho from "./SingleWho/SingleWho"
import { Link } from "react-router-dom"
import { gsap } from "gsap/all"
import Animation from "../pages/components animation/Animation"
import { useTranslation } from "react-i18next"

function Who({ onClick }) {
  const { t } = useTranslation()
  const what = useRef(null)
  const who = useRef(null)
  const where = useRef(null)
  // console.log(what)
  useEffect(() => {
    Animation(what, 1, 0, "restart", -50)
    Animation(who, 1, 0, "restart", 50)
    Animation(where, 1, 0, "restart", -50)
  }, [])

  return (
    <div className="flex container text-wrapper " style={{ direction: "ltr" }}>
      <Link to="/pages/what" className="link">
        <SingleWho
          text={t("HOME_PAGE.WHAT.TITLE")}
          subtext={t("HOME_PAGE.WHAT.SUB_TITLE")}
          onClick={onClick}
          refs={what}
        />
      </Link>
      <Link to="/pages/whome" className="link">
        <SingleWho
          text={t("HOME_PAGE.WHO.TITLE")}
          subtext={t("HOME_PAGE.WHO.SUB_TITLE")}
          onClick={onClick}
          refs={who}
        />
      </Link>
      <Link to="/pages/where" className="link">
        <SingleWho
          text={t("HOME_PAGE.WHERE.TITLE")}
          subtext={t("HOME_PAGE.WHERE.SUB_TITLE")}
          onClick={onClick}
          refs={where}
        />
      </Link>
    </div>
  )
}

export default Who
