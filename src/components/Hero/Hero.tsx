import { IHeroContnentProps } from "../../constants/interface";
import RightSide from "../../assets/img/hero/right-side.svg?react";
import Pen from "../../assets/img/hero/pen.svg?react";
import ArrowDown from "../../assets/img/hero/arrow-down.svg?react";
import "./Hero.scss";

function Hero({ HeroContnentProps }: { HeroContnentProps: IHeroContnentProps }) {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left-block">
          <h1 className="hero__h1">{HeroContnentProps.h1}</h1>
          <p className="hero__paragraf">{HeroContnentProps.paragraf}</p>
          <div className="hero__block-spans">
            <span className="hero__span">{HeroContnentProps.spans.span_1}</span>
            <span className="hero__span">{HeroContnentProps.spans.span_2}</span>
            <span className="hero__span">{HeroContnentProps.spans.span_3}</span>
          </div>
          <form className="hero__form">
            <input
              className="hero__input"
              type="text"
              placeholder={`${HeroContnentProps.input}`}
            />
            <button className="hero__button"></button>
          </form>

          <ArrowDown className="hero__arrow-down" />
        </div>

        <div className="hero__right-block">
          <RightSide className="hero__img-right-side" />
          <Pen className="hero__img-pen" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
