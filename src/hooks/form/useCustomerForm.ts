
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const useCustomerForm = <T extends FieldValues>(onSubmit: SubmitHandler<T>) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const submitForm = (data: T) => {
    onSubmit(data);
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(submitForm),
    errors,
    reset,
  };
};

export default useCustomerForm;
