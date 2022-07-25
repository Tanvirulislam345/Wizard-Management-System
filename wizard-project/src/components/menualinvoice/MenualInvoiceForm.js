import { Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import SubNav2 from "../subNav/SubNav2";

const MenualInvoiceForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [inputList, setInputList] = useState([
    {
      ItemName: "",
      Quantity: 0,
      Price: 0,
      Subtotal: 0,
    },
  ]);

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
  const month = today.getMonth();
  const date = today.getDate() + " " + monthNames[month] + " " + year;

  const handleSubmit = () => {
    const total = inputList.map((value) => parseInt(value.Subtotal));
    const payment = total.reduce((pre, post) => pre + post, 0);
    const discount = (payment * parseInt(data.Discount)) / 100;
    const discountWithPayment = payment - discount;
    const tax = (discountWithPayment * parseInt(data.Tax)) / 100;
    const Payment = discountWithPayment + tax;

    const newData = {
      ...data,
      Date: date,
      Month: monthNames[month],
      Year: year,
      Payment,
      BillNO: `WizB22${Math.random().toString(36).slice(7)}`,
      Value: JSON.stringify(inputList),
    };

    axios
      .post(
        `https://wizard-software-technology.rpi.gov.bd/menualinvoice`,
        newData
      )
      .then((res) => {
        if (res.status == 200) {
          navigate("/makeinvoice");
        }
      });
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        ItemName: "",
        Quantity: 0,
        Price: 0,
        Subtotal: 0,
      },
    ]);
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Create Menual Invoice" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {inputList.map((x, i) => {
            return (
              <Grid container spacing={3} key={i}>
                <Grid item xs={6} md={2}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    label="Item Name"
                    name="ItemName"
                    value={x.ItemName}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Grid>
                <Grid item xs={6} md={1}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Quantity/Hr"
                    name="Quantity"
                    value={x.Quantity}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Grid>
                <Grid item xs={6} md={1}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Price"
                    name="Price"
                    value={x.Price}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Grid>
                <Grid item xs={6} md={1}>
                  <TextFieldMake
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Subtotal"
                    name="Subtotal"
                    value={x.Subtotal}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  sx={{
                    height: "100%",
                    my: "auto",
                  }}
                >
                  <Stack spacing={3} direction="row">
                    {inputList.length !== 1 && (
                      <ButtonMake
                        size="small"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </ButtonMake>
                    )}

                    {inputList.length - 1 === i && (
                      <ButtonMake size="small" onClick={handleAddClick}>
                        Add
                      </ButtonMake>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Payment Method"
            name="PaymentMethod"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
            required
            select
            SelectProps={{ native: true }}
          >
            <option>Select PaymentMethod</option>
            <option value="Cash">Cash</option>
            <option value="City Bank">City Bank</option>
            <option value="Bank Asia">Bank Asia</option>
          </TextFieldMake>
        </Grid>
        <Grid item xs={6} md={3}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="number"
            label="Tax"
            name="Tax"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="number"
            label="Discount"
            name="Discount"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            label="Invoice Note"
            name="InvoiceNote"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
              Submit
            </ButtonMake>
            <ButtonMake size="medium" type="reset">
              Cancel
            </ButtonMake>
          </Stack>
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default MenualInvoiceForm;
