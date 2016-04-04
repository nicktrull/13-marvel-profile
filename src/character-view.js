'use strict';
import setSeries from 'setSeries';

export default class CharacterView {
  constructor(result) {
    this.result = result;
    this.element = document.createElement(`li`);

    this.renderCharacterView();
    this.switchSeries();
  }

  renderCharacterView() {
    this.element.classList.add(`character-item`);
    this.element.innerHTML = `
      <div class="character-image--container">
        <img class="character-image"
        src="${this.result.thumbnail.path}.${this.result.thumbnail.extension}">
      </div>
      <div class="character-title">${this.result.name}</div>
    `;
  }

  switchSeries() {
    // get series id for current character
    const seriesParts = this.result.series.items[0].resourceURI.split(`/`);
    const seriesId = seriesParts[seriesParts.length - 1];
    // click event listener
    const clickArea = this.element.querySelector(`.character-image--container`);
    clickArea.addEventListener(`click`, () => {
      // console.log(`want to update to id`, seriesId)
      setSeries(seriesId);
      // update character id number in fetch request in index.js file
    });
  }
}
