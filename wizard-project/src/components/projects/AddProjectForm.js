import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  ButtonMake,
  StyleMultiSelector,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import Multiselect from "multiselect-react-dropdown";
import DynamicAddInput from "./DynamicAddInput";

const AddProjectForm = ({
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
  handleSubmit,
  inputList,
  setInputList,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Project Title"
          name="ProjectTitle"
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
          options={team} // Options to display in the dropdown
          selectedValues={teamMember} // Preselected value to persist in dropdown
          onSelect={(selectedList) => setTeamMember(selectedList)} // Function will trigger on select event
          onRemove={(selectedList) => setTeamMember(selectedList)} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
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
          type="file"
          focused
          variant="outlined"
          label="File"
          name="File"
          multiple
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.files[0],
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

export default AddProjectForm;
