import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import useAppSelector from "../hooks/useAppSelector";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const notification = useAppSelector((state) => state.notification);

  return (
    <Snackbar
      open={!!notification.type}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity={(notification.type || "error") as AlertColor}
        sx={{ width: "100%" }}
      >
        {notification.text}
      </Alert>
    </Snackbar>
  );
}
