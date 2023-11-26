import React, { useEffect, useRef } from "react"
import Navbar from "../components/Navbar/Navbar"
import "./Where.css"
import Animation from "../components animation/Animation"
import Map from "../Map/Map"
import Spline from "@splinetool/react-spline"
import ContactForm from "../ContactForm/ContactForm"
import HeartBeatEffect from "../components animation/HeartBeatEffect"
import { useTranslation } from "react-i18next"
import skull from "../../assets/skull.png"

function Where() {
  const { t } = useTranslation()
  const heaven = useRef(null)
  const back = useRef(null)
  const back_2 = useRef(null)
  const right = useRef(null)
  const left = useRef(null)
  const beat = useRef(null)
  const name = useRef(null)
  const email = useRef(null)
  const msg = useRef(null)
  useEffect(() => {
    Animation(heaven, 1, 0, "play", -200, 100)
    Animation(heaven, 2, 0, "play", 100, 0, 1, 1)
    Animation(back, 3, -150)
    Animation(back_2, 3, 50)
    Animation(right, 3, 150)
    Animation(left, 3, -50)
    HeartBeatEffect(beat)
    Animation(name, 1, 50)
    Animation(email, 1.2, -50)
    Animation(msg, 1.3, 0, "play", 100)
  })
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="container">
          <div className="fell">
            <br />
            <h2 ref={heaven}>
              {t("CONTACT_PAGE.TITLE_1", "I FELL FROM")}
              <span className="colorful">
                {" "}
                {t("CONTACT_PAGE.HEAVEN", "HEAVEN")}
              </span>
            </h2>
            <Spline scene="https://prod.spline.design/VPOrxeUHegxoZgU4/scene.splinecode" />
          </div>
          <div className="mars">
            <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
              <span className="colorful ">
                {t("CONTACT_PAGE.TITLE_2", "My Whereabouts")}
              </span>
            </h2>
            <div className="small">
              <small
                ref={back_2}
                // className="small"
                style={{ display: "inline-block" }}
              >
                {t(
                  "CONTACT_PAGE.DESCRIPTION",
                  " End of 2002, when I was dropped on earth and ever since want to go back. My friend, I'm stuck in between"
                )}
                <span className="colorful">
                  {" "}
                  {t("CONTACT_PAGE.VM", "Venus and Mars")}
                </span>{" "}
                <span style={{ fontSize: "1.1rem" }}>😑</span>
              </small>
              <small
                ref={left}
                // className="small"
                style={{ display: "inline-block" }}
              >
                {" "}
                {t(
                  "CONTACT_PAGE.HEY",
                  "But hey, there is an even easier way to get in touch with me."
                )}
              </small>
            </div>
          </div>
          <br />
          <div className="touch">
            <div className="contact div">
              <p ref={back}>
                <span className="colorful">
                  {" "}
                  {t("CONTACT_PAGE.CONTACT", "Say Helloo!")}
                </span>
              </p>
              <br />
              <div className="inputs ">
                <ContactForm username={name} useremail={email} msg={msg} />
              </div>
            </div>
            <div className="map">
              <p ref={right}>
                <span className="colorful">
                  {" "}
                  {t("CONTACT_PAGE.LOCATION", "Exact Location")}
                </span>
              </p>
              <div className="mapDiv">
                <Map />
              </div>
            </div>
          </div>
          <br />
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            {t("CONTACT_PAGE.MADE", "Made with")}{" "}
            <span
              ref={beat}
              style={{ display: "inline-block", color: "white" }}
            >
              🤍
            </span>{" "}
            {t("CONTACT_PAGE.YEAR", "in 2023")}
          </p>
          <p style={{ textAlign: "center", marginTop: ".1rem" }}>
            {" "}
            {t("ABOUT_PAGE.LAST.RAZIA_AKBARI")} <br />
            <img src={skull} alt="skill" width="5%" height="5%" />
          </p>
          <div className="spacer"></div>
        </div>
      </div>
    </>
  )
}

export default Where
