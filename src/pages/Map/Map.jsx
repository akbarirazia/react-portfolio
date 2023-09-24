import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Map.css"

export default function Map() {
  // const [position, setPosition] = useState([51.505, -0.09])

  //my position, retrieved from google maps
  const position = [34.52604146664417, 69.1510697312263]

  return (
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
  )
}
