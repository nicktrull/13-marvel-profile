'use strict';
import SeriesInfoView from 'series-info-view';

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/436?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    // Select profile container
    const element = document.querySelector(`.sidebar`);
    // New profile data
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });
}
