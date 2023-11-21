import { gsap } from "gsap"

export const Rotation = (element) => {
  element = element.current
  gsap.fromTo(
    element,
    { rotation: -90 },
    {
      rotation: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        toggleActions: "play none none none",
      },
    }
  )
}
