import React from "react";

interface IForm {
  className: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IForm> = (props) => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
