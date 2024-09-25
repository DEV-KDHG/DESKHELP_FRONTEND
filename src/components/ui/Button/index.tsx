import styles from "./Button.module.css"
interface props {
  label: string;
  onClick?: () => void;
}

const ButtonComponet = ({ label, onClick }: props) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default ButtonComponet;
