import { useEffect, useState } from "react";

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