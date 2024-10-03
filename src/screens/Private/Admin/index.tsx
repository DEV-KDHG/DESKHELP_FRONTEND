import InputComponet from "../../../components/ui/Input";
import ModalComponent from "../../../components/ui/Modal";

const Admin = () => {
  return (
    <>
      <div>Holaa</div>

      <ModalComponent title={"Nuevo registro"}>
        <InputComponet label={"name"} type={"text"} />
        <InputComponet label={"email"} type={"text"} />
       
        
        
      </ModalComponent>
    </>
  );
};

export default Admin;
