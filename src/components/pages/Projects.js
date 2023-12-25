import Message from "../layout/Message";
import { useNavigate } from "react-router-dom";
import styles from './Projects.module.css';
import Container from "../layout/Container";
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = navigate();

        if (location.state) {
          setMessage(location.state.message);
        }

        const response = await fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  );
}

export default Projects;