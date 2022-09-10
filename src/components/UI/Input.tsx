import React from "react";

interface IInput {
  id: string;
  className: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: /* (event: React.ChangeEvent<HTMLInputElement>) => void | */ any;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<IInput> = React.forwardRef((props, ref) => {
  return (
    <input
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      ref={ref}
    />
  );
});

export default React.memo(Input);
