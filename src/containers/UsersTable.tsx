import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import useAppSelector from "../hooks/useAppSelector";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f9f9f9",
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: 0,
  "&:nth-of-type(even)": {
    backgroundColor: "#f7f9fe",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTable = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
}));

const RoleTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#cddcfd",
  width: "auto",
  whiteSpace: "nowrap",
  display: "inline-block",
  padding: "0 4px",
  color: "#5985f5",
  textTransform: "capitalize",
}));

const StatusTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#d9fed6",
  width: "auto",
  whiteSpace: "nowrap",
  display: "inline-block",
  padding: "0 4px",
  color: "#74c4a0",
  textTransform: "capitalize",
}));

const formatRoleName = (roleName: string) => {
  return roleName
    .split("_")
    .map((word: string) => {
      word = word.toLowerCase();
      return word;
    })
    .join(" ");
};

const isApproved = (userRoles: IUserRole[]) => {
  return (
    userRoles &&
    userRoles.length &&
    userRoles[0].checkerMakerStatus === "APPROVED"
  );
};
/**
 * TODO: Not completed, stopped dev work as per requirement updates
 */
export default function UsersTable() {
  const users = useAppSelector((state) => state.users);
  return (
    <StyledTable>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">User ID</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Alloted Roles</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.userId}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography
                  sx={{
                    maxWidth: "150px",
                    textWrap: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {user.userId}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">
                {user.userRoles?.map((role) => (
                  <RoleTypography key={role.id}>
                    {formatRoleName(role.roleName)}
                  </RoleTypography>
                ))}
              </StyledTableCell>
              <StyledTableCell align="left">
                {user.userRoles?.map((role) =>
                  role.checkerMakerStatus ? (
                    <StatusTypography key={role.id}>
                      {formatRoleName(role.checkerMakerStatus)}
                    </StatusTypography>
                  ) : null
                )}
              </StyledTableCell>
              <StyledTableCell align="left">
                {isApproved(user.userRoles) ? null : (
                  <Button variant="primary">Send to Checker</Button>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTable>
  );
}
