import { useCreateCategory } from "../../../hooks";
import { CategoryDto } from "../../../models/category";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import SideBarComponent from "../../../components/ui/SideBar";
import ModalComponent from "../../../components/ui/Modal";
import FormCreateCategoryComponent from "../../../components/uiCategory/formsRegister";
import BoardCategoryACtiveComponent from "../../../components/uiCategory/boardCategoryActive";
import style from "./category.module.css";

const Category = () => {
  const { Category, isPending: isPendingCategory } = useCreateCategory();

  const createCategorySuccess = async (data: CategoryDto) => {
    await Category({
      ...data,
    });
  };

  const { register, handleSubmit, errors } = useCustomerForm<CategoryDto>(
    createCategorySuccess
  );
  return (
    <>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>

      <div className={style.container_modal_component}>
        <ModalComponent title={"Nueva categoria"} onClick={handleSubmit}>
          <FormCreateCategoryComponent
            registerCreate={register}
            errorsCreate={errors}
          />
        </ModalComponent>
      </div>
      <BoardCategoryACtiveComponent />
    </>
  );
};

export default Category;
