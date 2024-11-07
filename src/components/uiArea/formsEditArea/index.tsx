import { UseFormRegister } from "react-hook-form";
import { AreaDto } from "../../../models/area";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";

import style from "./FormEditArea.module.css";


interface PropsFormArea {
  registerUpdate: UseFormRegister<AreaDto>;
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
          id="name"
          label="name"
          type="text"
          {...registerUpdate("name", {
            required: "El nombre es obligatorio",
          })}
        />
        {errorsUpdate.code && <Error>{errorsUpdate.code.message}</Error>}{" "}
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
