import { Grid, Stack } from "@mui/material";
import React from "react";
import {
  ButtonMake,
  StyleMultiSelector,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import Multiselect from "multiselect-react-dropdown";


const AddEmployeeForm = ({
  gender,
  bloodGroup,
  Categoris,
  ProjectTools,
  tools,
  setTools,
  data,
  setData,
  handleSubmit,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="EmployeeId"
          label="Employee Id"
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
          label="Gender"
          name="Gender"
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
          {gender.map((option, index) => (
            <option key={index} value={option.gender}>
              {option.gender}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Blood Group"
          name="BloodGroup"
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
          {bloodGroup.map((option, index) => (
            <option key={index} value={option.group}>
              {option.group}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Present Address"
          name="PresentAddress"
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
          label="Permanent Address"
          name="PermanentAddress"
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
          label="Email"
          name="Email"
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
          label="Contact"
          name="Contact"
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
          label="NID/Pasport Number"
          name="NidNumber"
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
          label="Date Of Birth"
          name="BirthDate"
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
          label="Education"
          name="Education"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
          required
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          type="date"
          label="Join Date"
          name="JoinDate"
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
          label="Department"
          name="Department"
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
          label="Designation"
          name="Designation"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Multiselect
          options={ProjectTools} // Options to display in the dropdown
          selectedValues={tools} // Preselected value to persist in dropdown
          onSelect={(selectedList) => setTools(selectedList)} // Function will trigger on select event
          onRemove={(selectedList) => setTools(selectedList)} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Skill"
          style={StyleMultiSelector}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          label="About Me"
          name="AboutMe"
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
          multiline
          rows={8}
          variant="outlined"
          label="Career Summary"
          name="CareerSummary"
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
          rows={8}
          variant="outlined"
          label="Achivement"
          name="Achivement"
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
          type="file"
          focused
          variant="outlined"
          label="Profile"
          name="Profile"
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
          type="file"
          focused
          variant="outlined"
          label="File"
          name="File"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.files[0],
            })
          }
        />
      </Grid>

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

export default AddEmployeeForm;
