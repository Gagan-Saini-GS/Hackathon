import { ReactNode } from "react";

export interface I_Button {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  text: string | ReactNode;
  disabled?: boolean;
  className?: string;
}
