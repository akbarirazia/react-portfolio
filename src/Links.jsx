import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import "./Links.css"
import { Link } from "react-router-dom"

function Links() {
  return (
    <div className="flex links-wrapper">
      <Link path="/home" className="link">
        <p>Woman.of.God</p>
      </Link>
      <div className="links flex gap-1x">
        <a
          href="https://github.com/akbarirazia"
          className="green"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="mailto:akbariharis14@gmail.com" target="_blank">
          <SiGmail />
        </a>
        <a
          href="https://discordapp.com/users/eccedentesiast.ra"
          className="green"
          target="_blank"
        >
          <FaDiscord />
        </a>
        <a href="https://twitter.com/akbari_razia" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://t.me/eccedentesiast_ra" className="green">
          <FaTelegram />
        </a>
      </div>
    </div>
  )
}

export default Links
