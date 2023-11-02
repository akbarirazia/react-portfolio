import { gsap } from "gsap"

export const Rotation = (element) => {
  element = element.current
  gsap.fromTo(
    element,
    { rotation: -90 },
    {
      rotation: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        toggleActions: "restart none none none",
      },
    }
  )
}
