import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { TextField, Select } from "../components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UsersTable from "./UsersTable";
/**
 * TODO: Not completed, stopped dev work as per requirement updates
 */
function TeamManagement() {
  const [role, setRole] = useState("");
  const [branchName, setBranchName] = useState("");
  const handleRoleChange = (event: SelectChangeEvent<any>) => {
    setRole(event.target.value as string);
  };
  const handleNameChange = (event: SelectChangeEvent<any>) => {
    setBranchName(event.target.value as string);
  };
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#ffffff",
          borderRadius: 4,
        }}
      >
        <Typography>Personal Information</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <TextField
            label="Name"
            placeholder="Enter Name"
            sx={{
              flex: 1,
            }}
          />
          <TextField
            label="Mobile"
            placeholder="Enter Mobile No"
            sx={{
              flex: 1,
            }}
          />
          <TextField
            label="Email"
            placeholder="Enter Email"
            sx={{
              flex: 1,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            label="Address"
            placeholder="Enter Address"
            sx={{
              flex: 1,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="user-role-label">Select Role</InputLabel>
            <Select
              labelId="user-role-label"
              id="user-role"
              value={role}
              label="Select Role"
              onChange={handleRoleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="branch-name-label">Branch Name</InputLabel>
            <Select
              labelId="branch-name-label"
              id="branch-name"
              value={branchName}
              label="Age"
              onChange={handleNameChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Typography>Government ID Proof</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <FormControl
            sx={{
              flex: 1,
            }}
          >
            <InputLabel id="govt-id-label">Select ID</InputLabel>
            <Select
              labelId="govt-id-label"
              id="govt-id"
              value={role}
              label="Select ID"
              onChange={handleRoleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="ID Number"
            placeholder="ID Number"
            sx={{
              flex: 2,
              width: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="primary">Text</Button>
          <Button variant="primary" startIcon={<AddOutlinedIcon />}>
            Text
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#ffffff",
          borderRadius: 4,
        }}
      >
        <TextField
          id="search-mobile"
          label="search-mobile"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search by Mobile or Customer"
          sx={{
            minWidth: "20%",
          }}
        />
        <FormControl
          sx={{
            minWidth: "20%",
          }}
        >
          <InputLabel id="select-status-label">Select Status</InputLabel>
          <Select
            labelId="select-status-label"
            id="select-status"
            value={role}
            label="Select Status"
            onChange={handleRoleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <UsersTable />
    </Box>
  );
}

export default TeamManagement;
