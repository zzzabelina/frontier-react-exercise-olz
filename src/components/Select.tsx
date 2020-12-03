import React from "react";

export interface SelectInputProps extends IHasNameLabelValueRequiredOnChange {
  options?: { label: string; value: string }[];
  onChange: (name: string, value: string[]) => void;
}

export function Select({ value, name, label, options, required, onChange }: SelectInputProps) {
  const inputOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
    onChange(name, values);
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <select value={value} onChange={inputOnChange} multiple={true} size={10} required={required}>
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
