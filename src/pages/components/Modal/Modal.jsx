import "./Modal.css"
import { forwardRef, useImperativeHandle, useRef } from "react"
import photo from "../../../assets/poetry.jpg"
const MyModal = forwardRef(function MyModal({ content, title }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => ({
    // pass the prop through the ref
    content: <img src={photo} style={{ height: "24rem", width: "24rem" }} />,
    title: "How is better the Rumi?",
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
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleClick} aria-label="close" class="x">
        ❌
      </button>
    </dialog>
  )
})
export default MyModal
