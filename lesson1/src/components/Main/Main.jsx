import React from 'react'
import styles from './Main.module.css'

function Main() {
  return (
    <main className={styles.main}>
    <h1 className={styles.main_title}>Добро пожаловать в наше кафе!</h1>
      <p className={styles.main_description}>
        Насладитесь атмосферой уюта и попробуйте наши фирменные десерты: капкейки, мороженое, кексы, ароматный кофе и чай. Мы рады каждому гостю!
      </p>

      <section className={styles.benefits}>
        <h2 className={styles.benefits_title}>Почему стоит выбрать нас?</h2>
        <div className={styles.benefit_items}> 
        <div className={styles.benefit_item}>
          <h3>Кофе</h3>
          <p>
          Кофе — это момент наслаждения и вдохновения. Его насыщенный аромат создает уютную атмосферу, а богатый вкус помогает сосредоточиться и почувствовать себя бодрее. Каждая чашка — это небольшая пауза, которая наполняет ваш день комфортом и теплом.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <h3>Пирожные</h3>
          <p>
            Наши пирожные — это не только удовольствие, но и источник радости. Они содержат натуральные ингредиенты и подарят хорошее настроение.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <h3>Мороженое</h3>
          <p>
            Мороженое — это удовольствие, которое приносит радость каждому. Наш десерт отличается нежной текстурой и натуральным вкусом, создавая идеальный баланс сладости и свежести. Оно дарит наслаждение в любое время и подходит для любого настроения.
          </p>
        </div>
        </div>
      </section> 
  </main>
  )
}

export default Main
