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
import { TableHead } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { useNavigate } from "react-router-dom";

export default function SalaryTable({ rows }) {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleView = (id) => {
    console.log(id);
    navigate(`/salary/invoice/${id}`);
  };

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
        my: 3,
      }}
    >
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Month</StyledTableCell>
            <StyledTableCell align="center">TotalAbsent</StyledTableCell>
            <StyledTableCell align="center">TotalLate</StyledTableCell>
            <StyledTableCell align="center">TotalSalary</StyledTableCell>
            <StyledTableCell align="center">PerformanceBonus</StyledTableCell>
            <StyledTableCell align="center">Total Diduction</StyledTableCell>
            <StyledTableCell align="center">Total Payment</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.FullName}</StyledTableCell>
              <StyledTableCell align="center">{row.Month}</StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalAbsent}
              </StyledTableCell>
              <StyledTableCell align="center">{row.TotalLate}</StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalSalary}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.PerformanceBonus}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalDiduction}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalPayment}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                onClick={() => handleView(row.id)}
              >
                <RemoveRedEyeRoundedIcon />
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
