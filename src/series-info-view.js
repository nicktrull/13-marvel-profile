'use strict';

export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.renderImage();
    this.renderTitle();
    this.renderYears();
    this.renderCreators();
  }

  renderImage() {
    this.element.querySelector(`.profile-pic`).innerHTML = `
      <img class="profile-pic--image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt=""/>
    `;
  }

  renderTitle() {
    this.element.querySelector(`.profile-title`).innerText = this.data.title;
  }

  renderYears() {
    this.element.querySelector(`.profile-years`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  renderCreators() {
    this.data.creators.items.forEach((creator) => {
      const newListItem = document.createElement(`li`);
      newListItem.innerText = creator.name;
      this.element.querySelector(`.creator-list`).appendChild(newListItem);
    });
  }
}
