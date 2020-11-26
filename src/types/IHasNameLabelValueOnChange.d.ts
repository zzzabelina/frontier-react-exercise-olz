interface IHasNameLabelValueOnChange {
  name: string;
  label: string;
  value: string | string[];
  onChange: (targetName: string, targetValue: any) => void;
}
