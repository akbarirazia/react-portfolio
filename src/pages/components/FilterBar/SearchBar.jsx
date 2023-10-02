import React from "react"
import "./SearchBar.css"
import Button from "../Button"
function SearchBar({ onchange, value }) {
  return (
    <>
      <div
        class="searchBox"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          value={value}
          class="searchInput"
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
