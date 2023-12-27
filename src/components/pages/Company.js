import React from 'react';
import photo from '../../img/savings.svg';
import styles from './Home.module.css'

function Company() {
  return (
    <div className={styles.home_container}>
      <h1>Company</h1>
      <p>
        Esse projeto foi desenvolvido com o intuito de aplicar meus conhecimentos de React através do curso de React com o professor Matheus Battisti, para mais informações do curso clique na imagem abaixo:
      </p>
      <a href="https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=1&ab_channel=MatheusBattisti-HoradeCodar" target="_blank" rel="noopener noreferrer">
        <img src={photo} alt="imagem" />
      </a>
      <p>by: <a href='https://wa.me/5561991801610' target="_blank" rel="noopener noreferrer">Davi</a></p>
    </div>
  );
}

export default Company;
