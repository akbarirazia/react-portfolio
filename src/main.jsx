import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./styles.scss"
import App from "./App"
import "./i18n"
import { CircularProgress } from "@mui/material"
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="center">
          <CircularProgress />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
)
