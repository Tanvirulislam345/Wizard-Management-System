import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProjectForm from "../components/projects/EditProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditProject = () => {
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

  const navigate = useNavigate();
  const [values, setValues] = useState(null);

  const [teamMember, setTeamMember] = useState([]);
  const [tools, setTools] = useState([]);
  const [data, setData] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${projectId}`)
      .then((res) => setValues(res.data[0]));
  }, [projectId]);

  const handleSubmit = () => {
    const newData = {
      ...data,
      // TeamMember: teamMember,
      // ProjectTools: tools,
    };

    console.log(newData);
    axios
      .put(`http://localhost:9000/updateproject/${projectId}`, newData)
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
          Categoris={Categoris}
          ClientId={ClientId}
          ProjectTools={ProjectTools}
          setTools={setTools}
          tools={tools}
          team={team}
          teamMember={teamMember}
          setTeamMember={setTeamMember}
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
