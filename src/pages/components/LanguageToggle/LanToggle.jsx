import React, { useState, useEffect } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useTranslation } from "react-i18next"
// import "./styles.scss" // CSS styles file

export default function ColorToggleButton() {
  const { i18n } = useTranslation()

  // We can simplify the code by initializing the state directly to the value stored in localStorage (if it exists).
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  )

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  useEffect(() => {
    const body = document.body
    // To check if the stored language is Persian, we need to use the language code 'fa' rather than the Persian word 'persian'.
    if (language === "fa") {
      body.classList.add("fa-font")
    } else {
      body.classList.remove("fa-font")
    }
  }, [language])

  return (
    <div>
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={(event, newLanguage) => {
          // We need to call handleLanguageChange with the language code 'en' or 'fa', not the flag emoji.
          handleLanguageChange(newLanguage)
        }}
        aria-label="Language"
        color="primary"
        size="small"
        // style={{
        //   backgroundColor: "#682ae9",
        // }}
      >
        <ToggleButton value="en" className="lanToggle">
          🇺🇸
        </ToggleButton>
        <ToggleButton value="fa" className="lanToggle">
          🇦🇫
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
