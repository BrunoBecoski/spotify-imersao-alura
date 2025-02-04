import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="header__navigation header-grid">
      <div className="navigation">
        <button className="arrow-left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button className="arrow-right">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="header__search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />

        <input id="search-input" maxLength="50" placeholder="O que você quer ouvir?" onChange={(event) => setSearch(event.target.value)} />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}

export default Header