import React, { useState, useEffect } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useTranslation } from "react-i18next"
// import "./styles.scss" // CSS styles file

export default function ColorToggleButton() {
  const { i18n } = useTranslation()
  const storedLanguage = localStorage.getItem("language")
  const [language, setLanguage] = useState(storedLanguage || "en")

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  useEffect(() => {
    const body = document.body
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
          handleLanguageChange(newLanguage)
        }}
        aria-label="Language"
        color="primary"
        size="small"
      >
        <ToggleButton value="en">🇺🇸</ToggleButton>
        <ToggleButton value="fa">🇦🇫</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
