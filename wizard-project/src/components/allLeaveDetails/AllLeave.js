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
import LeaveMenuList from "./LeaveMenuList";
import { useAuth } from "../../Context/ContextProvieder";

export default function AllLeave({ rows, handleChange }) {
  const { user } = useAuth();
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
            <StyledTableCell align="center">Emloyee Id</StyledTableCell>
            <StyledTableCell align="center">Leave Type</StyledTableCell>
            <StyledTableCell align="center">Leave From</StyledTableCell>
            <StyledTableCell align="center">Leave To</StyledTableCell>
            <StyledTableCell align="center">Reason</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            {user?.Role === "admin" && (
              <StyledTableCell align="center">Action</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.EmployeeId}</StyledTableCell>
              <StyledTableCell align="center">{row.LeaveType}</StyledTableCell>
              <StyledTableCell align="center">{row.LeaveFrom}</StyledTableCell>
              <StyledTableCell align="center">{row.LeaveTo}</StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Chip
                  label={row.Status}
                  sx={{
                    background:
                      (row.Status === "Pendding" && "#FFC300") ||
                      (row.Status === "Approved Paid" && "#55D32A") ||
                      (row.Status === "Approved NonPaid" && "#55D32A") ||
                      (row.Status === "Rejected" && "#FF5733"),
                    color: "white",
                    width: "150px",
                  }}
                />
              </StyledTableCell>
              {user?.Role === "admin" && (
                <StyledTableCell align="center">
                  <LeaveMenuList id={row.id} handleChange={handleChange} />
                </StyledTableCell>
              )}
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
