import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  borderRadius: 12,

  "& .MuiDialog-container": {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },
  "& .MuiDialog-paper": {
    [theme.breakpoints.up("md")]: {
      margin: "0 8px 0 0",
      height: "100%",
    },
  },
}));

export default function Modal(props: React.PropsWithChildren<IFormModalProps>) {
  return (
    <StyledDialog
      fullWidth
      maxWidth={"md"}
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#f9f9f9",
        }}
      >
        {props.title}
      </DialogTitle>
      {props.children}
    </StyledDialog>
  );
}
