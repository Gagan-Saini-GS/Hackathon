export interface I_FilterOption {
  id: string;
  value: string;
}

export interface I_FilterData {
  id: string;
  name: string;
  options: I_FilterOption[];
}
