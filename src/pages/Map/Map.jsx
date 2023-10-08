import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Rotation } from "../components animation/Rotation"

export default function Map() {
  const map = useRef(null)

  useEffect(() => {
    Rotation(map)
  }, [])

  const position = [34.52604146664417, 69.1510697312263]

  return (
    <div ref={map}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            This is the exact location <br />
            where I was dropped.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
