import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/styles.css"

function App() {
  const [search, setSearch] = useState('')

  const artistRef = useRef(null)
  const playlistsRef = useRef(null)
  const containerRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const searchTerm = search.toLowerCase();

    if (searchTerm === '') {
      artistRef.current.classList.add('hidden')
      playlistsRef.current.classList.remove('hidden')
      return
    }

    requestApi(searchTerm)
  }, [search])


  function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists-podcasts?name_like=${searchTerm}`

    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result))
  }

  function displayResults(result) {
    playlistsRef.current.classList.add('hidden');
    
    const card = cardRef.current.cloneNode(true)

    containerRef.current.innerHTML = ''
    card.classList.remove('hidden')
    
    result.forEach(element => {
      const clone = card.cloneNode(true)
      
      clone.querySelectorAll("img")[0].src = element.urlImg
      clone.querySelectorAll("span.artist-name")[0].innerText = element.name
      clone.querySelectorAll("span.artist-category")[0].innerText = element.category
      
      containerRef.current.appendChild(clone)
    });

    artistRef.current.classList.remove('hidden')
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <Sidebar />
      <Main playlistsRef={playlistsRef} artistRef={artistRef} containerRef={containerRef} cardRef={cardRef} />
      <Footer />
    </div>
  )
}

export default App