import { UseFormRegister } from "react-hook-form";
import {UpdateStatusDto } from "../../../models/status";
import Error from "../../ui/Error";
import InputComponent from "../../ui/Input";
import style from "./formsEdit.module.css";

interface propsForms {
  registerUpdate: UseFormRegister<UpdateStatusDto>;
  errorsUpdate: Record<string, { message?: string }>;
}
const FormUpdateStatus = ({ registerUpdate, errorsUpdate }: propsForms) => {
  return (
    <>
      <div className={style.modal_edit}>
        <h1>Actualizar Estado</h1>
        <form>
          <div className={style.container_input_edit}>
            <InputComponent
              id="name"
              label="nombre"
              type="text"
              {...registerUpdate("name", {
                required: "nombre obligatorio",
              })}
            />{" "}
            {errorsUpdate.name && <Error>{errorsUpdate.name.message}</Error>}

            <InputComponent
            id="code"
            label="codigo:"
            type="number"
            {...registerUpdate("code",{
              required:"el codigo obligatorio"
            })}
            />{errorsUpdate.statusEntity?.message && <Error>{errorsUpdate.statusEntity.message}</Error>}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdateStatus;