import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";
import { ButtonMake } from "../../styles/MetarialStyles";
import { Button, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "450px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function Modals({
  title,
  open,
  setOpen,
  handleSubmit,
  children,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddBoxIcon color="secondary" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <HeadingFormatTitle style={{ color: "black", marginBottom: "0px" }}>
              Add {title}
            </HeadingFormatTitle>

            <Grid container spacing={3}>
              {children}
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "bottom",
                }}
              >
                <Button
                  style={{ background: "#262E41" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
