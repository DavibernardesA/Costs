// Footer.js
import { FaInstagram, FaDiscord, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.instagram}>
          <FaInstagram />
        </li>
        <li className={styles.discord}>
          <FaDiscord />
        </li>
        <li className={styles.whatsapp}>
          <FaWhatsapp />
        </li>
        <li className={styles.linkedin}>
          <FaLinkedin />
        </li>
        <li className={styles.github}>
          <FaGithub />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
