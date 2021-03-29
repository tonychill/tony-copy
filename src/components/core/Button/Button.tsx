import clsx from "clsx";
import React from "react";
import Type from "../Type";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  variant?: "primary" | "secondary" | "nav" | "goBack" | "social" | "save" | "filter";
  width?: number;
  color?: string;
  icon?: string;
  fullWidth?: boolean;
}
const Button: React.FC<ButtonProps> = ({ onClick, text, type, fullWidth }) => {
  return (
    <button
      className={clsx("bg-white  font-bold  px-6 py-3 rounded-lg shadow  outline-none focus:outline-none ", fullWidth ? "w-full" : null)}
      type={type}
      style={{ transition: "all .15s ease" }}
      onClick={onClick}
    >
      <Type variant="wet">{text}</Type>
    </button>
  );
};
export default Button;


//inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700