import React from "react"
import "./SearchBar.css"

function SearchBar({ onchange, value }) {
  return (
    <>
      <div
        className="searchBox"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          value={value}
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          style={{ padding: "0.8rem", display: "block", margin: "0" }}
          onChange={onchange}
        />
      </div>
    </>
  )
}

export default SearchBar
