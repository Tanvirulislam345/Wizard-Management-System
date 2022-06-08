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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      EmployeeId: values?.EmployeeId,
      FullName: values?.FullName,
      Basicsalary: values?.Basicsalary,
      FoodAllowance: values?.FoodAllowance,
      MobileAllowance: values?.MobileAllowance,
      TravelAllowance: values?.TravelAllowance,
      TotalAbsent: values?.TotalAbsent,
      TotalLate: values?.TotalLate,
      TotalSalary: values?.TotalSalary,
      TotalDiduction: values?.TotalDiduction,
      Month,
      Year: year,
      TotalPayment:
        parseInt(values.TotalPayable) +
        (parseInt(data?.FestivalAllowance) || 0) +
        (parseInt(data?.PerformanceBonus) || 0),
      ...data,
    };

    console.log(newData);
    axios.post(`http://localhost:9000/salary`, newData).then((res) => {
      if (res.data) {
        handleClose();
        navigate("/salary");
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
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    name="FullName"
                    label="Full Name"
                    defaultValue={values?.FullName}
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
