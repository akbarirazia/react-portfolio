import GitHubCalendar from "react-github-calendar"
import "./Github.css"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Github() {
  const { t } = useTranslation()
  const isDark = localStorage.getItem("isDark") === "true"
  const [dark, setDark] = useState(isDark)

  useEffect(() => {
    setDark(isDark)
  }, [isDark])
  console.log(isDark)
  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="colorful">
            {t("PROJECT_PAGE.GITHUB.TITLE", "Github Calendar")}
          </span>
        </h2>
        <small className="small">
          {t(
            "PROJECT_PAGE.GITHUB.DESCRIPTION",
            "Check out these muscles! Talk about a major flex! 🦾 It was May 2023 when I dumped Python and Java and fell head over heels for JavaScript! 😆"
          )}
        </small>
        <br /> <br />
        <div className="github">
          <GitHubCalendar
            username="akbarirazia"
            theme={{
              light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
              dark: ["hsl(0, 0%, 22%)", "hsl(225,82%,77%)"],
            }}
            colorScheme={dark ? "dark" : "light"}
            // showWeekdayLabels="true"
            blockSize={14}
          />
        </div>
        <br /> <br />
      </div>
    </>
  )
}
