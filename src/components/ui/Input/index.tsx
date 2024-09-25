import { Dispatch, SetStateAction } from "react";

import styles from "./input.module.css";

interface props {
  label?: string;
  type?: string;
  setInfo?: Dispatch<SetStateAction<string>>;
}

const InputComponet = ({ label, type, setInfo }: props) => {
  return (
    <div className={styles.Input}>
      <span>{label}</span>
      <input type={type} onChange={(e) => setInfo!(e.target.value)} />
    </div>
  );
};

export default InputComponet;
