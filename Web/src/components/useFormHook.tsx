import { FormErrors, FormValues } from "@/interface";
import { validate } from "@/utils/validate";
import { useState } from "react";

const useFormHook = () => {
  const initialState = { name: "", email: "", phone: "", message: "" };
  const [values, setValues] = useState<FormValues[]>([initialState]);
  const [errors, setErrors] = useState<FormErrors[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newValues = [...values];
    newValues[index][name as keyof FormValues] = value;
    setValues(newValues);
  };

  const handleAddField = () => {
    setValues([...values, initialState]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = values.map(validate);
    setErrors(validationErrors as FormErrors[]);
    if (validationErrors.every((error) => Object.keys(error).length === 0)) {
      setSubmitted(true);
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
  };
};

export default useFormHook;
