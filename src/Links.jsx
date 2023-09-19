import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import "./Links.css"

function Links() {
  return (
    <div className="flex links-wrapper">
      <p>Woman.of.God</p>
      <div className="links flex gap-1x">
        <a href="" className="green">
          <FaGithub />
        </a>
        <a href="">
          <SiGmail />
        </a>
        <a href="" className="green">
          <FaDiscord />
        </a>
        <a href="">
          <FaXTwitter />
        </a>
        <a href="" className="green">
          <FaTelegram />
        </a>
      </div>
    </div>
  )
}

export default Links
