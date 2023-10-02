import React, { useEffect, useMemo, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
// import { medicalportfolio } from "../Data/MedicalPort"
// import { projects } from "../Data/WebDev"

import "./What.css"
// import img from [projects.imageSrc]
import portfolio from "../assets/port.jpg"
import game from "../assets/game.jpg"
import invoice from "../assets/invoice.jpg"
import album from "../assets/album.jpg"
import bookstore from "../assets/bookstore.jpg"
import AyKash from "../assets/AyKash.jpg"

import SearchBar from "./components/FilterBar/SearchBar"
import Cards from "./components/Cards/Cards"
import DropDown from "./components/FilterBar/DropDown"
// import img from "../assets/meme.jpg"

export const projects = [
  {
    title: "Ay Kash -Under The Starry Afghan Sky",
    imageSrc: AyKash,
    description:
      "‘Ay Kash / ای کاش / If Only’ is a theatre, art and activism performance / exhibition featuring the artwork, films, poetry and stories of eleven young women based Afghanistan coming to Berlin, Germany in September 2023 and then available to tour worldwide. A project initiated by the Cosmino Productions.",
    link: "http://www.underthestarryafghansky.com/",
    tags: ["Tailwindcss", "JS", "HTML"],
  },
  {
    title: "Invoice App",
    imageSrc: invoice,
    description:
      "An invoice is a commercial document issued by a seller to a buyer that itemizes the products, services, or goods provided, along with their respective quantities and prices. It serves as a formal request for payment for the goods or services rendered. This project was created using bootstrap for its responsive design and JavaScript for its functionalities.",
    link: "https://akbarirazia.github.io/invoice-app/",
    tags: ["Vanilla", "Bootstrap", "JS"],
  },
  {
    title: "Bookstore Landing Page",
    imageSrc: bookstore,
    description:
      "An elegant and responsive bookstore landing page, created using Tailwind CSS. This static project brings a sophisticated touch to book lovers worldwide. With its visually pleasing design, optimized for all screen sizes. The combination of Tailwind CSS's sleek styling and the static nature of the website ensures fast loading times and a seamless browsing experience.",
    link: "https://akbarirazia.github.io/Bookstore-Landing-Page/",
    tags: ["Tailwindcss", "RWD", "HTML"],
  },
  {
    title: "Personal Portfolio",
    imageSrc: portfolio,
    description:
      "My personal portfolio! the page you are at right now. This project was created using tailwindcss for its responsive design and JavaScript for the certain functionalities in the page. It contains my personal portfolio and contact information along with my resume.",
    link: "https://akbarirazia.github.io/portfolio/",
    tags: ["Tailwindcss", "HTML", "RWD"],
  },
  {
    title: "Responsive Album",
    imageSrc: album,
    description:
      "A responsive static album with Bootstrap is a web page that showcases a collection of images or media in an organized and visually appealing manner. It is built using the Bootstrap framework, which provides a set of pre-designed CSS and JavaScript components for creating responsive and mobile-friendly websites.",
    link: "https://akbarirazia.github.io/responsive-album-bootstrap/",
    tags: ["Bootstrap", "Clone", "HTML"],
  },
  {
    title: "Rock, Paper, Scissors Game",
    imageSrc: game,
    description:
      "Rock, Paper, Scissors Game: A JavaScript-based game where players compete against the computer by choosing between rock, paper, or scissors. Test your strategy and luck in this classic hand gesture showdown!",
    link: "https://3w17p8.csb.app/",
    tags: ["Game", "JavaScript", "HTML"],
  },
]

function What() {
  // const combinedData = [...medicalportfolio, ...projects]
  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex

  //   // While there remain elements to shuffle.
  //   while (currentIndex > 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex--

  //     // And swap it with the current element.
  //     ;[array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ]
  //   }

  //   return array
  // }
  // shuffle(combinedData)
  // const [array, setArray] = useState(combinedData)
  const [array, setArray] = useState(projects)
  // // console.log(combinedData)
  // // const [data, setData] = useState([])
  // // useEffect(() => {
  // //   fetch("https://api.github.com/users/akbarirazia/repos")
  // //     .then((response) => response.json())
  // //     .then((data) => setData(data))
  // // }, [])

  // // console.log(data)
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
  const [query, setQuery] = useState("")

  const filteredProjects = useMemo(
    () =>
      array.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      ),
    [array, query]
  )
  function handleChange(e) {
    console.log(e.target.value)
    //   // setArray((prev) => {
    //   //   return prev.filter((arr) =>
    //   //     arr.title.toLowerCase().includes(e.target.value)
    //   //   )
    //   // })
  }
  const finalProject = filteredProjects.map((data, index) => (
    <Cards
      key={index}
      title={data.title}
      description={data.description}
      link={data.link}
      img={AyKash}
      tags={data.tags}
      delay={index}
    />
  ))
  // console.log(finalProject.length)
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

      <br />
    </div>
  )
}

export default What
