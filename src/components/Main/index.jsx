import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Main = () => {
  return (
    <main className="main-grid">
      <div className="playlist-container">
        <div id="result-playlists">
          <div className="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>
          
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">

                <a href="#" className="cards">
                  <div className="cards card1">
                    <img src="./src/assets/playlist/1.jpeg" />
                    <span>Boas festas</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card2">
                    <img src="./src/assets/playlist/2.png" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card3">
                    <img src="./src/assets/playlist/3.jpeg" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card4">
                    <img src="./src/assets/playlist/4.jpeg" />
                    <span>Creators</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card5">
                    <img src="./src/assets/playlist/5.jpeg" />
                    <span>Para treinar</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card6">
                    <img src="./src/assets/playlist/6.jpeg" />
                    <span>Podcasts</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card7">
                    <img src="./src/assets/playlist/7.jpeg" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card8">
                    <img src="./src/assets/playlist/8.jpeg" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card9">
                    <img src="./src/assets/playlist/9.jpeg" />
                    <span>Funk</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card10">
                    <img src="./src/assets/playlist/10.jpeg" />
                    <span>MPB</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card11">
                    <img src="./src/assets/playlist/11.jpeg" />
                    <span>Rock</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card12">
                    <img src="./src/assets/playlist/12.jpeg" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card13">
                    <img src="./src/assets/playlist/13.jpeg" />
                    <span>Indie</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card14">
                    <img src="./src/assets/playlist/14.jpeg" />
                    <span>Relax</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card15">
                    <img src="./src/assets/playlist/15.jpeg" />
                    <span>Música Latina</span>
                  </div>
                </a>

              </section>
            </div>
          </div>
        </div>

        <div id="result-artist" className="hidden">
          <div className="grid-container">
            <div className="artist-card">
              <div className="card-img">
                <img id="artist-img" className="artist-img" />
                <div className="play">
                  <FontAwesomeIcon icon={faPlay} className="icon-play" />
                </div>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" className="vst" href="#"></a>
                <span className="artist-name " id="artist-name"></span>
                <span className="artist-category">Artista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main