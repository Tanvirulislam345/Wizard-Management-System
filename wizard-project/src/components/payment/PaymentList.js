import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, TableHead } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PaymentListMenu from "./PaymentListMenu";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
  {
    name: "tanvir",
    calories: 300,
    fat: 30,
  },
];

export default function PaymentList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/payment/view/${id}`);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "gray",
      color: theme.palette.common.white,
      border: "none",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "none",
      color: "gray",
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 500,
          background: "#262E41",
          color: "white",
        }}
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Client Name</StyledTableCell>
            <StyledTableCell align="center">Employee Name</StyledTableCell>
            <StyledTableCell align="center">Charges</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Tax</StyledTableCell>
            <StyledTableCell align="center">Discount</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Method</StyledTableCell>
            <StyledTableCell align="center"> Payment Status</StyledTableCell>
            <StyledTableCell align="center"> View</StyledTableCell>
            <StyledTableCell align="center">
              <MoreVertOutlinedIcon />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">
                <Chip label={row.name} color="error" />
              </StyledTableCell>
              <StyledTableCell align="center" onClick={() => handleView(index)}>
                <RemoveRedEyeRoundedIcon />
              </StyledTableCell>
              <StyledTableCell align="center">
                <PaymentListMenu id="id" deletePayment="deletePayment" />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{ border: "none", background: "gray", fontSize: "16px" }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={12}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
