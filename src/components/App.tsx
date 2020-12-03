import React, { useState, useEffect } from "react";

import { BooleanChoice } from "./BooleanChoice";
import Select, { SelectInputProps } from "./Select";
import TextArea, { TextAreaProps } from "./TextArea";
import TextInput, { TextInputProps } from "./TextInput";

import { Frontier } from "../types/FormInstructions";

import "../styles/App.css";

import formInstructions from "../data/form_instructions.json";
import { FormEvent } from "react";

function App() {
  const [formData, setFormData] = useState<Dictionary<any>>({});

  useEffect(() => {
    const formSections: Frontier.Section[] = (formInstructions as Frontier.Job).sections;
    const formData: Dictionary<string | boolean | string[] | undefined> = {};

    formSections.forEach((section) => {
      section.content.forEach((item) => {
        formData[item.id] = undefined;
      });
    });

    setFormData(formData);
  }, []);

  function handleFieldChange(name: string, value: any) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const getFormElement = (item: Frontier.Element) => {
    const props: IHasNameLabelValueRequiredOnChange = {
      name: item.id,
      label: item.question_text,
      value: formData[item.id],
      required: item.metadata.required,

      onChange: handleFieldChange,
    };

    switch (item.type) {
      case "textarea":
        const textAreaProps: TextAreaProps = { ...props };
        return <TextArea {...textAreaProps} />;

      case "boolean":
        return <BooleanChoice {...props} />;

      case "multichoice":
        const selectInputProps: SelectInputProps = {
          options: item.metadata.options,
          ...props,
        };
        return <Select {...selectInputProps} />;

      default:
        const textInputProps: TextInputProps = {
          format: item.metadata.format,
          placeholder: item.metadata.placeholder,
          step: item.metadata.step,
          pattern: item.metadata.pattern,
          ...props,
        };
        return <TextInput {...textInputProps} />;
    }
  };

  const printFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="wrapper" onSubmit={printFormData}>
      {(formInstructions as Frontier.Job).sections.map((formSection) => (
        <div key={formSection.id} className="formSection">
          <div className="formSectionTitle">{formSection.title}</div>
          {formSection.content.map((item) => (
            <div key={item.id} className="form-row">
              {getFormElement(item)}
            </div>
          ))}
        </div>
      ))}

      <p>
        <button className="submit-button" type="submit">
          Next
        </button>
      </p>
    </form>
  );
}

export default App;
