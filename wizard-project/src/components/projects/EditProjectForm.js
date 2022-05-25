import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  ButtonMake,
  StyleMultiSelector,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import Multiselect from "multiselect-react-dropdown";
import DynamicAddInput from "./DynamicAddInput";

const states = [
  {
    value: "cash",
    label: "Cash",
  },
  {
    value: "card",
    label: "Card",
  },
];

const EditProjectForm = ({
  Categoris,
  ClientId,
  ProjectTools,
  tools,
  setTools,
  team,
  teamMember,
  setTeamMember,
  data,
  setData,
  values,
  setPhases,
  handleSubmit,
}) => {
  const isdata = JSON.parse(values.TeamMember);
  const isPhases = JSON.parse(values.Phases);
  const [inputList, setInputList] = useState(isPhases);

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
          required
          select
          SelectProps={{ native: true }}
        >
          {ClientId.map((client, index) => (
            <option key={index} value={client.ClientId}>
              {client.ClientId}
            </option>
          ))}
        </TextFieldMake>
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
        <Multiselect
          options={ProjectTools} // Options to display in the dropdown
          selectedValues={tools} // Preselected value to persist in dropdown
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
          required
          select
          SelectProps={{ native: true }}
        >
          {team.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextFieldMake>
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
            Send
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
