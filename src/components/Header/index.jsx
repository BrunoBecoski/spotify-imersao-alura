import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFolderOpen, faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Header = ({ search, setSearch }) => {
  return (
    <nav id="header" className="header__navigation">
      <div className="search">
        <a className="spotify" href="#">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        
        <div className="home-search">
          <button className="home">
            <FontAwesomeIcon icon={faHome} className="icon-home" />
          </button>

          <div className="header__search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />

            <input id="search-input" maxLength="50" placeholder="O que você quer ouvir?" value={search} onChange={(event) => setSearch(event.target.value)} />

            <button className="browse">
              <FontAwesomeIcon icon={faFolderOpen} />
            </button>
          </div>
        </div>
      </div>

      <div className="header__buttons">
        <div className="buttons-info">
          <button>Premium</button>
          <button>Suporte</button>
          <button>Baixar</button>
        </div>

        <div className="separator" />

        <button className="download">
          <FontAwesomeIcon icon={faDownload} />
          Instalar aplicativo
        </button>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header