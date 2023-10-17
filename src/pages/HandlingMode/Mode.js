export default Mode = ({ isDark, dep }) => {
  useEffect(() => {
    const body = document.body
    const divs = document.querySelectorAll(".div")
    if (isDark) {
      body.classList.add("dark-mode")
      console.log(divs)
      divs.forEach((div) => {
        div.classList.add("dark")
      })
      // div.classList.add("dark")
    } else {
      body.classList.remove("dark-mode")
      divs.forEach((div) => {
        div.classList.remove("dark")
      })
    }
    localStorage.setItem("isDark", isDark)
  }, [dep])
}
