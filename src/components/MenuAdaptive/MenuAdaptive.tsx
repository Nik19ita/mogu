import { HeaderContent } from "../../constants/copyright";
import Close from "../../assets/img/header/close.svg?react";
import { FC } from "react";
import "./MenuAdaptive.scss";

interface IMenuAdaptiveProps {
  isClose: () => void;
  className?: string;
}

export const MenuAdaptive: FC<IMenuAdaptiveProps> = ({
  isClose,
  className,
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className="container menu__container">
        <Close onClick={isClose} className="menu__close" />
        <nav className="menu__nav">
          <ul className="menu__list">
            <li>
              {" "}
              <a className="menu__link" href="">
                {HeaderContent.nav.aboutUs}
              </a>
            </li>
            <li>
              <a className="menu__link" href="">
                {HeaderContent.nav.cases}
              </a>
            </li>
            <li>
              <a className="menu__link" href="">
                {HeaderContent.nav.feedback}
              </a>
            </li>
          </ul>
        </nav>

        <button className="menu__button">{HeaderContent.button}</button>
      </div>
    </div>
  );
};
