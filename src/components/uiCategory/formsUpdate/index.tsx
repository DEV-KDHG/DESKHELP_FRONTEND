
import { UseFormRegister } from "react-hook-form";
import { UpdateCategoryDto } from "../../../models/category";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";
import style from "./formsUpdate.module.css"

interface propsForms {
    registerUpdate: UseFormRegister<UpdateCategoryDto>;
    errorsUpdate: Record<string, { message?: string }>;
  }

const FormUpdateCategoryComponent = ({ registerUpdate, errorsUpdate}:propsForms) => {
  return (
    <>
    <div className={style.modal_edit}>
      <h1>Actualizar Categoria</h1>
      <form>
        <div className={style.container_input_edit}>
          <InputComponent
            id="category"
            label="nombre de categoria"
            type="text"
            {...registerUpdate("name", {
              required: "nombre obligatorio",
            })}
          />{" "}
          {errorsUpdate.name && <Error>{errorsUpdate.name.message}</Error>}

          <InputComponent
          id="code"
          label="codigo categoria:"
          type="number"
          {...registerUpdate("code",{
            required:"el codigo obligatorio"
          })}
          />{errorsUpdate.statusEntity?.message && <Error>{errorsUpdate.statusEntity.message}</Error>}
        </div>
      </form>
    </div>
  </>
  )
}

export default FormUpdateCategoryComponent