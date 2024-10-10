import Header from "../../../components/ui/Header";
import InputComponet from "../../../components/ui/Input";
import ModalComponent from "../../../components/ui/Modal";
import SideBarComponent from "../../../components/ui/SideBar";
import style from "./Admin.module.css";

const Admin = () => {
  return (
    
    <>
      <Header/>
        <div className={style.container_sidebar}>
        <SideBarComponent />
        </div>
     
      
      
      <div className={style.container_modal_component}>
        <ModalComponent title={"Nuevo registro"}>
          <InputComponet label={"name"} type={"text"} />
          <InputComponet label={"email"} type={"text"} />
        </ModalComponent>
        
      </div>
    </>
  );
};

export default Admin;
