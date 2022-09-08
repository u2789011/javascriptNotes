'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.com/v3.1/name/portugal');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data);

  const html = `
  <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>P${
              (+data.region / 100000).toFixed
            }</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.EUR.name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentElement('beforeend', html);
  countriesContainer.styles.opasity = 1;
});
