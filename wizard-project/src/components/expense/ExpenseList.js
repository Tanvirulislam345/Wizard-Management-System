import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, TableHead } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ExpenseListMenu from "./ExpenseListMenu";


export default function ExpenseList({ rows, handleChange }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.primary.main,
      border: "none",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "none",
      color: "#A4A6B3",
      background: "#1A202E",
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
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "10px",
        backgroundColor: "#262E41",
        color: "white",
      }}
    >
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Expense ID</StyledTableCell>
            <StyledTableCell align="center">Item</StyledTableCell>
            <StyledTableCell align="center">Ordered By</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Ordered From</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Total Amount</StyledTableCell>
            <StyledTableCell align="center">Payment Method</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>

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
              <StyledTableCell align="center">{row.ExpenseId}</StyledTableCell>
              <StyledTableCell align="center">{row.Item}</StyledTableCell>
              <StyledTableCell align="center">{row.OrderBy}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
              <StyledTableCell align="center">{row.OrderFrom}</StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalAmount}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.PaymentMethod}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Chip
                  label={row.PaymentStatus}
                  sx={{
                    background:
                      (row.PaymentStatus === "Clear" && "#8CC341") ||
                      (row.PaymentStatus === "Due" && "#E25822"),
                    width: "100px",
                  }}
                />
              </StyledTableCell>

              <StyledTableCell align="center">
                <ExpenseListMenu id={row.id} handleChange={handleChange} />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{
                border: "none",
                background: "#262E41",
                color: "#A4A6B3",
                fontSize: "16px",
              }}
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
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
