import { FC } from "react";
import "./Button.scss";

interface IButton {
  text: string;
  actionNumber: number;
  id: number;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean
}

export const Button: FC<IButton> = ({
  text,
  id,
  onClick,
  className,
  actionNumber,
  isDisabled
}) => {
  const activeNumber = actionNumber === id;
  return (
    <button
      className={`button ${className || ""}`}
      onClick={onClick}
      style={{ backgroundColor: activeNumber ? "yellow" : "white" }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
