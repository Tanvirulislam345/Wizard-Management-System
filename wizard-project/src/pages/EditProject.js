import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProjectForm from "../components/projects/EditProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditProject = () => {
  const [values, setValues] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`https://wiztecbd.online/api/project/${projectId}`)
      .then((res) => setValues(res.data));
  }, [projectId]);

  return (
    <LayoutContiner>
      <SubNav2 project="Edit Project" />
      {values !== null && (
        <EditProjectForm values={values} projectId={projectId} />
      )}
    </LayoutContiner>
  );
};

export default EditProject;
