import React from "react";

interface IInput {
  id: string;
  className: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<IInput> = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <input
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={ref}
    />
  );
});

export default React.memo(Input);
