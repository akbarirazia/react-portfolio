import React from "react"

function Tags({ children }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 tag">
      #{children}
    </span>
  )
}

export default Tags
