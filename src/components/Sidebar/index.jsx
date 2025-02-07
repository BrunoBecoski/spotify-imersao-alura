import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBook,
  faGlobe,
  faHome,
  faMagnifyingGlass,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar">
      <nav className="sidebar__navigation">
        <div className="navigation__logo">
          <a href="#">
            <img src="./src/assets/icons/logo-spotify.png" alt="Spotify" />
          </a>
        </div>

        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} className="icon-home" />
              <span>Início</span>
            </a>
          </li>

          <li>
            <a href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
              <span>Buscar</span>
            </a> 
          </li>
        </ul> 
      </nav>

      <div className="sidebar__library">
        <div className="library__content"> 
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} className="icon-library" />
            <span>Sua biblioteca</span>
          </button>

          <FontAwesomeIcon icon={faPlus} className="icon-plus" />
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie a sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>

            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Que tal seguir uma podcast novo?</span>
            <span className="text subtitle">Avisaremos você sobre novos epsisódios.</span>

            <button className="section-playlist__button">
              <span>Explore podcasts</span>
            </button>
          </div>
        </section>

        <div className="bottom-links">
          <a href="#">Legal</a>
          <a href="#">Segurança e Centro de privacidade</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Sobre anúncios</a>
          <a href="#">Acessibilidade</a>
        </div>
          
        <div className="cookies">
          <a href="#">Cookies</a>
        </div>

        <div className="languages">
          <button className="languages__button">
            <FontAwesomeIcon icon={faGlobe} className="icon-globe" />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar