/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, SetStateAction, useState } from "react";
import { ICasesContentProps } from "../../constants/interface";
import { Picture } from "../../UI/Picture/Picture";
import "./Cases.scss";
import { ButtonList } from "../../UI/ButtonList/ButtonList";

interface ICases {
  CasesContnentProps: ICasesContentProps;
  PictureContent: any;
}

const Cases: FC<ICases> = ({ CasesContnentProps, PictureContent }) => {
  const [actionNumber, setActionNumber] = useState(0);

  const isActive = (index: SetStateAction<number>) => {
    setActionNumber(index);
  };

  return (
    <section className="cases" id="cases">
      <div className="container cases__container">
        <div className="cases__content">
          <div className="cases__left-block">
            <ButtonList isActive={isActive} actionNumber={actionNumber} />
            <h2 className="cases__h2">{CasesContnentProps.h2}</h2>

            <p className="cases__p" key={actionNumber}>
              {actionNumber
                ? `Нажата кнопка ${actionNumber + 1}`
                : CasesContnentProps.p}
            </p>
          </div>

          <Picture
            className="cases__img"
            imgAttr={PictureContent.cases.cases.imgAttr}
            sources={PictureContent.cases.cases.sources}
          />
        </div>
      </div>
    </section>
  );
};

export default Cases;
