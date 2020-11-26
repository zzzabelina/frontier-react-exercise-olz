import React from "react";
import { Option } from "../types/FormInstructions";

export interface SelectInputProps extends IHasNameLabelValueOnChange {
  type: string;
  options?: Option[];
  onChange: (name: string, value: any) => void;
}

export function Select({ value, name, label, type, options, onChange }: SelectInputProps) {
  const isMultichoice = type === "multichoice";
  const inputOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isMultichoice) onChange(name, e.target.value);
    else {
      const values = [...e.target.selectedOptions].map((opt) => opt.value);
      onChange(name, values);
    }
  };
  
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select value={value} onChange={inputOnChange} multiple={isMultichoice} size={10}>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        ;
      </select>
    </>
  );
}

export default Select;
