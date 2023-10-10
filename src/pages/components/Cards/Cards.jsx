import React, { useEffect, useRef } from "react"
import "./Cards.css"
import Tags from "./Tags"
import Animation from "../../components animation/Animation"
import { HiOutlineLink } from "react-icons/hi"

function Cards({ title, description, img, tags, link, delay }) {
  const isDark = localStorage.getItem("isDark") === "true"

  const tagStyle = {
    color: "black",
    textShadow: "none",
  }
  const card = useRef(null)
  useEffect(() => {
    Animation(card, 1, 0, "play", 100, 0, delay / 9, 0)
  })
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg gray div"
        ref={card}
      >
        <img className="w-full" src={img} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 card colorful">{title}</div>
          <p className="text-gray-700 text-base div">{description}</p>
          <div>
            <a href={link}>
              <span>View Project </span>
              <span>
                <HiOutlineLink />
              </span>
            </a>
          </div>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <Tags key={index} index={index} style={isDark ? tagStyle : {}}>
              {tag}
            </Tags>
          ))}
          {/* <Tags> Photography </Tags>
          <Tags> Travel </Tags>
          <Tags> Winter </Tags> */}
        </div>
      </div>
    </>
  )
}

export default Cards
