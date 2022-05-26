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
import LeaveTypeMenuList from "./LeaveTypeMenuList";

export default function LeaveTypeList({ rows, handleChange }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#262E41",
      color: theme.palette.primary.main,
      border: "none",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "none",
      color: "#A4A6B3",
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
          background: "#1A202E",
          color: "white",
        }}
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Leave Name</StyledTableCell>
            <StyledTableCell align="center">Leave Type</StyledTableCell>
            <StyledTableCell align="center">Leave Time</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Note</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.LeaveName}</StyledTableCell>
              <StyledTableCell align="center">{row.LeaveType}</StyledTableCell>
              <StyledTableCell align="center">{row.LeaveTime}</StyledTableCell>
              <StyledTableCell align="center">
                <Chip
                  label={row.Status}
                  sx={{
                    background:
                      (row.Status === "Active" && "#55D32A") ||
                      (row.Status === "InActive" && "#FF5733"),
                    color: "white",
                    width: "90px",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="center">
                <LeaveTypeMenuList id={row.id} handleChange={handleChange} />
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
