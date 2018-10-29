import axios from 'axios'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/style.scss';
import { showResults } from './js/search-results';
import { loaderToggle } from './js/loader'

const searchFormEl = document.querySelector('#search-form') // form
const searchInputEl = document.querySelector('#search-input') // input
const searchOptionEl = document.querySelector('#search-option') // option

const apiBaseURL = 'https://swapi.co/api/';
let searchOption = 'films';

searchOptionEl.addEventListener('change', function(e) {
  searchOption = this.value;
})

searchFormEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputValue = searchInputEl.value;
  getDataFromApi(inputValue, searchOption);
});

const getDataFromApi = (value, option) => {
  loaderToggle(); // turn on loader
  const apiURL = `${apiBaseURL}${option}/?search=${value}`

  axios.get(apiURL)
    .then((response) => {
      loaderToggle(); // turn off loader
      return response.data;
    })
    .then((data) => showResults(data.results, searchOption))
    .catch((error) => console.log(error));
}

