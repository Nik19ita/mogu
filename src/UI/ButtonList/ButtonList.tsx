import { FC } from "react";
import { Button } from "../Button/Button.tsx";
import { CasesContent } from "../../constants/copyright.ts";
import "./ButtonList.scss";

interface IButtonProps {
  actionNumber: number;
  isActive: (index: number) => void;
}

export const ButtonList: FC<IButtonProps> = ({ actionNumber, isActive }) => {
  return (
    <div className="button-list">
      {[1, 2, 3, 4, 5].map((_, index) => {
        type numberButtonType = 1 | 2 | 3 | 4 | 5;
        const numberButton = (index + 1) as numberButtonType;
        return (
          <Button
            id={index}
            onClick={() => isActive(index)}
            text={CasesContent[`button ${numberButton}`]}
            actionNumber={actionNumber}
            key={index}
            isDisabled={index > 2 ? true : false}
          />
        );
      })}
    </div>
  );
};
