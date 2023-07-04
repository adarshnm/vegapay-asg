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
import useAppSelector from "../../hooks/useAppSelector";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  maxWidth: 200,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f9f9f9",
    color: theme.palette.primary.main,
    fontSize: 18,
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

const CardIDTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#cddcfd",
  width: "auto",
  whiteSpace: "nowrap",
  display: "inline-block",
  padding: "0 4px",
  color: "#5985f5",
  textTransform: "capitalize",
}));

interface CustomerTableProps {
  handleViewClick: (card: ICard) => void;
  handleCreateAccountClick?: () => void;
}


export default function CustomersTable(props: CustomerTableProps) {
  const searchRecords = useAppSelector((state) => state.searchRecords);
  return (
    <Box sx={{}}>
      <StyledTable>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Customer Name</StyledTableCell>
              <StyledTableCell align="left">Card No</StyledTableCell>
              <StyledTableCell align="left">Email ID</StyledTableCell>
              <StyledTableCell align="left">Mobile No.</StyledTableCell>
              <StyledTableCell align="left">Card Network</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchRecords?.records?.map((record, index) => (
              <StyledTableRow key={`${record.customer.customerId}-${index}`}>
                <StyledTableCell component="th" scope="row">
                  {`${record.customer.firstName || ""} ${
                    record.customer.lastName || ""
                  }`}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <CardIDTypography>
                    {record?.card?.cardNumber || "-"}
                  </CardIDTypography>
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
                    {record?.customer.emailId || "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {record.customer?.mobileNumber}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {record.card?.cardNetwork === "RUPAY" ? (
                    <img src="/rupay.png" width={40} />
                  ) : (
                    record.card?.cardNetwork
                  )}
                </StyledTableCell>

                <StyledTableCell align="left">
                  {!record.account ? (
                    <Button
                      variant="primary"
                      onClick={props.handleCreateAccountClick}
                    >
                      Create Account
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => props.handleViewClick(record.card)}
                    >
                      View
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTable>
    </Box>
  );
}
