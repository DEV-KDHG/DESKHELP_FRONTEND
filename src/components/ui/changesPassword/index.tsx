import { useState } from "react";
import InputComponent from "../Input";
import style from "./ChangesPassword.module.css";
import ModalMinComponent from "../Modal/ModalMin";
import { useUpdateChangePassword } from "../../../hooks/User/useUpdateChangePassoword";

interface UserChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

const ChangesPassword = () => {
  const { isLoading, updateChangePassword } = useUpdateChangePassword(); // Hook for password change mutation
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [error, setError] = useState<string | null>(null);

  // Async function to handle password change
  const handleSubmit = async () => {
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, vuelva a ingresarlas.");
      return;
    }

    // Prepare the DTO
    const passwordDto: UserChangePasswordDto = {
      currentPassword,
      newPassword,
    };

    try {
      // Pass the DTO to the update function
      await updateChangePassword(passwordDto);
      // Optionally, clear the error and show a success message
      setError(null);
      alert("Contraseña cambiada con éxito.");  // Success alert

      // Clear the input fields after success
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      // Handle any errors during the password update
      setError("Ocurrió un error al cambiar la contraseña. Por favor, inténtelo de nuevo.");
      alert("Error al cambiar la contraseña. Por favor, inténtelo de nuevo.");  // Error alert
    }
  };

  return (
    <div className={style.container_modal_component}>
      <ModalMinComponent onClick={handleSubmit} title="Cambiar contraseña">
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
          {error && <span>{error}</span>} {/* Display error if exists */}
        </div>
      </ModalMinComponent>
    </div>
  );
};

export default ChangesPassword;
