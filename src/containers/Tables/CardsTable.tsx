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

interface CardsTableProps {
  handleViewClick: (card: ICard) => void;
  handleCreateAccountClick?: () => void;
}

const StatusTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#d9fed6",
  width: "auto",
  whiteSpace: "nowrap",
  display: "inline-block",
  padding: "0 4px",
  color: "#74c4a0",
  textTransform: "capitalize",
}));

export default function CardsTable(props: CardsTableProps) {
  const searchRecords = useAppSelector((state) => state.searchRecords);
  return (
    <Box sx={{}}>
      <StyledTable>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Program Name</StyledTableCell>
              <StyledTableCell align="left">Customer ID</StyledTableCell>
              <StyledTableCell align="left">Card No</StyledTableCell>
              <StyledTableCell align="left">Expiry Date</StyledTableCell>
              <StyledTableCell align="left">Activation Date</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Details</StyledTableCell>
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
                  {record.account?.programName}
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
                    {record.account?.customerId}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <CardIDTypography>
                    {record?.card?.cardNumber || "-"}
                  </CardIDTypography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {record.card?.expiryDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {record.card?.createdAt
                    ? new Date(record.card.createdAt).toLocaleDateString()
                    : null}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <StatusTypography>
                    {record?.customer?.makerCheckerStatus}
                  </StatusTypography>
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
