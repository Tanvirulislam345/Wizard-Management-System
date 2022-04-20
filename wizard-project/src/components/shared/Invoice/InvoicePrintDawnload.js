import React from 'react';
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';

const InvoicePrintDawnload = () => {
    const handlePrint = () => {
        window.print();
    };
    return (
        <Box sx={{ textAlign: 'right', color: '#fff', my: 1 }}>
            <DownloadIcon
                fontSize="medium"
                sx={{
                    color: '#fff',
                    mr: 2,
                    "&:hover": {
                        cursor: "pointer",
                        color: "blue"
                    },
                }}

            />
            <SendIcon
                fontSize="medium"
                sx={{
                    color: '#fff',
                    mr: 2,
                    "&:hover": {
                        cursor: "pointer",
                        color: "blue"
                    },
                }}

            />
            <PrintIcon
                fontSize="medium"
                sx={{
                    color: '#fff',
                    "&:hover": {
                        cursor: "pointer",
                        color: "blue"
                    },
                }}
                onClick={handlePrint}
            />
        </Box>

    );
};

export default InvoicePrintDawnload;