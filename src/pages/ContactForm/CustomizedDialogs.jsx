import * as React from "react"
import Button from "../components/Button"
import meme from "/src/assets/meme.jpg"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"
// import { Button } from "@mui/material"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

export default function CustomizedDialogs({ userName, formData }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setOpen(false)
      console.log("this was run")
    } else {
      setOpen(true)
    }
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} type="submit">
        Send!
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Thank you for sending me a message!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div style={{}}>
              <img
                src={meme}
                alt=""
                style={{ width: "100%", height: "15rem" }}
              />
            </div>
            Just Kidding!
            <br />
            {userName}, Shine✨!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Hahaha
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
