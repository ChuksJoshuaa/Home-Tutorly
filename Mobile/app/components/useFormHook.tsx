import { SuccessNotifier, validate } from "@/utils";
import { FormErrors, FormValues } from "@/utils/interface";
import { useState } from "react";

const useFormHook = () => {
  const initialState = { name: "", email: "", phone: "", message: "" };
  const [values, setValues] = useState<FormValues[]>([initialState]);
  const [errors, setErrors] = useState<FormErrors[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const clearAllInputs = () => {
    setValues(
        values.map((_) => {
          return {
            name: "",
            email: "",
            phone: "",
            message: "",
          };
        })
      );
      setErrors([]);
  };


  const handleChange = (
    index: number, name: string, value: string
  ) => {

    const newValues = [...values];
    newValues[index][name as keyof FormValues] = value;
    setValues(newValues);
    const validationErrors = newValues.map(validate);
    setErrors(validationErrors as FormErrors[]);
  };

  const handleAddField = () => {
    setValues([...values, initialState]);
  };

  const handleSubmit = () => {
    const validationErrors = values.map(validate);
    setErrors(validationErrors as FormErrors[]);
    if (validationErrors.every((error) => Object.keys(error).length === 0)) {
      setSubmitted(true);

      setTimeout(() => {
        SuccessNotifier("Form has been successfully created!");
        setSubmitted(false);
        clearAllInputs();
      }, 1000);
    }
  };

  const removeIndex = (index: number) => {
    if (index >= 0 && index < values.length) {
      const newValues = [...values];
      const newErrors = [...errors];

      const filteredValues = newValues.filter((_, i) => i !== index);
      const filteredErrors = newErrors.filter((_, i) => i !== index);

      setValues(filteredValues);
      setErrors(filteredErrors);
    }
  };

  return {
    initialState,
    values,
    errors,
    submitted,
    handleChange,
    handleAddField,
    handleSubmit,
    clearAllInputs,
    removeIndex,
  };
};

export default useFormHook;
