export interface FormInstructions {
  theme: Theme;
  sections: Section[];
}

export interface Theme {
  primary_color: string;
  secondary_color: string;
  background_color: string;
}

export interface Section {
  id: string;
  title: string;
  content: Content[];
}

export interface Content {
  id: string;
  type: string;
  metadata: Metadata;
  question_text: string;
  output?: Output[];
}

export interface Metadata {
  format?: string;
  required: boolean;
  pattern?: string;
  placeholder?: string;
  maxlength?: number;
  options?: Option[];
}

export interface Option {
  label: string;
  value: string;
}

export interface Output {
  originStep: number;
}
