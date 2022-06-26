import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  ButtonMake,
  StyleMultiSelector,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import Multiselect from "multiselect-react-dropdown";
import DynamicAddInput from "./DynamicAddInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Categoris = [
  { name: "Software Development" },
  { name: "Web Development" },
  { name: "App Development" },
];
const ClientId = [
  { ClientId: 1 },
  { ClientId: 3 },
  { ClientId: 4 },
  { ClientId: 5 },
];

const ProjectTools = [
  { name: "Node js" },
  { name: "React js" },
  { name: "Next js" },
  { name: "Laravel" },
  { name: "Php" },
  { name: "Mysql" },
  { name: "Mongodb" },
];
const team = [
  { name: "Himel", id: 1 },
  { name: "Mahedi", id: 3 },
  { name: "Tanim", id: 4 },
  { name: "Tanvir", id: 5 },
];

const EditProjectForm = ({ values, projectId }) => {
  const navigation = useNavigate();
  const [data, setData] = useState(null);
  const [teamMember, setTeamMember] = useState(null);
  const [tools, setTools] = useState(null);
  const istools = JSON.parse(values.ProjectTools);
  const isdata = JSON.parse(values.TeamMember);
  const isPhases = JSON.parse(values.Phases);
  const [inputList, setInputList] = useState(isPhases);

  const handleSubmit = () => {
    const newData = {
      ...data,
      TeamMember:
        teamMember === null
          ? JSON.stringify(isdata)
          : JSON.stringify(teamMember),
      ProjectTools:
        tools === null ? JSON.stringify(istools) : JSON.stringify(tools),
      Phases: JSON.stringify(inputList),
    };

    axios
      .put(`http://localhost:9000/updateproject/${projectId}`, newData)
      .then((res) => {
        if (res.status === 200) {
          navigation("/project");
        }
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="ProjectId"
          label="Project ID"
          defaultValue={values.ProjectId}
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
          label="Project Title"
          name="ProjectTitle"
          defaultValue={values.ProjectTitle}
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
          label="Project Categori"
          name="ProjectCategori"
          defaultValue={values.ProjectCategori}
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
          {Categoris.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="ClientId"
          name="ClientId"
          defaultValue={values.ClientId}
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
          type="number"
          label="Budget"
          name="Budget"
          defaultValue={values.Budget}
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
          type="number"
          label="Tax"
          name="Tax"
          defaultValue={values.Tax}
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
          type="number"
          label="Discount"
          name="Discount"
          defaultValue={values.Discount}
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
          type="number"
          label="Total Budget"
          name="TotalBudget"
          defaultValue={values.TotalBudget}
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Multiselect
          options={ProjectTools} // Options to display in the dropdown
          selectedValues={istools} // Preselected value to persist in dropdown
          onSelect={(selectedList) => setTools(selectedList)} // Function will trigger on select event
          onRemove={(selectedList) => setTools(selectedList)} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Project Tools"
          style={StyleMultiSelector}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Team Leader"
          name="TeamLeader"
          defaultValue={values.TeamLeader}
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Multiselect
          options={team}
          selectedValues={isdata}
          onSelect={(selectedList) => setTeamMember(selectedList)}
          onRemove={(selectedList) => setTeamMember(selectedList)}
          displayValue="name"
          placeholder="Team Member"
          style={StyleMultiSelector}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          type="date"
          label="Project Start Date"
          name="ProjectStart"
          defaultValue={values.ProjectStart}
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
          focused
          variant="outlined"
          type="date"
          label="Project End Date"
          name="ProjectEnd"
          defaultValue={values.ProjectEnd}
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
          multiline
          rows={5}
          variant="outlined"
          label="Description"
          name="Description"
          defaultValue={values.Description}
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>
      <DynamicAddInput inputList={inputList} setInputList={setInputList} />

      <Grid item xs={12}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
            Update
          </ButtonMake>
          <ButtonMake size="medium" type="reset">
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EditProjectForm;
