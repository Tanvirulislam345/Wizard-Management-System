import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const [clientId, setClientId] = useState(null);
  const [inputList, setInputList] = useState([
    {
      id: "",
      status: "",
      phaseStart: "",
      phaseEnd: "",
      workPersent: "",
    },
  ]);

  const [data, setData] = useState(null);
  const [teamMember, setTeamMember] = useState([team[0]]);
  const [tools, setTools] = useState([ProjectTools[0]]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const newData = {
      ...data,
      ProjectId: `WizP22${Math.random().toString(36).slice(7)}`,
      TeamMember: JSON.stringify(teamMember),
      ProjectTools: JSON.stringify(tools),
      Phases: JSON.stringify(inputList),
      ProjectStatus: "New Project",
    };
    console.log(newData);

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

  useEffect(() => {
    axios
      .get("http://localhost:9000/client")
      .then((res) => setClientId(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Project" />
      {clientId !== null && (
        <AddProjectForm
          Categoris={Categoris}
          ClientId={clientId}
          ProjectTools={ProjectTools}
          setTools={setTools}
          tools={tools}
          team={team}
          teamMember={teamMember}
          setTeamMember={setTeamMember}
          data={data}
          setData={setData}
          inputList={inputList}
          setInputList={setInputList}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default AddProject;
