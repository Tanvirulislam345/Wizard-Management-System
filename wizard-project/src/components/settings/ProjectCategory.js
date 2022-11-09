import React, { useState } from "react";
import GlobalTable from "./GlobalTable";
import SubNav3 from "../subNav/SubNav3";
import { TextFieldMake } from "../../styles/MetarialStyles";
import { Grid } from "@mui/material";
import EditModals from "./EditModals";

const ProjectCategory = () => {
  return (
    <>
      <NavBar />
      <Table />
    </>
  );
};

export default ProjectCategory;

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
        rows={[{ name: "tanvir" }, { name: "rakib" }]}
        handleFunction={handleFunction}
      />
      {toggle !== null && (
        <EditModals
          title="Category"
          setToggle={setToggle}
          handleSubmit={handleSubmit}
        >
          <Grid item xs={12}>
            <TextFieldMake
              fullWidth
              variant="outlined"
              label="Category Name"
              name="categoryName"
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
        title="Category"
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
      >
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Category Name"
            name="categoryName"
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
