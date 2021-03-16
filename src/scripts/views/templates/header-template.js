const HeaderTemplate = {
  _setContent(content) {
    if (content) {
      const headerContent = document.querySelector('#header-content');
      headerContent.innerHTML = content;
    } else {
      console.error('content is not defined');
    }
  },

  hero() {
    const content = `
      <section class="hero">
        <div class="hero-gradient"></div>
        <img
          data-src="./images/heros/hero-image_4.jpg"
          alt="Hero Image"
          class="hero-image lazyload"
        />
        <div class="hero-content container">
          <p class="hero-tagline" tabindex="0">
          Recipe of happiness is great place meets great food,
          </p>
          <h1 class="hero-title" tabindex="0">
            Discover your <span class="primary-text">Oishī</span> food here.
          </h1>
          <form action="#" class="search-form">
              <div class="form-input">
                <input
                  type="text"
                  aria-label="Search input for restaurant or food"
                  placeholder="What are you craving?"
                />
              </div>
              <div class="form-icon">
                <button class="search-button" type="button">
                  <span class="material-icons">search</span>
                </button>
              </div>
          </form>
        </div>
      </section>
    `;

    this._setContent(content);
  },

  breadCrumb(page) {
    if (page) {
      const content = `
        <section id="breadcrumb">
        <div class="container">
          <div class="breadcrumb-header">
            <h2 class="breadcrumb-title">${page}</h2>
          </div>
        </div>
      </section>
      `;
      this._setContent(content);
    } else {
      console.error('page is not defined');
    }
  }
};

export default HeaderTemplate;
