import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import InputComponent from "../Input";
import style from "./ChangesPassword.module.css";
import ModalMinComponent from "../ModaMin";
import { useUpdateChangePassword } from "../../../hooks/User/useUpdateChangePassoword";

interface UserChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

const ChangesPassword = () => {
  const { isLoading, updateChangePassword } = useUpdateChangePassword();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      setError(
        "Las contraseñas no coinciden. Por favor, vuelva a ingresarlas."
      );
      return;
    }

    const passwordDto: UserChangePasswordDto = {
      currentPassword,
      newPassword,
    };

    try {
      await updateChangePassword(passwordDto);
      setError(null);
      alert("Contraseña cambiada con éxito.");

      // Limpiar campos y cerrar modal
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setIsModalOpen(false);

      // Redirigir a /dashboard_admin
      navigate("/dashboard_admin");
    } catch (err) {
      setError(
        "Ocurrió un error al cambiar la contraseña. Por favor, inténtelo de nuevo."
      );
      alert("Error al cambiar la contraseña. Por favor, inténtelo de nuevo.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/dashboard_admin"); // Redirige al cerrar el modal
  };

  return (
    <div className={style.container_modal_component}>
      {isModalOpen && ( // Mostrar el modal solo si isModalOpen es true
        <ModalMinComponent
          onClick={handleSubmit}
          open={isModalOpen}
          onClose={handleCloseModal} // Llama a handleCloseModal al cerrar
          title="Cambiar contraseña"
        >
          <div className={style.form}>
            <InputComponent
              id="currentPassword"
              label="Contraseña actual"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <InputComponent
              id="newPassword"
              label="Nueva contraseña"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputComponent
              id="confirmPassword"
              label="Confirmar nueva contraseña"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </ModalMinComponent>
      )}
    </div>
  );
};

export default ChangesPassword;
