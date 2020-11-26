import React, { ChangeEvent } from "react";

export interface TextInputProps extends IHasNameLabelValueOnChange {
  placeholder?: string;
  type: string;
}

export function TextInput({ value, name, label, placeholder, type, onChange }: TextInputProps) {
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };
  if (value === undefined) value = "";

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={inputOnChange}
      />
    </>
  );
}

export default TextInput;
