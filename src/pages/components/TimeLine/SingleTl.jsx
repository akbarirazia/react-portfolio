import { useEffect, useRef } from "react"
import Animation from "../../components animation/Animation"

function SingleTl({ cls, title, year, description, index }) {
  const isDark = localStorage.getItem("isDark") === "true"

  const styleObj = {
    backgroundColor: "black",
  }
  const box9 = useRef(null)
  useEffect(() => {
    Animation(box9, 0.5, 0, "play", 150, 0, index / 7, 0)
  }, [])
  return (
    <div className={`tl-container ${cls}`}>
      <div className="tl-content div" ref={box9}>
        <h3 className="colorful">{title}</h3>
        <h6>
          <i>{year}</i>
        </h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SingleTl
