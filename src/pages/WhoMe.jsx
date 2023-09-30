import React, { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import image from "/src/assets/razia_back.png"
import "./WhoMe.css"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import Skill from "./components/Skills/Skill"
import Animation from "./components animation/Animation"
import HeartBeatEffect from "./components animation/HeartBeatEffect"
import TimeLine from "./components/TimeLine/TimeLine"

function WhoMe() {
  const para0 = useRef(null)
  const para1 = useRef(null)
  const para2 = useRef(null)
  const para3 = useRef(null)
  const para5 = useRef(null)
  const firstBlock = useRef(null)
  const secondBlock = useRef(null)
  const thirdBlock = useRef(null)
  const heart = useRef(null)
  // useEffect(() => {
  //   const body = document.body
  //   if (localStorage.getItem("isDark")) {
  //     body.classList.add("dark-mode")
  //     console.log("this means the item in localStorage is true")
  //   } else {
  //     body.classList.remove("dark-mode")
  //   }
  //   // console.log(localStorage.getItem("isDark"))
  //   // localStorage.setItem("isDark", isDark)
  // }, [])

  // console.log(heart)
  // console.log(para0)
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)

    // const animation = (element, duration) => {
    //   gsap.fromTo(
    //     element.current,
    //     { x: 100, opacity: 0 },
    //     {
    //       x: 0,
    //       opacity: 1,
    //       duration: duration,
    //       ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: element.current,
    //         // start: "top 10%",
    //         // end: "bottom 20%",
    //         // markers: true,
    //         toggleActions: "restart none none none",
    //       },
    //     }
    //   )
    // }
    Animation(para0, 1, 100)
    // animation(para0, 1)
    Animation(para1, 2, -100)
    Animation(para2, 3, 100)
    Animation(para3, 3, -100)
    Animation(para5, 2, 100)
    Animation(firstBlock, 4, 100)
    Animation(secondBlock, 2, -100)
    Animation(thirdBlock, 3, -150)

    // gsap.fromTo(
    //   para1.current,
    //   { x: 100, opacity: 0 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 2,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: para1.current,
    //       // start: "top 80%",
    //       // end: "bottom 10%",
    //       // markers: true,
    //       toggleActions: "restart none none none",
    //     },
    //   }
    // )

    // gsap.fromTo(
    //   para2.current,
    //   { x: 100, opacity: 0 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 3,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: para2.current,
    //       // start: "top 90%",
    //       // end: "bottom 20%",
    //       // markers: true,
    //       toggleActions: "restart none none none",
    //     },
    //   }
    // )
    // gsap.fromTo(
    //   para0.current,
    //   { x: 100, duration: 1, ease: "power3.out" },
    //   { x: 0, duration: 1, ease: "power3.out" }
    // )
    // // gsap.to(para0.current, )
    // gsap.fromTo(
    //   para1.current,
    //   { x: 100, duration: 2, ease: "power3.out" },
    //   { x: 0, duration: 2, ease: "power3.out" }
    // )
    // // gsap.to(para1.current, )
    // gsap.fromTo(
    //   para2.current,
    //   { x: 100, duration: 3, ease: "power3.out" },
    //   { x: 0, duration: 3, ease: "power3.out" }
    // )
    // gsap.to(para2.current, )
    HeartBeatEffect(heart)
  })

  return (
    <>
      <Navbar />
      <br />
      <div className="container section-wrapper">
        <div className="img-wrapper">
          <p className="flip-text">who is she?</p>

          <img src={image} />
          <p className="flip-text">I wish I knew. . .</p>
        </div>

        <div className="about">
          {/* <h1>Here is a little generics I know about her</h1> */}
          <p ref={para0}>
            Oh boy, let me tell you, as an{" "}
            <span className="colorful" style={{ fontWeight: "bold" }}>
              INFJ/INTJ
            </span>
            , the most dreaded questions I get is "Who are you?", "Describe
            yourself". I mean, I've dedicated my life to figuring it out, so its
            a live long goal. can't give a proper answer before I find it out
            myself.
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
                paddingBottom: "0.09rem",
              }}
            >
              poetry
            </span>
            ,{" "}
            <span
              style={{
                borderBottom: "3px solid chartreuse",
                paddingBottom: "0.09rem",
              }}
            >
              old music
            </span>
            , and technology. I have a killer sense of
            <span
              style={{
                borderBottom: "3px solid hotpink",
                paddingBottom: "0.09rem",
              }}
            >
              {" "}
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
        <small
          // style={{
          //   width: "30rem",
          //   display: "block",
          //   margin: "0 auto",
          //   textAlign: "center",
          // }}
          className="small"
        >
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
