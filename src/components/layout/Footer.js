// Footer.js
import { FaInstagram, FaDiscord, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.instagram}>
          <a href="https://www.instagram.com/_davibn/?igsh=MTZrenc1cXRiMDNzMQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li className={styles.discord}>
          <a href="https://discord.gg/w6689eD82m" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </li>
        <li className={styles.whatsapp}>
          <a href='https://wa.me/5561991801610' target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </li>
        <li className={styles.linkedin}>
          <a href="https://www.linkedin.com/in/davi-bernardes-do-nascimento-7b62a4274/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.github}>
          <a href="https://github.com/DavibernardesA/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
