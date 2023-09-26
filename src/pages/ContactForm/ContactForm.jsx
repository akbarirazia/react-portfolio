import React, { useState } from "react"
import "./ContactForm.css"
import Button from "../components/Button.jsx"
import CustomizedDialogs from "./CustomizedDialogs"

function ContactForm({ username, useremail, msg }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  })
  const handleChange = (e) => {
    const { name, value, email, message } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    // console.log(formData)
  }
  const submit = (e) => {
    e.preventDefault()

    console.log("your form was successfully submitted")
    console.log(formData)
    e.target.value = ""
  }
  return (
    <form className="form" onSubmit={submit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        ref={username}
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="you@somewhere.smth"
        ref={useremail}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="12"
        placeholder="Your message"
        ref={msg}
        onChange={handleChange}
        required
      />
      <div className="btn">
        <CustomizedDialogs userName={formData.name} formData={formData} />
        {/* <Button type="submit">Send!</Button> */}
      </div>
    </form>
  )
}

export default ContactForm
