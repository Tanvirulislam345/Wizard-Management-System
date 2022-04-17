import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EditProjectForm from "../components/projects/EditProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditProject = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [data, setData] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/allproject/${projectId}`)
      .then((res) => setValues(res.data[0]));
  }, [projectId]);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:9000/updateproject/${projectId}`, data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/project");
        }
      });
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Edit Project" />
      {values !== null && (
        <EditProjectForm
          data={data}
          setData={setData}
          values={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default EditProject;
