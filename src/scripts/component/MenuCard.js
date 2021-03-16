class MenuCard extends HTMLElement {
  constructor() {
    super();
  }

  set menu(menu = null) {
    this._menu = menu;
  }

  _prepareTemplate(menu) {
    const { id, name, likes, resto, picture } = menu;
    const thumbnail = picture || './images/icons/app-icon.png';

    const template = `
      <article class="card menu">
        <img
          class="card-image menu-thumbnail lazyload"
          data-src="${thumbnail}"
          alt="Picture of ${name}"
        />
        <div class="card-body menu-content">
          <h1 class="menu-title">
            <a href="#">${name}</a>
          </h1>
          <div class="menu-info">
            <div class="menu-likes">
              <span id="rating-icon" class="material-icons rating-icon" aria-label="Heart icon for likes">favorite</span>
              <label for="rating-icon" tabindex="0" aria-label="Likes point is ${likes}"> ${likes} pts</label>
            </div>
            <div class="menu-place">
              <span id="place-icon${id}" class="material-icons place-icon" aria-label="Resto icon"> restaurant </span>
              <label for="place-icon${id}" tabindex="0">${resto}</label>
            </div>
          </div>
        </div>
      </article>
    `;

    return template;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._menu) {
      this.innerHTML = this._prepareTemplate(this._menu);
    }
  }
}

customElements.define('menu-card', MenuCard);
