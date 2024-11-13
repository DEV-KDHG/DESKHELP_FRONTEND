import ModalComponent from "../../../components/ui/Modal";
import SideBarComponent from "../../../components/ui/SideBar";
import BoardPrioritiesComponet from "../../../components/uiPriorities/boardPriorities";
import FormsCreatePriorities from "../../../components/uiPriorities/formsRegister";
import { useCreatePriorities } from "../../../hooks";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { PrioritiesDto } from "../../../models/priorities";
import style from "./priorities.module.css";

export const Priorities = () => {
  const {
    isPending: isPendingCreate,
    CreatePrioritiesMutation: createPriorities,
  } = useCreatePriorities();

  const createPrioritiesSucces = async (data: PrioritiesDto) => {
    await createPriorities({
      ...data,
    });
  };

  const { register, handleSubmit, errors, reset } =
    useCustomerForm<PrioritiesDto>(createPrioritiesSucces);

  return (
    <>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>

      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear prioridad"} onClick={handleSubmit}>
          <FormsCreatePriorities
            registerCreate={register}
            errorsCreate={errors}
          />
        </ModalComponent>
      </div>
      <BoardPrioritiesComponet />
    </>
  );
};
