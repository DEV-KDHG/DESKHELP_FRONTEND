import { UseFormRegister } from "react-hook-form";
import { StatusDto } from "../../../models/status";
import Error from "../../ui/Error";
import InputComponent from "../../ui/Input";

interface propsForms {
  registerCreate: UseFormRegister<StatusDto>;
  errorsCreate: Record<string, { message?: string }>;
}
const FormCreateStatus = ({ registerCreate, errorsCreate }: propsForms) => {
  return (
    <>
      <InputComponent
        id="name"
        label="nombre"
        type="text"
        {...registerCreate("name", {
          required: "nombre obligatorio",
        })}
      />{" "}
      {errorsCreate.name && <Error>{errorsCreate.name.message}</Error>}
      <InputComponent
        id="status"
        label="crear estado:"
        type="text"
        {...registerCreate("statusEntity", {
          required: "es obligatorio",
        })}
      />
      {errorsCreate.statusEntity?.message && (
        <Error>{errorsCreate.statusEntity.message}</Error>
      )}
    </>
  );
};

export default FormCreateStatus;
