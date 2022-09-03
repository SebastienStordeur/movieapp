import React from "react";

interface IButton {
  className: string;
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: React.FC<IButton> = (props) => {
  return (
    <button className={props.className} type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
