import React from "react"
import "./Cards.css"
import Tags from "./Tags"

function Cards({ title, description, img, tags, link }) {
  const isDark = localStorage.getItem("isDark") === "true"

  const styleObj = {
    backgroundColor: "black",
    color: "white",
  }
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg gray"
        style={isDark ? styleObj : {}}
      >
        <img className="w-full" src={img} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 card colorful">{title}</div>
          <p className="text-gray-700 text-base" style={isDark ? styleObj : {}}>
            {description}
          </p>
          <div>
            <a href={link}>View Project</a>
          </div>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <Tags key={index}>{tag}</Tags>
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
