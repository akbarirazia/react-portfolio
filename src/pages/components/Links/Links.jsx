import React from "react"
import { FaGithub } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import "./Links.css"
import { Link } from "react-router-dom"
import skull from "../../../assets/skull.png"

function Links() {
  return (
    <div className="links-wrapper ">
      <div className="container flex justify-between">
        <Link to="/" className="link">
          <p>
            {/* WoMan.of.God */}
            <img src={skull} className="skull" />
          </p>
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
          <a
            href="https://www.linkedin.com/in/razia-akbari-19b5271b0/"
            className="green"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Links
