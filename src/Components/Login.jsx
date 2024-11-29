import React from "react";
import styles from "./Login.module.css"
import { FaPeopleCarry } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div name="Inciso B" className={styles.Login}>
      <h1 className={styles.loginTitle}>
         
      <div className={styles.titleContainer}>
          <p>b) Sistema implementado </p>
          <h1>Catalogo de venta en línea</h1>
          <h3>Video explicativo en youtube</h3>
        <div className="producto"></div>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UF0leC2dvYA?si=bZJRl-3NPxR0IlfN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </h1>
       
    
    </div>
  );
};

export default Login;