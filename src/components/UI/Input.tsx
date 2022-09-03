import React from "react";

interface IInput {
  id: string;
  className: string;
  name: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<IInput> = (props) => {
  return (
    <input
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default React.memo(Input);
