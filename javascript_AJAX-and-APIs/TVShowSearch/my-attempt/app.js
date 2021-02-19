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
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardInfo = document.createElement('p');
    const cardBtn = document.createElement('a');
    newCard.classList.add('card','text-center', 'col', 'col-md-4', 'col-lg-3', 'my-3');
    cardBody.classList.add('card-body');
    cardImg.classList.add('card-img-top');
    cardTitle.classList.add('card-title');
    cardInfo.classList.add('card-text');
    cardBtn.classList.add('btn', 'btn-primary');
    if (show.show.image) {
      cardImg.src = `${show.show.image.medium}`;
    } else {
      cardImg.src = 'https://unsplash.com/photos/ZNTPlG050tk';
    }
    cardImg.alt = `photo of ${show.show.name} characters`;
    const regex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/gi
    const summaryText = show.show.summary;
    cardTitle.textContent = `${show.show.name}`;
    cardInfo.textContent = `${summaryText.replace(regex, '')}`;
    cardBtn.href = `${show.show.officialSite}`;
    cardBtn.textContent = 'Learn More';
    cardBody.append(cardTitle, cardInfo, cardBtn);
    newCard.append(cardImg, cardBody);
    searchResultsContainer.append(newCard);
  })
  form.elements.query.value = '';
}

form.addEventListener('submit', findShow);