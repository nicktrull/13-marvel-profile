'use strict';
import CharacterView from 'character-view';

export default class CharacterListView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.renderCharacterList();
  }

  renderCharacterList() {
    this.data.forEach((result) => {
      const characterView = new CharacterView(result);
      const resultList = this.element.querySelector(`.characters-list`);
      resultList.appendChild(characterView.element);
    });
  }
}
