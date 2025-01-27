import React  from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import productImage from "../../assets/images/img2.webp"
function Cards({addToCart}) {
  
  
  const products = [{
  id: 1,
  name: 'Creme',
  description: "Chocolate creme with cherry",
  cost: 20,
  image: productImage,
  quantity: 1,
  },
  {
    id: 2,
    name: 'Creme2',
    description: "Chocolate creme with cherry2",
    cost: 10,
    image: productImage,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Creme3',
    description: "Chocolate creme with cherry",
    cost: 25,
    image: productImage,
    quantity: 1,
  }
  ]
  return (
    <section className={styles.cards_section}>
      <h2 className={styles.cards_title}>Попробуйте наши лучшие предложения!</h2>
      <div className={styles.cards_container}>
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
      </div>
    </section>
  );
}

export default Cards;