/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "../../assets/img/logo.svg?react";
import { IHeaderContnentProps } from "../../constants/interface.js";
import "./Header.scss";

function Header({
  HeaderContantProp,
}: {
  HeaderContantProp: IHeaderContnentProps;
}) {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo className="header__logo" />

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="#"></a>
              {HeaderContantProp.nav.aboutUs}
            </li>
            <li className="header__item">
              <a href="#"></a>
              {HeaderContantProp.nav.cases}
            </li>
            <li className="header__item">
              <a href="#"></a>
              {HeaderContantProp.nav.feedback}
            </li>
          </ul>
        </nav>

        <button className="header__button">{HeaderContantProp.button}</button>
      </div>
    </header>
  );
}

export default Header;
