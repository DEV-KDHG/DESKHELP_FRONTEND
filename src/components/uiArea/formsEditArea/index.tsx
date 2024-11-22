import { UseFormRegister } from "react-hook-form";
import { UpdateAreaRequest } from "../../../models/area";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";
import style from "./FormEditArea.module.css";

interface PropsFormArea {
  registerUpdate: UseFormRegister<UpdateAreaRequest>;
  errorsUpdate: Record<string, { message?: string }>;
}

export const FormEditArea = ({
  registerUpdate,
  errorsUpdate,
}: PropsFormArea) => {
  return (
    <div className={style.modal_edit}>
      {" "}
      {/* Verifica si 'style' está correctamente importado */}
      <h1>EDITAR AREA</h1>
      <form>
        <InputComponent
          id="newName"
          label="newName"
          type="text"
          {...registerUpdate("newName", {
            required: "El nuevo nombre es obligatorio",
          })}
        />
        {errorsUpdate.newName && <Error>{errorsUpdate.newName.message}</Error>}
        {/* Accediendo a 'errorsUpdate' */}
        <InputComponent
          id="code"
          label="code"
          type="text"
          {...registerUpdate("code", {
            required: "El code es obligatorio",
          })}
        />
        {errorsUpdate.name && <Error>{errorsUpdate.name.message}</Error>}{" "}
        {/* Accediendo a 'errorsUpdate' */}
      </form>
    </div>
  );
};
