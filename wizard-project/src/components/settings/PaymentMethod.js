import React, { useState } from "react";
import GlobalTable from "./GlobalTable";
import SubNav3 from "../subNav/SubNav3";
import { TextFieldMake } from "../../styles/MetarialStyles";
import { Grid } from "@mui/material";
import EditModals from "./EditModals";

const PaymentMethod = () => {
  return (
    <>
      <NavBar />
      <Table />
    </>
  );
};

export default PaymentMethod;

function Table() {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(null);

  const handleFunction = (id, action) => {
    console.log(id, action);
    if (action === "edit") {
      setToggle(id);
    }
  };

  const handleSubmit = () => {
    console.log(data);
    setToggle(null);
  };

  return (
    <>
      <GlobalTable
        rows={[{ name: "cash" }, { name: "Card" }]}
        handleFunction={handleFunction}
      />
      {toggle !== null && (
        <EditModals
          title="Payment Method"
          setToggle={setToggle}
          handleSubmit={handleSubmit}
        >
          <Grid item xs={12}>
            <TextFieldMake
              fullWidth
              variant="outlined"
              label="Payment Method Name"
              name="paymentMethodName"
              onChange={(event) =>
                setData({
                  ...data,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>
        </EditModals>
      )}
    </>
  );
}

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState();

  const handleSubmit = () => {
    console.log(data);
    setOpen(false);
  };
  return (
    <>
      <SubNav3
        title="Payment Method"
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
      >
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Payment Method Name"
            name="paymentMethodName"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
      </SubNav3>
    </>
  );
}
