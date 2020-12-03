import React from "react";

interface BoolChoiceProps extends IHasNameLabelValueRequiredOnChange {}

export function BooleanChoice({ value, name, label, onChange }: BoolChoiceProps) {
  const boolValue = value === "true";

  const toggleChoice = () => {
    onChange(name, (!boolValue).toString());
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <button type="button" disabled={boolValue} onClick={toggleChoice}>
        Yes
      </button>
      <button type="button" disabled={!boolValue} onClick={toggleChoice}>
        No
      </button>
    </>
  );
}

export default BooleanChoice;
