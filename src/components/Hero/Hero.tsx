/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHeroContentProps } from "../../constants/interface";
import ArrowDown from "../../assets/img/hero/arrow-down.svg?react";
import "./Hero.scss";
import { FC } from "react";
import { Picture } from "../../UI/Picture/Picture";
import Avatar1 from "../../assets/img/hero/avatar1.svg?react";
import Cursor from "../../assets/img/hero/cursor.svg?react";
import Avatar2 from "../../assets/img/hero/avatar2.svg?react";
import Avatar3 from "../../assets/img/hero/avatar3.svg?react";
import Tooltip from "../../assets/img/hero/tooltip.svg?react";
import Avatar4 from "../../assets/img/hero/avatar4.svg?react";
import Plus from "../../assets/img/hero/plus.svg?react";

interface IHero {
  HeroContnentProps: IHeroContentProps;
  PictureContent: any;
}

export const Hero: FC<IHero> = ({ HeroContnentProps, PictureContent }) => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left-block">
          
          <h1 className="hero__h1">{HeroContnentProps.h1}</h1>
          <p className="hero__paragraf">{HeroContnentProps.paragraf}</p>
          <div className="hero__block-spans">
            {[1, 2, 3].map((_, index) => {
              type NumberSpanType = 1 | 2 | 3;
              const numberSpan = (index + 1) as NumberSpanType;
              return (
                <span className="hero__span" key={index}>
                  {HeroContnentProps.spans[`span_${numberSpan}`]}
                </span>
              );
            })}
          </div>

          <form className="hero__form">
            <input
              className="hero__input"
              type="text"
              placeholder={`${HeroContnentProps.input}`}
            />
            <button className="hero__button"></button>
          </form>

          <a href="#about">
            <ArrowDown className="hero__arrow-down" />
          </a>
        </div>

        <div className="hero__right-block hero-right-block">
          <button className="hero-right-block__button">
            {HeroContnentProps.button}
          </button>

          <div className="hero-right-block__imgs">
            <div className="hero-right-block__svg-1">
              <Avatar1 className="hero-right-block__svg hero-right-block__svg_1" />
              <Cursor className="hero-right-block__cursor" />
              <div className="hero-right-block__popup-1">
                {HeroContnentProps.popup_1}
              </div>
            </div>

            <Avatar2 className="hero-right-block__svg hero-right-block__svg_2" />
            <div className="hero-right-block__svg-3">
              <Tooltip className="hero-right-block__tooltip" />
              <Avatar3 className="hero-right-block__svg hero-right-block__svg_3" />
            </div>

            <Avatar4 className="hero-right-block__svg hero-right-block__svg_4" />
            <Plus className="hero-right-block__svg hero-right-block__svg_5" />
          </div>

          <Picture
            className="hero-right-block__img-pen"
            imgAttr={PictureContent.hero.pen.imgAttr}
            sources={PictureContent.hero.pen.sources}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
