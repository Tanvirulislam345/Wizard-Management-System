import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmployeeIdForm from "./EmployeeIdForm";
import PointDetailsForm from "./PointDetailsForm";

const AddPointForm = ({ employee }) => {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const noLeave = projectDetails?.filter((leave) => leave.Status === "absent");
  const late = projectDetails?.filter((leave) => leave.Status === "late");
  const NoLeave = noLeave?.length === 0 ? 10 : 0;
  const Late = late?.length === 0 ? 50 : 0;

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
  const month = today.getMonth();
  const Month = monthNames[month];
  const Year = today.getFullYear();

  const handleSubmit = () => {
    const newData = {
      ...data,
      NoLeave,
      Late,
      EmployeeId: id,
      TotalPoint:
        parseInt(data.CompleteProject) +
        parseInt(data.BeforeTime) +
        parseInt(data.ProjectReference) +
        parseInt(data.Extrabonus) +
        NoLeave +
        Late,
      Month,
      Year,
    };

    console.log(newData);

    axios
      .post(`http://localhost:9000/points`, newData)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    const data = { EmployeeId: id, Month };
    axios
      .post(`http://localhost:9000/allattendence/search`, data)
      .then((res) => setProjectDetails(res.data));
  }, [id]);

  return (
    <Grid container spacing={3}>
      <EmployeeIdForm employee={employee} setId={setId} />
      {projectDetails?.length > 0 && (
        <PointDetailsForm
          data={data}
          setData={setData}
          NoLeave={NoLeave}
          Late={Late}
          handleSubmit={handleSubmit}
        />
      )}
    </Grid>
  );
};

export default AddPointForm;
