import { gsap } from "gsap"

const HeartBeatEffect = (element) => {
  gsap.fromTo(
    element.current,
    {
      scale: 1,
    },
    {
      scale: 1.3,
      repeat: -1,
      yoyo: true,
    }
  )
}
export default HeartBeatEffect
