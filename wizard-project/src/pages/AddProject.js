import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../components/projects/AddProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddProject = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {

    // const file = data.File;
    // delete data.File;

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("ProjectStatus", "New Project");
    // formData.append("File",file);

    if (data !== null && data.File !== undefined) {

      axios.post("http://localhost:9000/addproject", formData).then((res) => {
        if (res.status === 200) {
          navigate("/project");
        }
      });
    } else {
      alert("Please Enter all data");
    }
  };

  return (
    <LayoutContiner>
      {/* Subnav  */}
      <SubNav2 project="Add Project" />
      <AddProjectForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};;

export default AddProject;
