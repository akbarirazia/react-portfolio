import React, { useEffect, useRef } from "react"
import "./Skill.css"
import html from "/src/assets/html.png"
import css from "/src/assets/css.png"
import js from "/src/assets/Js.png"
import react from "/src/assets/react.png"
import git from "/src/assets/git.png"
import tailwindcss from "/src/assets/tailwindcss.png"
import bootstrap from "/src/assets/bootstrap.png"
import spline from "/src/assets/spline.png"
import java from "/src/assets/Java.png"
import github from "/src/assets/github.png"
import resume from "/src/assets/Razia Akbari's CV.pdf"
import { TweenLite } from "gsap/gsap-core"
import { TimelineMax } from "gsap/gsap-core"
import { Power1 } from "gsap"
import Button from "../Button"

function Skill({ para, firstBlock, secondBlock, thirdBlock, para1 }) {
  useEffect(() => {
    const tlCan = new TimelineMax({ repeat: -1 })
    /*Can Animation*/
    tlCan
      //move top left
      .to(" .span", 3, {
        y: "-=10",
        x: "+=15",
        rotation: "-=3",
        ease: Power1.easeInOut,
      })

      //move down right
      .to(".span", 2, {
        y: "+=10",
        x: "-=20",
        rotation: "-=5",
        ease: Power1.easeInOut,
      })

      .to(".span", 3, { y: "-=10", rotation: "+=3", ease: Power1.easeInOut })

      .to(".span", 3, { y: "+=5", rotation: "+=2", ease: Power1.easeInOut })

      .to(".span", 3, { y: "-=20", ease: Power1.easeInOut })

      .to(".span", 3, { y: "+=5", ease: Power1.easeInOut })

      .to(".span", 3, { y: "-=5", ease: Power1.easeInOut })

      .to(".span", 3, { y: "+=7", ease: Power1.easeInOut })

      .to(".span", 2, { y: "-=10", ease: Power1.easeInOut })

      .to(".span", 2, { y: "+=6", ease: Power1.easeInOut })

    TweenLite.to(tlCan, 2, { ease: Power1.easeInOut })
  }, [])

  return (
    <div className="container">
      <div className=" skill-wrapper">
        <div className="skills">
          <div className="first" ref={firstBlock}>
            <span className="hotpink span">
              <img src={html} alt="" />
            </span>
            <span className="span">
              <img src={css} alt="" />
            </span>
            <span className="purple span">
              <img src={js} alt="" />
            </span>
          </div>
          <div className="second" ref={secondBlock}>
            <span className="span">
              <img src={react} alt="" />
            </span>
            <span className="purple span">
              <img src={git} alt="" />
            </span>
            <span className="span">
              <img src={tailwindcss} alt="" className="tailwind" />
            </span>
            <span className="hotpink span">
              <img
                src={bootstrap}
                alt=""
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </span>
          </div>
          <div className="third" ref={thirdBlock}>
            <span className="hotpink span">
              <img src={spline} alt="" />
            </span>
            <span className="span">
              <img src={java} alt="" />
            </span>
            <span className="purple span">
              <img src={github} alt="" />
            </span>
          </div>
        </div>
        <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <h3 style={{ textAlign: "center" }} ref={para}>
            The little things I learned over the internet
          </h3>
          <br />
          <h4 style={{ textAlign: "center" }} ref={para1}>
            But there is more to my skills (as I have a ph.D from university of
            life 😎)
          </h4>
        </div>
        <br />

        <a href={resume} download>
          <Button>Download Resume</Button>
        </a>
        <br />
        <br />
      </div>
    </div>
  )
}

export default Skill
