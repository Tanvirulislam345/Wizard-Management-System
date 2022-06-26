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
import LeadMenuList from "./LeadMenuList";

export default function LeadList({ rows, handleChange }) {
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
        mt: 3,
      }}
    >
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Project Type</StyledTableCell>
            <StyledTableCell align="center">Birthday</StyledTableCell>
            <StyledTableCell align="center">Facebook Link</StyledTableCell>
            <StyledTableCell align="center">Reference</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.FullName}</StyledTableCell>
              <StyledTableCell align="center">{row.Phone}</StyledTableCell>
              <StyledTableCell align="center">{row.Email}</StyledTableCell>
              <StyledTableCell align="center">
                {row.ProjectType}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Birthday}</StyledTableCell>
              <StyledTableCell align="center">
                {row.FacebookLink}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Reference}</StyledTableCell>
              <StyledTableCell align="center">
                <Chip
                  label={row.Status}
                  title={row.Status}
                  sx={{
                    color: "white",
                    width: "100px",
                    background: "#55D32A",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                <LeadMenuList id={row.id} handleChange={handleChange} />
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
