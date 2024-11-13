import { UseFormRegister } from "react-hook-form";
import { PrioritiesDto } from "../../../models/priorities";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";

interface propsForms {
  registerCreate: UseFormRegister<PrioritiesDto>;
  errorsCreate: Record<string, { message?: string }>;
}

const FormsCreatePriorities = ({ registerCreate, errorsCreate }:propsForms) => {
  return (
    <>
      <InputComponent
        id="name"
        label="nombre"
        type="text"
        {...registerCreate("name", {
          required: "el nombre es obligatorio",
        })}
      />{" "}
      {errorsCreate.name && <Error>{errorsCreate.name.message}</Error>}
      <InputComponent
        id="description"
        label="description"
        type="text"
        {...registerCreate("description", {
          required: "la descripción es obligatorio",
        })}
      />
      {errorsCreate.description?.message && (
        <Error>{errorsCreate.description.message}</Error>
      )}
    </>
  );
};

export default FormsCreatePriorities;
