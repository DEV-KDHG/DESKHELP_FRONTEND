import React from "react";
import styles from "./CardsMenus.module.css";
import ButtonLink from "../ButtonLink";


interface Props{
    icon?: React.ReactNode;
    url?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
nameButton: string;

}
const CardMenus = ({nameButton,url,icon}:Props) => {
  return (
    <div>
      <div className={styles.container}>
        <br />
        <div className={styles.cards}>
          <div className={styles.icon_container}>
      {icon}
<ButtonLink name={nameButton} url={url}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenus;
