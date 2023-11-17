import "./Modal.scss"
import { forwardRef, useImperativeHandle, useRef } from "react"
import photo from "../../../assets/poetry.jpg"

const MyModal = forwardRef(function MyModal({ content, title }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => ({
    // pass the prop through the ref
    content: <img src={photo} height="100%" width="100%" />,
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
