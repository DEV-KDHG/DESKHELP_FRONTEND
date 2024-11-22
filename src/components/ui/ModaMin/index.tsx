import { Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./ModalMinComponent.module.css";

interface PropsModal {
  title?: string;
  onClick?: () => void; // Acción al confirmar
  onClose: () => void; // Acción al cerrar el modal
  open: boolean; // Controla la visibilidad del modal
  children?: React.ReactNode;
}

const ModalMinComponent: React.FC<PropsModal> = ({ 
  title, 
  children, 
  onClick, 
  onClose, 
  open 
}) => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.modal_container}>
        <div className={styles.modal} style={{ boxShadow: theme.shadows[2] }}>
          <div className={styles.header_form}>
            <span>{title}</span>
          </div>
          <div className={styles.form}>
            <div className={styles.container_input_form}>{children}</div>
          </div>
          <div className={styles.button}>
            <button className={styles.button_cancel} onClick={onClose}>
              Cerrar
            </button>
            <button className={styles.button_confirm} onClick={onClick}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMinComponent;
