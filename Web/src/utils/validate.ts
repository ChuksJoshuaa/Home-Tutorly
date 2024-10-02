import { FormErrors, FormValues } from "@/interface";

export function isEmptyString(value: string) {
  return typeof value === "string" && value.trim() === "";
}

export const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (values.name[0] !== values.name[0].toUpperCase()) {
    errors.name = 'Name must start with a capital letter';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // Phone validation
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\+\d{1,3}/.test(values.phone)) {
    errors.phone = "Phone number must include country code";
  } else if (!/^\+\d{1,3}\d{8,}$/.test(values.phone)) {
    errors.phone = "Phone number must be at least 8 digits long";
  }

  // Message validation
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};