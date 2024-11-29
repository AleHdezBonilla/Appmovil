import React from "react";
import styles from "./Item.module.css"
import Step from "./Step";

const Item = () => {
  const steps = [
    {
      text: "Catalogo de venta en línea",
      id: 1,
    },
    {
      text: " We design your site and do a review.",
      id: 2,
    },
    {
      text: " We develop your website.",
      id: 3,
    },
    {
      text: " We deploy your website.",
      id: 4,
    },
    {
      text: " You enjoy all the benefits of having a website for your company.",
      id: 5,
    },
  ];

   
      

 
 
  return (
    <div name="Inciso D" className={styles.item}>
      <h2 className={styles.title}>d) Reporte de las modificaciones realizadas</h2>
      <ul>
                <li><a href="https://docs.google.com/document/d/1JqaZFxpW0GPIqap5UXp7dkbGlZYB8d2Tz82J3TwmFDE/edit?usp=sharing">Reporte de las modificaciones realizadas</a></li>
            </ul> 
    </div>
  );
};

export default Item;