class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  _brandLogo() {
    return `
      <div class="brand-logo">
        <button id="drawer-menu">
          <span class="material-icons" aria-label="Burger Menu"> menu </span>
        </button>
        <a class="brand-link" href="/">Oishī</a>
      </div>
    `;
  }

  _navBar() {
    return `
      <nav id="drawer">
        <ul class="nav">
          <li class="nav-item active">
            <a class="nav-link" href="#/">
              <span class="material-icons">
                home
              </span>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/restaurant">
              <span class="material-icons">
                restaurant
              </span>
              Restaurant
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/favorite">
              <span class="material-icons">
                favorite
              </span>
              Favorite
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/UlyaHr"
              target="_blank"
              rel="noreferrer"
              ><span class="material-icons">
              account_circle
              </span>About Us</a
            >
          </li>
        </ul>
      </nav>
    `;
  }

  _menuBar() {
    return `
      <div id="menu-bar">
        <div class="container">
          ${this._brandLogo()}
          ${this._navBar()}
        </div>
      </div>
    `;
  }

  _activateMenu() {
    const navItems = document.getElementsByClassName('nav-item');
    for (let index = 0; index < navItems.length; index += 1) {
      navItems[index].addEventListener('click', () => {
        const current = document.querySelector('.active');
        current.className = current.className.replace(' active', '');
        navItems[index].className += ' active';
      });
    }
  }

  render() {
    return new Promise((resolve) => {
      this.innerHTML = this._menuBar();
      resolve();
    });
  }

  afterRendered() {
    this._activateMenu();
  }

  connectedCallback() {
    this.render().then(() => {
      this.afterRendered();
    });
  }
}

customElements.define('nav-bar', NavBar);
