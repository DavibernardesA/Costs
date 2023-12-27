import styles from './Home.module.css'
import photo from '../../img/savings.svg'

function contact() {
  return (
    <div className={styles.home_container}>
      <h1>Contact</h1>
      <p>
        Para entrar em contato comigo basta clicar em uma das redes sociais listadas abaixo da página!
      </p>
      <img src={photo} alt="Descrição da imagem" />

    </div>
  );
}

export default contact