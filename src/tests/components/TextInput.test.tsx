import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TextInput, { TextInputProps } from "../../components/TextInput";

let container: Element | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (!container) return;
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("textInput renders input with correct value", () => {
  const fakeProps: TextInputProps = {
    name: "test_name",
    label: "Test label",
    value: "1",
    onChange: (name: string, value: string) => {},
    type: "text",
  };
  if (!container) return;

  act(() => {
    render(<TextInput {...fakeProps} />, container);
  });

  expect(container.childElementCount).toBe(2);

  const input = container.children.namedItem("test_name") as HTMLInputElement;

  expect(input).not.toBeNull;
  if (!input) return;
  expect(input.value).toBe("1");
});
