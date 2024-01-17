import React, { useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import { medicalportfolio } from "../../Data/MedicalPort"
import { projects } from "../../Data/WebDev"

import "./What.css"

import SearchBar from "../components/FilterBar/SearchBar"
import Cards from "../components/Cards/Cards"
import DropDown from "../components/FilterBar/DropDown"
import Github from "../components/Github/Github"
import { useTranslation } from "react-i18next"

function What() {
  const combinedData = [...medicalportfolio, ...projects]
  const { t } = useTranslation()
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
  shuffle(combinedData)
  const [array, setArray] = useState(projects)
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
        t(project.title).toLowerCase().includes(query.toLowerCase())
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
