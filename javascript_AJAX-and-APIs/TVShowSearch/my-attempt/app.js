const formBtn = document.querySelector('#search-form-btn');
const searchResultsContainer = document.querySelector('#search-results-container');
const searchResultsList = document.querySelector('#search-results-list');

const findShow = async (e) => {
  e.preventDefault();
  let searchParam = document.querySelector('input[name="show"]').value;
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchParam}`);
  for (let i in res.data) {
    const newLi = document.createElement('li');
    newLi.append(res.data[i].show.name)
    searchResultsList.append(newLi);
  }
}

formBtn.addEventListener('click', findShow);
