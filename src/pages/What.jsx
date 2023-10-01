import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { medicalportfolio } from "./Data/MedicalPort"
import { projects } from "./Data/WebDev"
import FilterBar from "./components/FilterBar/FilterBar"
import "./What.css"

import SearchBar from "./components/FilterBar/SearchBar"
import Cards from "./components/Cards/Cards"

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
  // console.log(combinedData)
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/akbarirazia/repos")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])

  // console.log(data)
  return (
    <div>
      <Navbar />
      <div className="container">
        <FilterBar />
        {/* <Cards /> */}
        <div
          className="flex flex-wrap gap-2x card-container"
          style={{ justifyContent: "space-evenly" }}
        >
          {combinedData.map((data, index) => (
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
