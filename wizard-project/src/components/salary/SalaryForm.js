import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { TextFieldMake } from "../../styles/MetarialStyles";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#262E41",
  p: 2,
  borderRadius: "10px",
};

export default function SalaryForm({ values }) {
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = today.getFullYear();
  const month = today.getMonth() - 1;
  const Month = monthNames[month];

  const handleSubmit = () => {
    const newData = {
      ...data,
      Month,
      Year: year,
      TotalPayable:
        parseInt(data.TotalPayable) +
        (parseInt(data.FestivalAllowance) || 0) +
        (parseInt(data.PerformanceBonus) || 0),
    };

    axios.post(`http://localhost:9000/salary`, newData).then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    });
  };

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<AddIcon />}></Button>

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
            {values !== null && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="EmployeeId"
                    label="Employee Id"
                    defaultValue={values?.EmployeeId}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="FullName"
                    label="Full Name"
                    defaultValue={values?.FullName}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="Basicsalary"
                    label="Basic salary"
                    type="number"
                    defaultValue={values?.Basicsalary}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="FoodAllowance"
                    label="Food Allowance"
                    type="number"
                    defaultValue={values?.FoodAllowance}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="MobileAllowance"
                    label="Mobile Allowance"
                    type="number"
                    defaultValue={values?.MobileAllowance}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TravelAllowance"
                    label="Travel Allowance"
                    type="number"
                    defaultValue={values?.TravelAllowance}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TotalAbsent"
                    label="Total Absent"
                    type="number"
                    defaultValue={values?.TotalAbsent}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TotalLate"
                    label="Total Late"
                    type="number"
                    defaultValue={values?.TotalLate}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TotalSalary"
                    label="Total Salary"
                    type="number"
                    defaultValue={values?.TotalSalary}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TotalDiduction"
                    label="Total Diduction"
                    type="number"
                    defaultValue={values?.TotalDiduction}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="TotalPayable"
                    label="Total Payable"
                    type="number"
                    defaultValue={values?.TotalPayable}
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="PerformanceBonus"
                    label="Performance Bonus"
                    type="number"
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="FestivalAllowance"
                    label="Festival Allowance"
                    type="number"
                    onChange={(event) =>
                      setData({
                        ...data,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" onClick={handleSubmit}>
                    submit
                  </Button>
                </Grid>
              </Grid>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
