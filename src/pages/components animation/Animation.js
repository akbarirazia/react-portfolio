import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
export default Animation = (
  element,
  duration,
  x,
  mode = "play",
  ystart,
  yend = 0,
  delay = 0,
  opacity = 0
) => {
  gsap.fromTo(
    element.current,
    {
      x: x,
      opacity: opacity,
      y: ystart,
      display: "hidden",
    },
    {
      display: "visible",
      delay: delay,
      x: 0,
      y: yend,
      opacity: 1,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element.current,

        toggleActions: `${mode} none none none`,
      },
    }
  )
}
