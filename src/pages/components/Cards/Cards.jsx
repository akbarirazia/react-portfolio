import React, { useEffect, useRef } from "react"
import "./Cards.css"
import Tags from "./Tags"
import Animation from "../../components animation/Animation"
import { HiOutlineLink } from "react-icons/hi"
import { useTranslation } from "react-i18next"

function Cards({ title, description, img, tags, link, delay, dateOfBirth }) {
  const isDark = localStorage.getItem("isDark") === "true"
  const { t } = useTranslation()
  // const tagStyle = {
  //   color: "black",
  //   textShadow: "none",
  // }
  const card = useRef(null)
  useEffect(() => {
    Animation(card, 1, 0, "play", 100, 0, delay / 9, 0)
  })
  return (
    <>
      <div className="cont max-w-sm" ref={card}>
        {/* <div className="grad"> */}
        <div className=" rounded overflow-hidden shadow-lg gray div">
          <img className="w-full" src={img} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 card colorful title">
              {t(title, title)}
            </div>
            <p className="text-gray-700 text-base ">
              {t(description, description)}
            </p>
            <div>
              <a href={link} className="title">
                <span> {t("PROJECT_PAGE.VIEW", "View Project")} </span>
                <span>
                  <HiOutlineLink />
                </span>
              </a>
              <small className="birth">{dateOfBirth}</small>
              {/* <RadioGroupRating /> */}
            </div>
          </div>
          <div className="px-6 py-2">
            {tags.map((tag, index) => (
              <Tags key={index} index={index}>
                {tag}
              </Tags>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Cards
