import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import image from "/src/assets/razia_back.png"
import "./WhoMe.css"
import { useRef } from "react"
import MyModal from "../components/Modal/Modal"
import { useTranslation } from "react-i18next"
import Skill from "../components/Skills/Skill"
import Animation from "../components animation/Animation"
import HeartBeatEffect from "../components animation/HeartBeatEffect"
import TimeLine from "../components/TimeLine/TimeLine"

function WhoMe() {
  const { t } = useTranslation()
  const para0 = useRef(null)
  const para1 = useRef(null)
  const para2 = useRef(null)
  const para3 = useRef(null)
  const para5 = useRef(null)
  const modal = useRef()
  const firstBlock = useRef(null)
  const secondBlock = useRef(null)
  const thirdBlock = useRef(null)
  const heart = useRef(null)
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  useEffect(() => {
    Animation(para0, 1, 100)
    // animation(para0, 1)
    Animation(para1, 2, -100)
    Animation(para2, 3, 100)
    Animation(para3, 4, -50)
    Animation(para5, 2, 50)
    Animation(firstBlock, 5, 80, "restart")
    Animation(secondBlock, 3, -80, "restart")
    Animation(thirdBlock, 4, -130, "restart")
    HeartBeatEffect(heart)
  })

  function handleClick(string) {
    if (string == "poetry") {
      setContent(modal.current.content)
      setTitle(modal.current.title)
    } else if (string == "humor") {
      setContent(modal.current.content1)
      setTitle(modal.current.title1)
    } else {
      setContent(modal.current.content2)
      setTitle(modal.current.title2)
    }

    modal.current.open()
  }

  return (
    <>
      <Navbar />
      <MyModal ref={modal} content={content} title={title} />
      <br />
      <div className="container section-wrapper">
        <div className="img-wrapper">
          <p className="flip-text">{t("ABOUT_PAGE.WHO_IS_SHE")}</p>

          <img src={image} draggable={false} />
          <p className="flip-text">{t("ABOUT_PAGE.I_WISH_I_KNEW")}</p>
        </div>

        <div className="about">
          <p ref={para0}>
            {t("ABOUT_PAGE.DESCRIPTION.PART_1")}{" "}
            <span className="colorful" style={{ fontWeight: "bold" }}>
              {t("ABOUT_PAGE.DESCRIPTION.PART_1_2")}
            </span>
            {t("ABOUT_PAGE.DESCRIPTION.PART_2")}
          </p>{" "}
          <br />
          <p ref={para1}>
            {t("ABOUT_PAGE.DESCRIPTION.PART_3")}{" "}
            <span className="colorful" style={{ fontWeight: "bold" }}>
              frontend web developer
            </span>{" "}
            {t("ABOUT_PAGE.DESCRIPTION.PART_4")}
          </p>
          <br />
          <p ref={para2}>
            {t("ABOUT_PAGE.LAST.PART_5")}
            <span
              style={{
                borderBottom: "3px solid #682ae9",
              }}
              className="pointer"
              onClick={() => handleClick("poetry")}
            >
              {t("ABOUT_PAGE.LAST.PART_6")}
            </span>{" "}
            <span
              style={{
                borderBottom: "3px solid chartreuse",
              }}
              onClick={() => handleClick("music")}
              className="pointer"
            >
              {t("ABOUT_PAGE.LAST.PART_7")}
            </span>{" "}
            {t("ABOUT_PAGE.LAST.PART_8")}
            <span
              style={{
                borderBottom: "3px solid hotpink",
              }}
              className="pointer"
              onClick={() => handleClick("humor")}
            >
              {t("ABOUT_PAGE.LAST.PART_9")}
            </span>
            {t("ABOUT_PAGE.LAST.PART_10")}
          </p>{" "}
          <br />
          <strong>
            - {t("ABOUT_PAGE.LAST.RAZIA_AKBARI")}{" "}
            <span ref={heart} style={{ display: "inline-block" }}>
              🖤
            </span>
          </strong>
        </div>
      </div>
      <br />
      <br />

      <div className="container" style={{ marginBottom: "2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="colorful">{t("ABOUT_PAGE.EXPERIENCE.TITLE")}</span>
        </h2>
        <small className="small">{t("ABOUT_PAGE.EXPERIENCE.SUB_TITLE")}</small>
      </div>
      <TimeLine />
      <br />
      <br />
      <div className="container">
        <h2 style={{ textAlign: "center", margin: "1rem auto" }}>
          <span className="colorful">{t("ABOUT_PAGE.SKILL.TITLE")}</span>
        </h2>
        <small className="small">{t("ABOUT_PAGE.SKILL.SUB_TITLE")}</small>
      </div>
      <Skill
        para={para3}
        firstBlock={firstBlock}
        secondBlock={secondBlock}
        thirdBlock={thirdBlock}
        para1={para5}
      />
      <br />
    </>
  )
}

export default WhoMe
