import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./styles.scss"
import App from "./App"
import "./i18n"
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </StrictMode>
)
