/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { IFooterContentProps } from "../../constants/interface";
import { Picture } from "../../UI/Picture/Picture";
import "./Footer.scss";

interface IFooterProps {
  FooterContnentProps: IFooterContentProps;
  PictureContent: any;
}

export const Footer: FC<IFooterProps> = ({
  FooterContnentProps,
  PictureContent,
}) => {
  return (
    <section className="footer" id="feedback">
      <div className="container footer__container">
        <div className="footer__content">
          <h2 className="footer__h2">{FooterContnentProps.h2}</h2>
          <form className="footer__form" action="#">
            <input
              className="footer__input"
              type="email"
              placeholder={FooterContnentProps.input_1}
            />
            <textarea
              className="footer__textarea"
              placeholder={FooterContnentProps.input_2}
            />
            <button className="footer__button">
              {FooterContnentProps.button}
            </button>
          </form>
        </div>

        

        <div className="footer__img footer-img">
          <div className="footer-img__eye footer-img__eye_1"></div>
          <div className="footer-img__eye footer-img__eye_2"></div>

          <Picture
            imgAttr={PictureContent.footer.cat.imgAttr}
            sources={PictureContent.footer.cat.sources}
          />
        </div>
      </div>
    </section>
  );
};
