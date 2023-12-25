import React from 'react';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function NewProject() {

  const navigate = useNavigate();

  async function createPost(project) {
    try {
      // Inicializa cost e services
      project.cost = 0;
      project.services = [];

      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      });

      const data = await response.json();
      console.log(data);
      //redirect
      navigate('/projects', { state: { mensagem: 'Projeto criado com sucesso!' } });
      toast.success("Projeto criado com sucesso!");
    } catch (err) {
      console.error("Erro ao criar projeto:", err);
    }
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
