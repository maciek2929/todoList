import { Input } from './FormField.styles';

export interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  value?: any;
  onChange?: any;
}

export const FormField = ({ label, name, id, type, value, onChange }: FormFieldProps) => {
  return <Input name={name} id={id} type={type} onChange={onChange} value={value} placeholder={label} />;
};
