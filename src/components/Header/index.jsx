import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFolderOpen, faHome, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Header = ({ search, setSearch }) => {
  return (
    <nav id="header" className="header__navigation">
      <a className="spotify" href="#">
        <FontAwesomeIcon icon={faSpotify} />
      </a>

      <div className="header__search">
        <button className="search-home">
          <FontAwesomeIcon icon={faHome} className="icon-home" />
        </button>
        
        <div className="search">  
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />

          <input id="search-input" maxLength="50" placeholder="O que você quer ouvir?" value={search} onChange={(event) => setSearch(event.target.value)} />

          { search ? 
              <button className="search-browse">
                <FontAwesomeIcon icon={faX}  title="Limpar campo de pesquisa" onClick={() => setSearch('')}/>
              </button>
            :
              <button className="search-browse">
                <FontAwesomeIcon icon={faFolderOpen} />
              </button>
          }
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