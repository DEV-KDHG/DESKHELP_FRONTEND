import React, { Dispatch, SetStateAction, forwardRef } from "react";
import styles from "./input.module.css";

interface Props {
  id?: string;
  label?: string;
  type?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
  options?: string[];
}

const InputComponent = forwardRef<HTMLInputElement, Props>(
  ({ label, type, setInfo, id, options, ...rest }, ref) => {
    return (
      <div className={styles.Input}>
        <span>{label}</span>
        {type === "enum" && options ? (
          <select id={id} onChange={(e) => setInfo && setInfo(e.target.value)} {...rest} className={styles.select}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            ref={ref} // Usamos el ref pasado por forwardRef
            onChange={(e) => setInfo && setInfo(e.target.value)} // Uso seguro de setInfo
            {...rest} // Spread para otras propiedades
          />
        )}
      </div>
    );
  }
);

export default InputComponent;
