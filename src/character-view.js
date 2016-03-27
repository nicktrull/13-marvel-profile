'use strict'

export default class CharacterView {
  constructor(result) {
    this.result = result;
    this.element = document.createElement(`li`);

    this.renderCharacterView();
  }

  renderCharacterView() {
    this.element.classList.add(`character-item`);
    this.element.innerHTML = `
      <div class="character-image--container">
        <img class="character-image" src="${this.result.thumbnail.path}.${this.result.thumbnail.extension}">
      </div>
      <div class="character-title">${this.result.name}</div>
    `;
  }
}
