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
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PaymentListMenu from "./PaymentListMenu";
import { useNavigate } from "react-router-dom";

export default function PaymentList({ rows, handleChange }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/payment/invoice/${id}`);
  };

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
            <StyledTableCell align="center">Bill No</StyledTableCell>
            <StyledTableCell align="center">Client Id</StyledTableCell>
            <StyledTableCell align="center">Project Id</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Budget</StyledTableCell>
            <StyledTableCell align="center">Tax</StyledTableCell>
            <StyledTableCell align="center">Discount</StyledTableCell>
            <StyledTableCell align="center">Last Total Payment</StyledTableCell>

            <StyledTableCell align="center">New Payment</StyledTableCell>
            <StyledTableCell align="center">Total Payable</StyledTableCell>
            <StyledTableCell align="center">Total Payment</StyledTableCell>
            <StyledTableCell align="center">Total Due</StyledTableCell>
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
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell align="center">{row.BillNo}</StyledTableCell>
              <StyledTableCell align="center">{row.ClientId}</StyledTableCell>
              <StyledTableCell align="center">{row.ProjectId}</StyledTableCell>
              <StyledTableCell align="center">{row.Date}</StyledTableCell>
              <StyledTableCell align="center">{row.Budget}</StyledTableCell>
              <StyledTableCell align="center">{row.Tax}</StyledTableCell>
              <StyledTableCell align="center">{row.Discount}</StyledTableCell>
              <StyledTableCell align="center">
                {row.LastPayment}
              </StyledTableCell>

              <StyledTableCell align="center">{row.NewPayment}</StyledTableCell>

              <StyledTableCell align="center">
                {row.TotalPayable}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.TotalPayment}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Due}</StyledTableCell>
              <StyledTableCell align="center">
                {row.PaymentMethod}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Chip
                  label={row.PaymentStatus}
                  sx={{
                    background:
                      (row.PaymentStatus === "Due" && "#E25822") ||
                      (row.PaymentStatus === "Clear" && "#8CC341"),
                    width: "100px",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell
                align="center"
                onClick={() => handleView(row.id)}
              >
                <RemoveRedEyeRoundedIcon />
              </StyledTableCell>
              <StyledTableCell align="center">
                <PaymentListMenu id={row.id} handleChange={handleChange} />
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
              colSpan={16}
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
