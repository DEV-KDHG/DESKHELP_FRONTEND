import { UseFormRegister } from "react-hook-form";
import InputComponent from "../../ui/Input"
import { CategoryDto } from "../../../models/category";
import Error from "../../ui/Error";
interface propsForms {
    registerCreate: UseFormRegister<CategoryDto>;
    errorsCreate: Record<string, { message?: string }>;
  }

const FormCreateCategoryComponent = ({ registerCreate, errorsCreate }: propsForms) => {
  return (
    <>
    <InputComponent
      id="name"
      label="nombre de la categoria"
      type="text"
      {...registerCreate("name", {
        required: "nombre obligatorio",
      })}
    />{" "}
    {errorsCreate.name && <Error>{errorsCreate.name.message}</Error>}
    <InputComponent
      id="status"
      label="crear en estado:"
      type="text"
      {...registerCreate("statusEntity", {
        required: "es obligatorio",
      })}
    />
    {errorsCreate.statusEntity?.message && (
      <Error>{errorsCreate.statusEntity.message}</Error>
    )}
  </>
  )
}

export default FormCreateCategoryComponent