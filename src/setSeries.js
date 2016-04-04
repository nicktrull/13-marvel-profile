'use strict';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';

export default function (id = `9856`) {
  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    // Select profile container
    const element = document.querySelector(`.sidebar`);
    // New profile data
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.characters`);
    const character = new CharacterListView(element, info.data.results);
  });
}
