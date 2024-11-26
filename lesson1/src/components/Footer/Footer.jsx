import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__about}>
          <h3>О нас</h3>
          <p>
          Наше онлайн-кафе — это место, где вкусные моменты становятся ближе. Мы предлагаем быстрый и удобный способ заказать любимые десерты и напитки, не выходя из дома. Каждое блюдо готовится с заботой, чтобы вы могли насладиться качеством и вкусом, где бы вы ни находились.
          </p>
        </div>

        <div className={styles.footer__contacts}>
          <h3>Контакты</h3>
          <p>Адрес: ул. Примерная, д. 123</p>
          <p>Телефон: +3 (800) 456-78-90</p>
          <p>Email: info@cafe-example.com</p>
        </div>

        <div className={styles.footer__socials}>
          <h3>Мы в соцсетях</h3>
          <div className={styles.social__icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p>© 2024 Кафе "Пример". Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;