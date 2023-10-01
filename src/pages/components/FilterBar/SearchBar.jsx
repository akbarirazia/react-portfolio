import React from "react"
import "./SearchBar.css"
import Button from "../Button"
function SearchBar() {
  return (
    <>
      <div
        class="searchBox"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          class="searchInput"
          type="text"
          name=""
          placeholder="Search"
          style={{ padding: "0.8rem", display: "block", margin: "0" }}
        />
      </div>
    </>
  )
}

export default SearchBar
