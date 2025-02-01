import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <span className="fa fa-chevron-left"></span>
        </button>

        <button className="arrow-right">
          <span className="fa fa-chevron-right"></span>
        </button>
      </div>

      <div className="header__search">
        <span className="fa fa-search"></span>

        <input id="search-input" maxlength="50" placeholder="O que você quer ouvir?" />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}

export default Header