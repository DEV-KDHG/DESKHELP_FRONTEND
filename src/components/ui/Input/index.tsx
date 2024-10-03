import React, { Dispatch, SetStateAction, forwardRef } from "react";
import styles from "./input.module.css";

interface Props {
  id?: string;
  label?: string;
  type?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
}

const InputComponent = forwardRef<HTMLInputElement, Props>(
  ({ label, type, setInfo, id, ...rest }, ref) => {
    return (
      <div className={styles.Input}>
        <span>{label}</span>
        <input
          id={id}
          type={type}
          ref={ref} // Usamos el ref pasado por forwardRef
          onChange={(e) => setInfo && setInfo(e.target.value)} // Uso seguro de setInfo
          {...rest} // Spread para otras propiedades
        />
      </div>
    );
  }
);

export default InputComponent;
