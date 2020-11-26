import React, {useState, useEffect} from 'react';

import {BooleanChoice} from './BooleanChoice';
import Select, {SelectInputProps} from './Select';
import TextArea, {TextAreaProps} from './TextArea';
import TextInput, {TextInputProps} from './TextInput';

import {Content, FormInstructions, Section} from '../types/FormInstructions';

import '../styles/App.css';

import formInstructions from '../data/form_instructions.json';

function App() {
  const [formData, setFormData] = useState<Dictionary<any>>({});

  useEffect(() => {
    const formSections: Section[] = (formInstructions as FormInstructions).sections;
    const formData: Dictionary<any> = {};

    formSections.forEach(section => {
      section.content.forEach(item => {
        formData[item.id] = undefined;
      });
    });

    setFormData(formData);
  }, []);

  function handleTextFieldChange(name: string, value: any) {
    setFormData(prev => ({...prev, [name]: value}));
  }

  const getFormElement = (item: Content) => {
    const props: IHasNameLabelValueOnChange = {
      name: item.id,
      label: item.question_text,
      value: formData[item.id],
      onChange: handleTextFieldChange,
    };

    switch (item.type) {
      case 'textarea':
        const textAreaProps: TextAreaProps = {type: item.type, ...props};
        return <TextArea {...textAreaProps} />;

      case 'boolean':
        return <BooleanChoice {...props} />;

      case 'monochoice':
      case 'multichoice':
        const selectInputProps: SelectInputProps = {
          options: item.metadata.options,
          type: item.type,
          ...props,
        };
        return <Select {...selectInputProps} />;

      default:
        const textIpputProps: TextInputProps = {
          type: item.type,
          placeholder: item.metadata.placeholder,
          ...props,
        };
        return <TextInput {...textIpputProps} />;
    }
  };

  return (
    <div className="wrapper">
      {(formInstructions as FormInstructions).sections.map(formSection => (
        <div key={formSection.id} className="formSection">
          <div className="formSectionTitle">{formSection.title}</div>
          {formSection.content.map(item => (
            <div key={item.id} className="form-row">
              {getFormElement(item)}
            </div>
          ))}
        </div>
      ))}

      <p>
        <button className="submit-button" type="button" onClick={() => console.log(formData)}>
          Next
        </button>
      </p>
    </div>
  );
}

export default App;
