import React from "react"
import DropDown from "./DropDown"
import SearchBar from "./SearchBar"
import "./FilterBar.css"

function FilterBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1.5rem",
        padding: "0",
      }}
      className="filter"
    >
      <SearchBar />
      <DropDown />
    </div>
  )
}

export default FilterBar
