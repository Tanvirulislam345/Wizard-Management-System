import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployeeForm from "../components/employee/AddEmployeeForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddEmployee = () => {
  const gender = [{ gender: "Male" }, { gender: "Female" }];
  const Designation = [
    { position: "Permanent" },
    { position: "Provition Period" },
    { position: "Intern" },
  ];

  const Allskill = [
    { name: "Node js" },
    { name: "React js" },
    { name: "Next js" },
    { name: "Laravel" },
    { name: "Php" },
    { name: "Mysql" },
    { name: "Mongodb" },
  ];

  const bloodGroup = [
    { group: "A+" },
    { group: "A-" },
    { group: "B+" },
    { group: "B-" },
    { group: "AB+" },
    { group: "AB-" },
    { group: "O+" },
    { group: "O-" },
  ];

  const Categoris = [
    { name: "Software Development" },
    { name: "Web Development" },
    { name: "App Development" },
  ];

  const [data, setData] = useState(null);
  const [skills, setSkill] = useState([Allskill[0]]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const Password = Math.random().toString(30).slice(-8);
    const newData = {
      ...data,
      EmployeeId: `WizEm22${Math.random().toString(36).slice(7)}`,
      Password: Password,
      Role: "employee",
      Skills: JSON.stringify(skills),
    };

    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }

    if (data !== null) {
      // console.log(newData);
      axios
        .post(
          "https://wizard-software-technology.rpi.gov.bd/addemployee",
          formData
        )
        .then((res) => {
          if (res.status === 200) {
            navigate("/employee");
          }
        });
    } else {
      alert("Please Enter all data");
    }
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Add Employee" />
      <AddEmployeeForm
        gender={gender}
        Designation={Designation}
        bloodGroup={bloodGroup}
        Categoris={Categoris}
        ProjectTools={Allskill}
        setTools={setSkill}
        tools={skills}
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddEmployee;
