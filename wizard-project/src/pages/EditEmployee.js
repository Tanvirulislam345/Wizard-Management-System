import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditEmployeeForm from "../components/employee/EditEmployeeForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditEmployee = () => {
  const gender = [{ gender: "Male" }, { gender: "Female" }];

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

  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const { employeeId } = useParams();

  const [skills, setSkill] = useState([Allskill[0]]);

  useEffect(() => {
    axios
      .get(`https://wiztecbd.online/api/employee/${employeeId}`)
      .then((res) => setValues(res.data[0]));
  }, [employeeId]);

  const handleSubmit = () => {
    if (data !== null) {
      axios
        .put(`https://wiztecbd.online/api/employee/${employeeId}`, data)
        .then((res) => {
          if (res.status === 200) {
            navigate("/employee");
          }
        });
    } else {
      alert("Does not change anything");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Edit Project" />
      {values !== null && (
        <EditEmployeeForm
          gender={gender}
          bloodGroup={bloodGroup}
          Categoris={Categoris}
          ProjectTools={Allskill}
          setTools={setSkill}
          tools={skills}
          data={data}
          setData={setData}
          values={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default EditEmployee;
