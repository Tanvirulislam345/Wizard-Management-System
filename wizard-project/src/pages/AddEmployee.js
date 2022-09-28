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
    { name: "Training" },
    { name: "S/W Development" },
    { name: "Web Development" },
    { name: "App Development" },
    { name: "HRM Management" },
    { name: "Digital marketing" },
    { name: "Business Development" },
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
        .post("https://wiztecbd.online/api/addemployee", formData)
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
