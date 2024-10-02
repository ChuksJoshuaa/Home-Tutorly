export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface FormInputProps {
  type: string;  
  label: string;
  name: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputType: 'input' | 'textarea' | 'select';  //you can add more optiomns
}