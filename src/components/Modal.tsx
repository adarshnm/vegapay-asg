import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
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
