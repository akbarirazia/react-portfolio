import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { medicalportfolio } from "./Data/MedicalPort"
import { projects } from "./Data/WebDev"

import "./What.css"

import SearchBar from "./components/FilterBar/SearchBar"
import Cards from "./components/Cards/Cards"
import DropDown from "./components/FilterBar/DropDown"

function What() {
  const combinedData = [...medicalportfolio, ...projects]
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
  shuffle(combinedData)
  const [array, setArray] = useState(combinedData)
  // console.log(combinedData)
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/akbarirazia/repos")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])

  // console.log(data)
  function handleFilter(option) {
    // console.log(option)
    if (option === "All Portfolios") {
      setArray(combinedData)
    } else if (option === "Web Development") {
      setArray(projects)
    } else {
      setArray(medicalportfolio)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="container">
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
          <DropDown onFilter={handleFilter} />
        </div>
        {/* <Cards /> */}
        <div
          className="flex flex-wrap gap-2x card-container"
          style={{ justifyContent: "space-evenly" }}
        >
          {array.map((data, index) => (
            <Cards
              key={index}
              title={data.title}
              description={data.description}
              link={data.link}
              img={data.imageSrc}
              tags={data.tags}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default What
