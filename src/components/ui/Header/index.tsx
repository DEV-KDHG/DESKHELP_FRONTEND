import React, { ReactNode } from "react";
import styles from "./Header.module.css";

interface Props{
  children?: ReactNode;
}

const Header: React.FC<Props> = ({children}) => {
  const photoProfile =
    "https://th.bing.com/th/id/R.87e0f7000b48b1a5c60dcffbfa127722?rik=uRizEPMUk9k8uA&pid=ImgRaw&r=0";

  const name = "Rafael Alfonso Corredor Gambín";
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>

      <div className={styles.img_logo_container}>
        <div>
          {children}
        </div>
        <img
          className={styles.img_logo}
          src="/img/logodef.png"
          alt="Logo de la empresa" // Asegúrate de que este texto sea relevante
        />
            </div>


        <div className={styles.img_logo_container_user}>
          <p>{name}</p>
          <img src={photoProfile} className={styles.img_logo_user} alt="" />
        </div>
      </div>
      </div>
  );
};

export default Header;
