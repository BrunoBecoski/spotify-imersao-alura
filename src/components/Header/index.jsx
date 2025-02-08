import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFolderOpen, faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Header = () => {
  const [search, setSearch] = useState('')

  const resultsArtist = document.getElementById('result-artist');
  const resultPlaylists = document.getElementById('result-playlists');

  useEffect(() => {
    const searchTerm = search.toLowerCase();
    
    if (searchTerm === '') {
      resultPlaylists?.classList.add('hidden');
      resultsArtist?.classList.remove('hidden');
      return
    }
    
    requestApi(searchTerm)
  }, [search])


  function requestApi(searchTerm) {
    const url = `http://localhost:3000/podcasts?name_like=${searchTerm}`
  
    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result))
  }
  
  function displayResults(result) {
    resultPlaylists.classList.add('hidden');
    
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');
  
    result.forEach(element => {
      artistName.innerText = element.name
      artistImg.src = element.urlImg
    });
  
    resultsArtist.classList.remove('hidden')
  }

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

            <input id="search-input" maxLength="50" placeholder="O que você quer ouvir?" onChange={(event) => setSearch(event.target.value)} />

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
          <button className="login">Entrar</button>
        </div>
      </div>
    </nav>
  )
}

export default Header