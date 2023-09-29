function SingleTl({ cls, title, year, description }) {
  const isDark = localStorage.getItem("isDark") === "true"

  const styleObj = {
    backgroundColor: "black",
  }
  return (
    <div className={`tl-container ${cls}`}>
      <div className="tl-content" style={isDark ? styleObj : {}}>
        <h3 className="colorful">{title}</h3>
        <h6>
          <i>{year}</i>
        </h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SingleTl
