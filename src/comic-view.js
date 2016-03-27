'use strict';

export default class ComicView {
  constructor(result) {
    this.result = result;
    this.element = document.createElement(`li`);

    this.renderComicView();
    this.triggerModal();
  }

  renderComicView() {
    this.element.classList.add(`comic-item`);
    this.element.innerHTML = `
      <div class="comic-image--container">
        <img class="comic-image" src="${this.result.thumbnail.path}.${this.result.thumbnail.extension}">
      </div>
      <div class="comic-issue"># ${this.result.issueNumber}</div>
      <div class="comic-title">${this.result.title}</div>

      <div id="modal" class="modal--active modal">
        <div class="modal-container">
          <div class="modal__close">
            <p class="modal__close--button">x</p>
          </div>
          <div class="modal__content">
            <p class="modal__content">${this.result.description}</p>
          </div>
        </div>
      </div>

      <button class="comic-description__button">Read More</button>
    `;
  }

  triggerModal() {
    const button = this.element.querySelector(`button`);
    const modal = this.element.querySelector(`#modal`);
    button.addEventListener(`click`, () => {
      modal.classList.toggle(`modal`);
    });
  }
}
