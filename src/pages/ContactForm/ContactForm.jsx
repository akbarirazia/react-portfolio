import React from "react"
import "./ContactForm.css"
import Button from "../components/Button.jsx"

function ContactForm({ name, email, msg }) {
  return (
    <form className="form">
      <input type="text" placeholder="Your Name" ref={name} />
      <input
        type="email"
        name=""
        id=""
        placeholder="you@somewhere.smth"
        ref={email}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="12"
        placeholder="Your message"
        ref={msg}
      />
      <div className="btn">
        <Button>Send!</Button>
      </div>
    </form>
  )
}

export default ContactForm
