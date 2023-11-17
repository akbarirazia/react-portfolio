import "./Modal.scss"
import { forwardRef, useImperativeHandle, useRef } from "react"
import photo from "../../../assets/poetry.jpg"
import meme from "../../../assets/intro.jpg"

const MyModal = forwardRef(function MyModal({ content, title }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => ({
    // pass the prop through the ref
    content: <img src={photo} height="100%" width="100%" />,
    content1: <img src={meme} height="100%" width="100%" />,
    content2: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UZCHdc-a5cQ?si=moY4NQLyFm3Tk7-T"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    title: "Who is better the Rumi?",
    title1: "Introvets issues 😆",
    title2: "No K-pop, we ain't the same",
    open() {
      dialog.current.showModal()
    },
    dialog,
    // expose innerRef methods if needed
  }))
  function handleClick() {
    dialog.current.close()
  }
  return (
    <dialog ref={dialog} id="dialog">
      <div className="top">
        <h3>{title}</h3>{" "}
        <button onClick={handleClick} aria-label="close" className="x">
          ❌
        </button>
      </div>

      <div className="content">{content}</div>
    </dialog>
  )
})
export default MyModal
