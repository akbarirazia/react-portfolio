import React, { useState } from "react"
import Button from "../Button"
import "./DropDown.css"
import { FaChevronDown } from "react-icons/fa"

function DropDown({ onFilter }) {
  const [option, setOption] = useState("All Portfolios")
  // console.log();
  function handleClick(event) {
    setOption(event.target.dataset.value)
    onFilter(event.target.dataset.value)
    // console.log(event.target.dataset.value)
  }
  return (
    <div className="dropdown">
      <Button>
        <div className="chevron">
          {option}{" "}
          <span>
            <FaChevronDown style={{ display: "block" }} />
          </span>
        </div>
      </Button>
      <div className="dropdown-content">
        <a data-value="All Portfolios" onClick={handleClick}>
          All Portfolios
        </a>
        <a data-value="Medical" onClick={handleClick}>
          Medical
        </a>
        <a data-value="Web Development" onClick={handleClick}>
          Web Development
        </a>
      </div>
    </div>
  )
}

export default DropDown
