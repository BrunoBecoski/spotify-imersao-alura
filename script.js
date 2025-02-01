const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists')

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    resultPlaylists.classList.add('hidden');
    resultsArtist.classList.remove('hidden');
    return
  }

  requestApi(searchTerm)
})

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