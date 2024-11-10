import ModalComponent from "../../../components/ui/Modal";
import SideBarComponent from "../../../components/ui/SideBar";
import BoardStatusComponent from "../../../components/uiStatus/boardStatusActive";
import FormCreateStatus from "../../../components/uiStatus/formsRegister";
import { useCreateStatus } from "../../../hooks";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { StatusDto } from "../../../models/status";
import style from "./Status.module.css";

const Status = () => {
  const { CreateSatusMutation: createStatus, isPending: isPendingCreate } =
    useCreateStatus();
  const createStatusSuccess = async (data: StatusDto) => {
    await createStatus({
      ...data,
    });
  };
  const { register, handleSubmit, errors } =
    useCustomerForm<StatusDto>(createStatusSuccess);

  return (
    <>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>

      <div className={style.container_modal_component}>
        <ModalComponent title={"Crear estado"} onClick={handleSubmit}>
          <FormCreateStatus registerCreate={register} errorsCreate={errors} />
        </ModalComponent>
      </div>
      <BoardStatusComponent/>
    </>
  );
};

export default Status;