import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';



const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Castle Black attack', 60, 40),
    createRow('Dragon defence', 20, 30),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;



const InvoiceTable = () => {
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#8BC43F' }} align="left" colSpan={1}>
                                DISCRIPTION
                            </TableCell>
                            <TableCell sx={{ color: '#8BC43F' }} align="right">HOURS</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell sx={{ color: '#8BC43F' }} align="right">AMOUNT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell sx={{ color: '#8BC43F' }} align="right">Unit</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{ccyFormat(row.price)} USD</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell sx={{ color: '#8BC43F' }} colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)} USD</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: '#8BC43F' }}>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)} USD</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell sx={{ color: '#8BC43F', fontWeight: 'bold' }} align="right">{ccyFormat(invoiceTotal)} USD</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ backgroundColor: '#8BC43F', Py: 3, pl: 1, color: '#fff' }}>
                            ACCOUNT DATA
                        </Box>
                        <Typography variant='body' sx={{ color: '##=1F2229', fontSize: '12px', fontWeight: 'bold' }}>Transfer the amount to the business account below. Please include invoice number on your check.</Typography>
                        <Typography variant='h6' sx={{ color: '#1F2229', fontSize: '12px' }}>BANK: PENTOS</Typography>
                        <Typography variant='h6' sx={{ color: '#1F2229', fontSize: '12px' }}>IBAN:: ADSA-2343-2332-23234</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
};

export default InvoiceTable;