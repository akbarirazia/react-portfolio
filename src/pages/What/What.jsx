import React, { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import { medicalportfolio } from "../../Data/MedicalPort"
import { projects } from "../../Data/WebDev"

import "./What.css"

import SearchBar from "../components/FilterBar/SearchBar"
import Cards from "../components/Cards/Cards"
import DropDown from "../components/FilterBar/DropDown"
import Github from "../components/Github/Github"

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
  const [array, setArray] = useState(projects)
  // const [array, setArray] = useState(medicalportfolio)

  function handleFilter(option) {
    console.log(option)
    if (option === "All Portfolios") {
      setArray(combinedData)
    } else if (option === "Web Development") {
      setArray(projects)
    } else {
      setArray(medicalportfolio)
    }
  }
  const [query, setQuery] = useState("")

  const filteredProjects = useMemo(
    () =>
      array.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      ),
    [array, query]
  )

  const finalProject = filteredProjects.map((data, index) => (
    <Cards
      key={index}
      title={data.title}
      description={data.description}
      link={data.link}
      img={data.imageSrc}
      tags={data.tags}
      delay={index}
      dateOfBirth={data.dateOfBirth}
    />
  ))
  // console.log(finalProject.length)
  return (
    <div>
      <Navbar option={handleFilter} />

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
          <SearchBar onchange={(e) => setQuery(e.target.value)} value={query} />
          <DropDown onFilter={handleFilter} />
        </div>

        <div
          className="flex flex-wrap gap-2x card-container"
          style={{ justifyContent: "space-evenly" }}
        >
          {finalProject.length == 0 ? (
            <div style={{ marginTop: "2rem" }}>No Project Found</div>
          ) : (
            finalProject
          )}
        </div>
      </div>
      <br />
      <br />
      <Github />
      <br />
      <br />
    </div>
  )
}

export default What
