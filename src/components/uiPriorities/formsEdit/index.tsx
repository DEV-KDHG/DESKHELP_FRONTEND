import { UseFormRegister } from "react-hook-form";
import { UpdatePrioritiesDto } from "../../../models/priorities";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";
import style from "./formsEdit.module.css";

interface propsForms {
  registerUpdate: UseFormRegister<UpdatePrioritiesDto>;
  errorsUpdate: Record<string, { message?: string }>;
}

const FormUpdatePriorities = ({ registerUpdate, errorsUpdate }: propsForms) => {
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
              id="description"
              label="description"
              type="text"
              {...registerUpdate("description", {
                required: "la descripción obligatorio",
              })}
            />
            {errorsUpdate.description?.message && (
              <Error>{errorsUpdate.description.message}</Error>
            )}

<InputComponent
              id="code"
              label="code"
              type="text"
              {...registerUpdate("code", {
                required: "El codigo es obligatorio",
              })}
            />
            {errorsUpdate.code?.message && (
              <Error>{errorsUpdate.code.message}</Error>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUpdatePriorities;
