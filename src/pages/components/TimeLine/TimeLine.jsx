import "./TimLine.css"
import SingleTl from "./SingleTl"
import { useEffect, useRef } from "react"
// import { Animation } from "./pages/components animation/Animation.js"
// import Animation from "../../components animation/Animation"

const experiences = [
  {
    title: "Web Developer",
    year: "2023 - present",
    description:
      "During my tenure as a Web Developer at Cosmino Productions, I played a critical role in desigining, building, maintaining, and deploying their website for one of their projects. Employing my expertise development, I ensured that the website boasted a responsive design, delivering seamless user experiences across multiple devices.",
  },
  {
    title: "HR Team Leader",
    year: "2023",
    description:
      "In my role at Gao Tek Inc., I handle HR tasks such as recruitment, employee records, new hire orientations, performance management, and employee relations. I also respond to employee inquiries, coordinate training  programs, and provide administrative support to the HR department. Additionally, I ensure compliance with HR policies and assist with projects as needed.",
  },
  {
    title: "Medical Intern",
    year: "2022",
    description:
      "As a medical intern at Medbound, I performed medical research on various topics, such as 'Testosterone's effect on male behaviour', 'FAST scan in trauma' (focused assessment sonography in trauma), (computerized tomography) CT Scan, etc.. and had the opportunity of holding discussion forms with professional doctors. ",
  },
  {
    title: "HR and Liaison Intern ",
    year: "2020 - 2021",
    description:
      "As a Liaison Officer at PLD's (Project Lockdown), I collaborated with Senior HR members and provided valuable assistance in various tasks. My responsibilities included recording and reporting employee issues for efficient resolution by Senior HR members, conducting employee satisfaction survies, wrinting news-letters and so on. Throughout my role, I maintained professionalism and prioritized confidentiality.",
  },
]
function TimeLine() {
  return (
    <div className="tl">
      <SingleTl
        cls={"tl-left"}
        title={"Web Developer"}
        year={"2023 - present"}
        description={
          "During my tenure as a Web Developer at Cosmino Productions, I played a critical role in desigining, building, maintaining, and deploying their website for one of their projects. Employing my expertise in development, I ensured that the website boasted a responsive design, delivering seamless user experiences across multiple devices."
        }
      />
      <SingleTl
        cls={"tl-right"}
        title={experiences[1].title}
        year={experiences[1].year}
        description={experiences[1].description}
      />
      <SingleTl
        cls={"tl-left"}
        title={experiences[2].title}
        year={experiences[2].year}
        description={experiences[2].description}
      />
      <SingleTl
        cls={"tl-right"}
        title={experiences[3].title}
        year={experiences[3].year}
        description={experiences[3].description}
      />
    </div>
  )
}

export default TimeLine
