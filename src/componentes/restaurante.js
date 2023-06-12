import React from 'react';

import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';
import houseIcon from '../assets/cocinera_logo.png';
import projectsIcon from '../assets/projects.svg';
import downIcon from '../assets/down.svg';
import emailIcon from '../assets/email.svg';
import helpIcon from '../assets/help.svg';


function DropdownMenu() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h1 className="nav__title">Restaurante</h1>
        <a href="#menu" className="nav__menu">
          <img src={menuIcon} className="nav__icon" alt="Abrir menú" />
        </a>
        <a href="/" className="nav__menu nav__menu--second">
          <img src={closeIcon} className="nav__icon" alt="Cerrar menú" />
        </a>
        <ul className="dropdown" id="menu">
          <li className="dropdown__list">
            <a href="/" className="dropdown__link">
              <img src={houseIcon} className="dropdown__icon" alt="Inicio" />
              <span className="dropdown__span">Inicio</span>
            </a>
          </li>
          <li className="dropdown__list">
            <a href="/" className="dropdown__link">
              <img src={projectsIcon} className="dropdown__icon" alt="Proyectos" />
              <span className="dropdown__span">Menu</span>
              <img src={downIcon} className="dropdown__arrow" alt="Abrir submenú" />
              <input type="checkbox" className="dropdown__check" />
            </a>
            <div className="dropdown__content">
              <ul className="dropdown__sub">
                <li className="dropdown__li">
                  <a href="/" className="dropdown__anchor">Plato principal</a>
                </li>
                <li className="dropdown__li">
                  <a href="/" className="dropdown__anchor">Entrada</a>
                </li>
                <li className="dropdown__li">
                  <a href="/" className="dropdown__anchor">Postre</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown__list">
            <a href="/" className="dropdown__link">
              <img src={emailIcon} className="dropdown__icon" alt="Contacto" />
              <span className="dropdown__span">Bebidas</span>
              <img src={downIcon} className="dropdown__arrow" alt="Abrir submenú" />
              <input type="checkbox" className="dropdown__check" />
            </a>
            <div className="dropdown__content">
              <ul className="dropdown__sub">
                <li className="dropdown__li">
                  <a href="/" className="dropdown__anchor">Jugos</a>
                </li>
                <li className="dropdown__li">
                  <a href="/" className="dropdown__anchor">limonadas</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown__list">
            <a href="/" className="dropdown__link">
              <img src={helpIcon} className="dropdown__icon" alt="Ayuda" />
              <span className="dropdown__span">Ayuda</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DropdownMenu;
