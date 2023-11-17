import React, { useEffect, useImperativeHandle, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import image from "/src/assets/razia_back.png"
import "./WhoMe.css"
import { useRef } from "react"
import MyModal from "../components/Modal/Modal"

import Skill from "../components/Skills/Skill"
import Animation from "../components animation/Animation"
import HeartBeatEffect from "../components animation/HeartBeatEffect"
import TimeLine from "../components/TimeLine/TimeLine"

function WhoMe() {
  const para0 = useRef(null)
  const para1 = useRef(null)
  const para2 = useRef(null)
  const para3 = useRef(null)
  const para5 = useRef(null)
  const modal = useRef()
  const firstBlock = useRef(null)
  const secondBlock = useRef(null)
  const thirdBlock = useRef(null)
  const heart = useRef(null)
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  useEffect(() => {
    Animation(para0, 1, 100)
    // animation(para0, 1)
    Animation(para1, 2, -100)
    Animation(para2, 3, 100)
    Animation(para3, 4, -50)
    Animation(para5, 2, 100)
    Animation(firstBlock, 5, 50)
    Animation(secondBlock, 3, -50)
    Animation(thirdBlock, 4, -100)
    HeartBeatEffect(heart)
  })

  function handleClick() {
    setContent(modal.current.content)
    setTitle(modal.current.title)
    modal.current.open()
  }

  return (
    <>
      <Navbar />
      <MyModal ref={modal} content={content} title={title} />
      <br />
      <div className="container section-wrapper">
        <div className="img-wrapper">
          <p className="flip-text">who is she?</p>

          <img src={image} draggable={false} />
          <p className="flip-text">I wish I knew. . .</p>
        </div>

        <div className="about">
          <p ref={para0}>
            Oh boy, let me tell you, as an{" "}
            <span className="colorful" style={{ fontWeight: "bold" }}>
              INFJ/INTJ
            </span>
            , the most dreaded questions I get is "Who are you?", "Describe
            yourself". I mean, I've dedicated my life to figuring it out, so its
            a live long goal. How can I provide a proper answer before I find it
            out myself?
          </p>{" "}
          <br />
          <p ref={para1}>
            I started off as a medical student, but got banned for some sick
            reasons. But then I remembered my love for tech and now I'm juggling
            this crazy journey. Who knows, maybe I'll become a{" "}
            <span className="colorful" style={{ fontWeight: "bold" }}>
              frontend web developer
            </span>
            , or even a full stack web developer! Shoot, I might even become a
            3D modeling/designing expert (smth I fell for recently, everyday I
            fall for smth new...). I'm all over the place, but I give 100% to
            everything I do.
          </p>
          <br />
          <p ref={para2}>
            I'm a chill and fun individual, madly in love with human psychology
            (obsessed with MBTI),{" "}
            <span
              style={{
                borderBottom: "3px solid #682ae9",
              }}
              onClick={handleClick}
            >
              poetry
            </span>
            ,{" "}
            <span
              style={{
                borderBottom: "3px solid chartreuse",
              }}
            >
              old music
            </span>
            , and technology. I have a killer sense of{" "}
            <span
              style={{
                borderBottom: "3px solid hotpink",
              }}
            >
              humor
            </span>
            . So, if you're looking for a good laugh, hit me up!
          </p>{" "}
          <br />
          <strong>
            - Razia Akbari{" "}
            <span ref={heart} style={{ display: "inline-block" }}>
              🖤
            </span>
          </strong>
        </div>
      </div>
      <br />
      <br />

      <div className="container" style={{ marginBottom: "2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          <span className="colorful">Experiences</span>
        </h2>
        <small className="small">
          I've dabbled in so many professions, I could probably diagnose your
          computer's HR issues while performing a web development surgery. Just
          kidding... or am I?
        </small>
      </div>
      <TimeLine />
      <br />
      <br />
      <div className="container">
        <h2 style={{ textAlign: "center", margin: "1rem auto" }}>
          <span className="colorful">Skills</span>
        </h2>
        <small className="small">
          How about "I'm a self-taught expert in Googling solutions" or "like a
          magician, except instead of pulling rabbits out of hats, I pull
          solutions out of Stack Overflow"? Or maybe "I'm a master of Ctrl+C and
          Ctrl+V, but don't tell anyone"?
        </small>
      </div>
      <Skill
        para={para3}
        firstBlock={firstBlock}
        secondBlock={secondBlock}
        thirdBlock={thirdBlock}
        para1={para5}
      />
      <br />
    </>
  )
}

export default WhoMe
