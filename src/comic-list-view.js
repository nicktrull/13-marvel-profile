'use strict';

import ComicView from 'comic-view';

export default class ComicListView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.renderComicList();
  }

  renderComicList() {
    this.data.forEach((result) => {
      const comicView = new ComicView(result);
      const resultList = this.element.querySelector(`.comics-list`);
      resultList.appendChild(comicView.element);
    });
  }
}
