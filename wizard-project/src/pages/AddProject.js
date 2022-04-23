import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../components/projects/AddProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";


const AddProject = () => {
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

  const [data, setData] = useState(null);
  const [teamMember, setTeamMember] = useState([team[0]]);
  const [tools, setTools] = useState([ProjectTools[0]]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newData = {
      ...data,
      TeamMember: teamMember,
      ProjectTools: tools,
      ProjectStatus: "New Project",
    };

    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }

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
      <SubNav2 project="Add Project" />
      <AddProjectForm
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
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};;

export default AddProject;
