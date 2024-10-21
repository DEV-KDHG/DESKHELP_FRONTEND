import React, { useState } from "react";
import style from "./ButtonInact.module.css";
import { useInactiveUserByCode } from "../../../hooks";

interface Props {
  code: number;
}

const ButtonInactComponent = ({ code }: Props) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { useInactiveUser, isError } = useInactiveUserByCode();

  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsDialogOpen(true); // Muestra el pop-up si el checkbox está activo y se intenta desactivar
    }
  };

  // Maneja la confirmación de desactivación en el pop-up
  const handleConfirm = () => {
    useInactiveUser(code); // Desactiva el usuario por código
    setIsChecked(false); // Cambia el estado del checkbox a desactivado
    setIsDialogOpen(false); // Cierra el pop-up
  };

  // Maneja la cancelación del pop-up
  const handleCancel = () => {
    setIsDialogOpen(false); // Cierra el pop-up sin desactivar
  };

  return (
    <label className={style.switch}>
      <input type="checkbox" />
      <span className={style.slider}></span>
    </label>
  );
};

export default ButtonInactComponent;
