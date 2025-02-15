import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Main = ({ playlistsRef, artistRef, containerRef, cardRef }) => {
  return (
    <main id="main">
      <div className="scroll-playlist">
        
        <div className="playlist-container">
          <div id="result-playlists" ref={playlistsRef}>
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

          <div id="result-artist" ref={artistRef} className="hidden">
            <div className="grid-container" ref={containerRef}>
            </div>
          
            <div className="artist-card hidden" ref={cardRef}>
              <div className="card-img">
                <img id="artist-img" className="artist-img" />
                <div className="play">
                  <FontAwesomeIcon icon={faPlay} className="icon-play" />
                </div>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" className="vst" href="#"></a>
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-category"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer__links-social">
            <div className="links-items">
              <ul>
                <li className="title">Empresa</li>
                <li className="item"><a href="#">Sobre</a></li>
                <li className="item"><a href="#">Empregos</a></li>
                <li className="item"><a href="#">For the Record</a></li>
              </ul>

              <ul>
                <li className="title">Comunidades</li>
                <li className="item"><a href="#">Para Artista</a></li>
                <li className="item"><a href="#">Desenvolvedores</a></li>
                <li className="item"><a href="#">Publicidade</a></li>
                <li className="item"><a href="#">Investidores</a></li>
                <li className="item"><a href="#">Fornecedores</a></li>
              </ul>

              <ul>
                <li className="title">Links úteis</li>
                <li className="item"><a href="#">Suporte</a></li>
                <li className="item"><a href="#">Aplicativo móvel grátis</a></li>
              </ul>

              <ul>
                <li className="title">Planos do Spotify úteis</li>
                <li className="item"><a href="#">Premium Individual</a></li>
                <li className="item"><a href="#">Premium Duo</a></li>
                <li className="item"><a href="#">Premium Família</a></li>
                <li className="item"><a href="#">Premium Universitário</a></li>
                <li className="item"><a href="#">Spotify Free</a></li>
              </ul>
              
              <div className="social-items">
                <a href="#"><span className="item"><FontAwesomeIcon icon={faInstagram} /></span></a>
                <a href="#"><span className="item"><FontAwesomeIcon icon={faTwitter} /></span></a>
                <a href="#"><span className="item"><FontAwesomeIcon icon={faFacebook} /></span></a>
              </div>
            </div>
          </div>

          <p>© 2025 Spotify AB</p>
        </div>
      </div>
    </main>
  )
}

export default Main