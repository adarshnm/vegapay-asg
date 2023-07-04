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

const ViewCardModal = ({ open, handleClose, card }: IViewModalProps) => (
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
          disabled
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
            disabled
            sx={{
              width: "48%",
            }}
          />
          <TextField
            label="Expiry Date"
            value={card?.expiryDate}
            disabled
            type="date"
            sx={{
              width: "48%",
            }}
          />
        </Box>
        <TextField
          label="Activation Date"
          value={card?.createdAt}
          type="date"
          sx={{
            width: "48%",
          }}
        />
      </Box>
    </DialogContent>
    <DialogActions>
      <Box>
        <Button variant="outlined" onClick={handleClose} color="success">
          Got It
        </Button>
      </Box>
    </DialogActions>
  </Modal>
);

export default ViewCardModal;
