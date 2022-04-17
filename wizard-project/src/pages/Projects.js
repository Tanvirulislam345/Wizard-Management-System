import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoriProject from "../components/projects/CategoriProject";
import ListProject from "../components/projects/ListProject";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
// import ProjectList from '../../components/ProjectList/ProjectList';
// import ProjectStatus from '../../components/ProjectStatus/ProjectStatus';
// import Header from '../../components/Header/Header';
// import Axios from "axios";

const Projects = () => {
  const projectCategori = [
    {
      id: 1,
      name: "New Project",
    },
    {
      id: 2,
      name: "Running",
    },
    {
      id: 3,
      name: "On Hold",
    },
    {
      id: 4,
      name: "Finished",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [isCategori, setCategori] = useState(projectCategori[0].name);

  useEffect(() => {
    fetch("http://localhost:9000/allproject")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const deleteProject = (id) => {
    axios
      .delete(`http://localhost:9000/allproject/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setProjects(projects.filter((project) => project.id !== id));
        }
      });
  };

  return (
    <LayoutContiner>
      <SubNav project="Projects" addproject="addproject"></SubNav>

      <Grid container spacing={2}>
        {projectCategori.map((categori, index) => (
          <CategoriProject
            key={index}
            categori={categori}
            isCategori={isCategori}
            setCategori={setCategori}
          ></CategoriProject>
        ))}

        {projects?.map((project, index) => (
          <ListProject
            key={index}
            project={project}
            deleteProject={deleteProject}
          ></ListProject>
        ))}
      </Grid>
    </LayoutContiner>
  );
};

export default Projects;
