import React, { useEffect, useRef } from "react"
import Animation from "../../components animation/Animation"

function Tags({ children, index, style }) {
  const tag = useRef(null)
  useEffect(() => {
    Animation(tag, index + 1, 0, "play", 100, 0, 0, 0)
  })
  return (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 tag"
      ref={tag}
      style={style}
    >
      #{children}
    </span>
  )
}

export default Tags
