import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
export default Animation = (
  element,
  duration,
  direction,
  mode = "restart",
  y = 0
) => {
  gsap.fromTo(
    element.current,
    { x: direction, opacity: 0, y: y },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element.current,
        // start: "top 10%",
        // end: "bottom 20%",
        // markers: true,
        toggleActions: `${mode} none none none`,
      },
    }
  )
  // console.log(`${mode} none none none`)
}
