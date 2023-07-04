import React, { useState } from "react";
import { Modal, Select, TextField } from "../../components";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
interface ICreateAccountProps {
  open: boolean;
  handleClose: () => void;
}

const CreateAccountModal = ({ open, handleClose }: ICreateAccountProps) => {
  const [programType, setProgramType] = useState("");
  const [programName, setProgramName] = useState("");
  const [corpName, setCorpName] = useState("");
  const handleChange = (event: SelectChangeEvent<any>) => {
    if (event.target.name === "type") {
      setProgramType(event.target.value as string);
    } else if (event.target.name === "name") {
      setProgramName(event.target.value as string);
    } else {
      setCorpName(event.target.value as string);
    }
  };
  return (
    <Modal open={open} title="Create Account" handleClose={handleClose}>
      <DialogContent>
        <Box
          sx={{
            paddingTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <FormControl
            sx={{
              flex: 1,
            }}
          >
            <InputLabel id="prog-type-label">Program Type</InputLabel>
            <Select
              labelId="prog-type-label"
              id="prog-type"
              value={programType}
              label="Program Type"
              name="type"
              onChange={handleChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"card"}>Card</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              flex: 1,
            }}
          >
            <InputLabel id="prog-name-label">Program Name</InputLabel>
            <Select
              labelId="prog-name-label"
              id="prog-name"
              value={programName}
              label="Program Name"
              name="name"
              onChange={handleChange}
            >
              <MenuItem value={"basic"}>Basic Program</MenuItem>
              <MenuItem value={"corporate"}>Corporate Program</MenuItem>
            </Select>
          </FormControl>
          {programName === "corporate" ? (
            <FormControl
              sx={{
                flex: 1,
              }}
            >
              <InputLabel id="corp-name-label">Corporate Name</InputLabel>
              <Select
                labelId="corp-name-label"
                id="corp-name"
                value={corpName}
                label="Corporate Name"
                name="corp-name"
                onChange={handleChange}
              >
                <MenuItem value={"corp1"}>Corp 1</MenuItem>
                <MenuItem value={"corp2"}>Corp 2</MenuItem>
                <MenuItem value={"corp3"}>Corp 3</MenuItem>
                <MenuItem value={"corp4"}>Corp 4</MenuItem>
              </Select>
            </FormControl>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" type="submit">
          Clear
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default CreateAccountModal;
