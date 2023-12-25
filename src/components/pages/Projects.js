import { useNavigate } from "react-router-dom";
import styles from './Projects.module.css';
import Container from "../layout/Container";
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../layout/Loading";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        console.log(data);
        setProjects(data);
        setRemoveLoading(true)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [navigate]);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(resp => resp.json()
        .then(() => {
          setProjects(projects.filter(project => project.id !== id))
          { <ToastContainer /> }
        }))
      .catch(err => console.log(err))

  }

  return (
    <div className={styles.project_container}>
      <ToastContainer />


      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>

    </div>
  );
}

export default Projects;
