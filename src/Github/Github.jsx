import GitHubCalendar from "react-github-calendar"
import "./Github.css"
import { useEffect, useState } from "react"

export default function Github() {
  const isDark = localStorage.getItem("isDark") === "true"
  const [dark, setDark] = useState(isDark)

  useEffect(() => {
    setDark(isDark)
  }, [isDark])
  console.log(isDark)
  return (
    <>
      <div className="container ">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="colorful">Github Calendar</span>
        </h2>
        <small className="small">
          You see Those rectus muscle trippin'? How about we call it my biggest
          flex so far? and it all started on May of 2023, I was set on a long
          journey 🦾.
        </small>
        <br /> <br />
        <div className="github">
          <GitHubCalendar
            username="akbarirazia"
            theme={{
              light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
              dark: ["hsl(0, 0%, 22%)", "hsl(225,92%,77%)"],
            }}
            colorScheme={dark ? "dark" : "light"}
            showWeekdayLabels="true"
            style={{ color: "" }}
          />
        </div>
        <br /> <br />
      </div>
    </>
  )
}
