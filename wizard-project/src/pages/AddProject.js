import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../components/projects/AddProjectForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddProject = () => {
  const Categoris = [
    { name: "Training" },
    { name: "S/W Development" },
    { name: "Web Development" },
    { name: "App Development" },
    { name: "HRM Management" },
    { name: "Digital marketing" },
    { name: "Business Development" },
  ];

  const ProjectTools = [
    { name: "HTML, CSS, Bootstrap" },
    { name: "Other CSS Framwork" },
    { name: "React js" },
    { name: "Next js" },
    { name: "Node js" },
    { name: "UI/Ux" },
    { name: "MS Office" },
    { name: "Laravel" },
    { name: "Php" },
    { name: "Mysql" },
    { name: "Mongodb" },
    { name: "Flutter" },
    { name: "Android" },
    { name: "React Native" },
  ];

  const team = [
    { name: "Tanvir", id: 1 },
    { name: "Mortaza", id: 2 },
    { name: "Anik", id: 3 },
    { name: "Sohan", id: 4 },
    { name: "Fahim", id: 5 },
    { name: "Mehedi 1", id: 6 },
    { name: "Mahedi 2", id: 7 },
    { name: "Jubayer", id: 8 },
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
  const [teamLeader, setTeamLeader] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const discount = (data.Budget * data.Discount) / 100;
    const tex = ((data.Budget - discount) * data.Tax) / 100;
    const TotalBudget = data.Budget - discount + tex;
    const TotalPayable = TotalBudget - data.Payment;

    const newData = {
      ProjectId: `WizP22${Math.random().toString(36).slice(7)}`,
      ProjectTitle: data.ProjectTitle,
      ProjectCategori: data.ProjectCategori,
      ClientId: data.ClientId,
      TeamLeader: data.TeamLeader,
      TeamMember: JSON.stringify(teamMember),
      ProjectTools: JSON.stringify(tools),
      ProjectStart: data.ProjectStart,
      ProjectEnd: data.ProjectEnd,
      Phases: JSON.stringify(inputList),
      Description: data.Description,
      File: data.File,
      Budget: data.Budget,
      Tax: data.Tax,
      Discount: data.Discount,
      TotalBudget,
      ProjectStatus: "New Project",
    };

    const payment = {
      BillNo: `WizB22${Math.random().toString(36).slice(7)}`,
      ClientId: data.ClientId,
      ProjectId: newData.ProjectId,
      ProjectTitle: data.ProjectTitle,
      Budget: data.Budget,
      Tax: data.Tax,
      Discount: data.Discount,
      TotalBudget,
      Payment: data.Payment,
      TotalPayment: data.Payment,
      TotalPayable,
      Date: data.ProjectStart,
      PaymentMethod: data.PaymentMethod,
      PaymentStatus: data.PaymentStatus,
    };

    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }

    // console.log(newData);
    if (data !== null && data.File !== undefined) {
      axios
        .post("https://wiztecbd.online/api/addproject", formData)
        .then((res) => {
          if (res.status === 200) {
            axios
              .post(`https://wiztecbd.online/api/addpayment`, payment)
              .then((res) => {
                if (res.status === 200) {
                  navigate("/project");
                }
              });
          }
        });
    } else {
      alert("Please Enter all data");
    }
  };

  useEffect(() => {
    axios
      .get("https://wiztecbd.online/api/client")
      .then((res) => setClientId(res.data));
    axios
      .get("https://wiztecbd.online/api/employee")
      .then((res) => setTeamLeader(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Project" />
      {clientId !== null && teamLeader !== null && (
        <AddProjectForm
          ClientId={clientId}
          Categoris={Categoris}
          ProjectTools={ProjectTools}
          setTools={setTools}
          tools={tools}
          team={team}
          teamMember={teamMember}
          teamLeader={teamLeader}
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
