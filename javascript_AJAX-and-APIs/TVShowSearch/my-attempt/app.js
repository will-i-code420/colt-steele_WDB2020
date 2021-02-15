// make use of images, title, score and some other things

const form = document.querySelector('#search-form');
const searchResultsContainer = document.querySelector('#search-results-container');

const findShow = async (e) => {
  e.preventDefault();
  // clear previous results
  while (searchResultsContainer.firstChild) {
    searchResultsContainer.removeChild(searchResultsContainer.firstChild);
  }
  let searchParam = form.elements.query.value;
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchParam}`);
  const shows = res.data;
  shows.forEach((show, i) => {
    const newCard = document.createElement('article');
    const cardImg = document.createElement('img');
    const cardTitle = document.createElement('h2');
    const cardInfo = document.createElement('p');
    newCard.id = 'search-result-card';
    if (show.show.image) {
      cardImg.src = `${show.show.image.medium}`;
    } else {
      cardImg.src = 'https://unsplash.com/photos/ZNTPlG050tk';
    }
    cardTitle.textContent = `${show.show.name}`;
    cardInfo.textContent = `${show.show.summary}`
    newCard.append(cardImg, cardTitle, cardInfo);
    searchResultsContainer.append(newCard);
  })
  form.elements.query.value = '';
}

form.addEventListener('submit', findShow);
