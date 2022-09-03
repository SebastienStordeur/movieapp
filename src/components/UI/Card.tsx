import React from "react";

interface ICard {
  className: string;
  children: React.ReactNode;
}

const Card: React.FC<ICard> = (props) => {
  return <article className={props.className}>{props.children}</article>;
};

export default Card;
