import "./TimLine.css"
import SingleTl from "./SingleTl"
import { useEffect, useRef } from "react"
// import { Animation } from "./pages/components animation/Animation.js"
// import Animation from "../../components animation/Animation"
import { useTranslation } from "react-i18next"

function TimeLine() {
  const { t } = useTranslation()
  const experiences = [
    {
      title: t("ABOUT_PAGE.EXPERIENCE.EX_1.TITLE"),
      year: "2023 - present",
      description: t("ABOUT_PAGE.EXPERIENCE.EX_1.DESCRIPTION"),
      index: 1,
    },
    {
      title: t("ABOUT_PAGE.EXPERIENCE.EX_2.TITLE"),
      year: "2023",
      description: t("ABOUT_PAGE.EXPERIENCE.EX_2.DESCRIPTION"),
      index: 2,
    },
    {
      title: t("ABOUT_PAGE.EXPERIENCE.EX_3.TITLE"),
      year: "2022",
      description: t("ABOUT_PAGE.EXPERIENCE.EX_3.DESCRIPTION"),
      index: 3,
    },
    {
      title: t("ABOUT_PAGE.EXPERIENCE.EX_4.TITLE"),
      year: "2020 - 2021",
      description: t("ABOUT_PAGE.EXPERIENCE.EX_4.DESCRIPTION"),
      index: 4,
    },
  ]
  return (
    <div className="tl">
      <SingleTl
        cls={"tl-left"}
        title={t("ABOUT_PAGE.EXPERIENCE.EX_1.TITLE")}
        year={"2023 - present"}
        description={experiences[0].description}
        index={experiences[0].index}
      />
      <SingleTl
        cls={"tl-right"}
        title={experiences[1].title}
        year={experiences[1].year}
        description={experiences[1].description}
        index={experiences[1].index}
      />
      <SingleTl
        cls={"tl-left"}
        title={experiences[2].title}
        year={experiences[2].year}
        description={experiences[2].description}
        index={experiences[2].index}
      />
      <SingleTl
        cls={"tl-right"}
        title={experiences[3].title}
        year={experiences[3].year}
        description={experiences[3].description}
        index={experiences[3].index}
      />
    </div>
  )
}

export default TimeLine
