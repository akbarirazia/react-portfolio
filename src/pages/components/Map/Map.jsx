import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Rotation } from "../../components animation/Rotation"

export default function Map() {
  const map = useRef(null)

  useEffect(() => {
    Rotation(map)
  }, [])

  const position = [34.52604146664417, 69.1510697312263]

  return (
    <iframe
      ref={map}
      src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1642.8693610361781!2d69.15236328850473!3d34.560170202126535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d34.5602951!2d69.1520578!4m5!1s0x38d16f417b778a83%3A0xaf1708092bcc0073!2z2LPYsdqpINqG2YfYp9ix2YUg2b7YsdmI2pjZhyDYqtin24zZhdmG24wg2qnZiNqG2Ycg2YXaqdiq2Kgg2YXZhNqp2Ycg2KvYsduM2Kc!3m2!1d34.5597456!2d69.1552715!5e0!3m2!1sen!2sus!4v1700217199369!5m2!1sen!2sus"
      width="100%"
      height="400"
      loading="lazy"
      style={{ display: "fixed" }}
      className="iframe"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}
