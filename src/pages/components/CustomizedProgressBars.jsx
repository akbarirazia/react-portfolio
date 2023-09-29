import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,

  borderRadius: 50,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 50,
    // backgroundColor: theme.palette.mode === "light" ? "#48ff1a" : "#308fe8",
    background: "linear-gradient(45deg, hotpink, chartreuse, #682ae9);",
  },
}))

// Inspired by the former Facebook spinners.

export default function CustomizedProgressBars({ value }) {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
    </div>
  )
}
