import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";

function Cards({addToCart}) {
  return (
    <section className={styles.cards_section}>
      <h2 className={styles.cards_title}>Попробуйте наши лучшие предложения!</h2>
      <div className={styles.cards_container}>
        <Card addToCart={addToCart} />
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
      </div>
    </section>
  );
}

export default Cards;