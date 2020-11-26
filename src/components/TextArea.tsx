import React from "react";

export interface TextAreaProps extends IHasNameLabelValueOnChange {
  placeholder?: string;
  type: string;
}

export function TextArea({ value, name, label, placeholder, onChange }: TextAreaProps) {
  const inputOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea name={name} placeholder={placeholder} value={value} onChange={inputOnChange} />
    </>
  );
}

export default TextArea;
