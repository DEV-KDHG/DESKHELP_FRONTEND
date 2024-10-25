import React, { useState } from "react";
import style from "./ButtoMenu.module.css";
import EditIcon from "./icons/index";
import LockIcon from "./icons/inactive";
import { Modal } from "@mui/material";
import AlertIcon from "./icons/alertInactive";

interface props{
  onClick: ()=> void,
  isPending: boolean;
}
const MenuButtonComponent = ({onClick,isPending}:props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openClose = () => {
    setIsModalOpen(!isModalOpen);
    setIsOpen(false); // Cierra el menú al abrir/cerrar el modal
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeactivate = () => {
    onClick();
  setIsModalOpen(false);
  };

  return (
    <div className={style.container}>
      <button className={style.menuButton} onClick={toggleMenu}>
        &#x22EE;
      </button>
      {isOpen && (
        <div className={style.menu}>
          <button onClick={openClose}>
            <LockIcon width="16px" height="16px" />
            <span> INACTIVAR</span>
          </button>

          <button>
            <EditIcon width="16px" height="16px" />
            <span> EDITAR USER</span>
          </button>
        </div>
      )}
      <Modal open={isModalOpen} onClose={openClose}>
        <div className={style.modal}>
          <div className={style.image}>
            <AlertIcon />
          </div>
          <div className={style.content}>
            <span className={style.title}> Desactivar cuenta</span>
            <p className={style.message}>
              ¿Estas seguro que quieres desactivar esta cuenta? Todos los datos
              de este usuario seran removidos hasta que sea activado nuevamemte.
            </p>
          </div>
          <div className={style.actions}>
            <button className={style.desactivate} 
            onClick={handleDeactivate}
            disabled={isPending}
            type="button">
              Desactivar
            </button>
            <button className={style.cancel} type="button" onClick={openClose}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MenuButtonComponent;
