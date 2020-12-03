import React, { ChangeEvent } from "react";

export interface TextInputProps extends IHasNameLabelValueRequiredOnChange {
  placeholder?: string;
  format?: "text" | "email" | "number";
  step?: number;
  pattern?: string;
}

export function TextInput({
  value,
  name,
  label,
  placeholder,
  format,
  step,
  required,
  pattern,
  onChange,
}: TextInputProps) {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };
  if (value === undefined) value = "";

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={format || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        min={0}
        step={step}
        required={required}
        pattern={pattern}
        onChange={inputOnChange}
      />
    </>
  );
}

export default TextInput;
