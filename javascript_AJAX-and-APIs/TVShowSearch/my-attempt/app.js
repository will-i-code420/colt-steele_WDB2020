const formBtn = document.querySelector('#search-form-btn');
const searchResultsContainer = document.querySelector('#search-results-container');
const searchResultsList = document.querySelector('#search-results-list');

const findShow = async (e) => {
  e.preventDefault();
  // clear previous results
  while (searchResultsList.firstChild) {
    searchResultsList.removeChild(searchResultsList.firstChild);
  }
  let searchParam = document.querySelector('input[name="show"]').value;
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchParam}`);
  const shows = res.data;
  shows.forEach((show, i) => {
    const newLi = document.createElement('li');
    newLi.classList.add('search-result-item');
    newLi.append(show.show.name)
    searchResultsList.append(newLi);
  })
}

formBtn.addEventListener('click', findShow);
