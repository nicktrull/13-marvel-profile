'use strict'

export default class ComicView {
  constructor(result) {
    this.result = result;
    this.element = document.createElement(`li`);

    this.renderComicView();
  }

  renderComicView() {
    this.element.classList.add(`comic-item`);
    this.element.innerHTML = `
      <div class="comic-image--container">
        <img class="comic-image" src="${this.result.thumbnail.path}.${this.result.thumbnail.extension}">
      </div>
      <div class="comic-issue"># ${this.result.issueNumber}</div>
      <div class="comic-title">${this.result.title}</div>
      <div class="comic-description">${this.result.description}</div>
      <button class="comic-description__button">Read More</button>
    `;
  }
}
