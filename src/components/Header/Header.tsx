/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import Logo from "../../assets/img/header/logo.svg?react";
import BurgerMenu from "../../assets/img/header/burger-menu.svg?react";
import { IHeaderContentProps } from "../../constants/interface.js";
import "./Header.scss";
import { MenuAdaptive } from "../MenuAdaptive/MenuAdaptive.js";

interface IHeader {
  HeaderContentProp: IHeaderContentProps;
}

export const Header: FC<IHeader> = ({ HeaderContentProp }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo className="header__logo" />

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#about">
                {HeaderContentProp.nav.aboutUs}
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#cases">
                {HeaderContentProp.nav.cases}
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#feedback">
                {HeaderContentProp.nav.feedback}
              </a>
            </li>
          </ul>
        </nav>

        <BurgerMenu
          className="header__burger-menu"
          onClick={isOpenMenu}
        />

        {openMenu && <MenuAdaptive className={'header__menu-adaptive'} isClose={isOpenMenu} />}

        <button className="header__button">{HeaderContentProp.button}</button>
      </div>
    </header>
  );
};

export default Header;
