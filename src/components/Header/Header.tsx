import { ReactElement } from 'react';
import LogoImg from '../../assets/logo.png';
import './Header.css';

export const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={LogoImg} alt={LogoImg} className="header__img"></img>
        <h1>My notes</h1>
      </div>
    </header>
  );
};
