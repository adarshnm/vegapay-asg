import React from "react";
import { Modal, TextField } from "../../components";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Button } from "@mui/material";
interface IViewModalProps {
  open: boolean;
  handleClose: () => void;
  card?: ICard;
}

const WalletDetails = ({ open, handleClose, card }: IViewModalProps) => (
  <Modal open={open} title="Card Details" handleClose={handleClose}>
    <DialogContent>
      <Box
        sx={{ paddingTop: 4, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          label="Customer ID"
          value={card?.id}
          disabled
          sx={{
            width: "100%",
          }}
        />
        <TextField
          label="Name On Card"
          value={card?.nameOnCard}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          label="Old Card No."
          value={card?.cardNumber}
          disabled
          sx={{
            width: "100%",
          }}
        />
        <TextField
          label="Kit Number"
          value={card?.cardNumber}
          sx={{
            width: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <TextField
            label="Card No."
            value={card?.cardNumber}
            sx={{
              width: "48%",
            }}
          />
          <TextField
            label="Expiry Date"
            disabled
            type="date"
            sx={{
              width: "48%",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <TextField
            label="Activation Date"
            type="date"
            sx={{
              width: "48%",
            }}
          />
          <TextField
            label="Reason for Re-Issuance"
            sx={{
              width: "48%",
            }}
          />
        </Box>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" type="reset" color="error">
        Clear
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </DialogActions>
  </Modal>
);

export default WalletDetails;
