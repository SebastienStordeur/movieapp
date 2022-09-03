import React from "react";

interface IForm {
  className: string;
  children: React.ReactNode;
}

const Form: React.FC<IForm> = (props) => {
  return <form className={props.className}>{props.children}</form>;
};

export default Form;
