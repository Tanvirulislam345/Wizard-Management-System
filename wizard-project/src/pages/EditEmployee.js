import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditEmployeeForm from "../components/employee/EditEmployeeForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditEmployee = () => {
  const gender = [{ gender: "Male" }, { gender: "Female" }];

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

  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const { employeetId } = useParams();

  const [skills, setSkill] = useState([Allskill[0]]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employee/${employeetId}`)
      .then((res) => setValues(res.data[0]));
  }, [employeetId]);

  const handleSubmit = () => {
    if (data !== null) {
      axios
        .put(`http://localhost:9000/employee/${employeetId}`, data)
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
