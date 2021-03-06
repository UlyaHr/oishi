import restaurantApi from '../globals/api';

class RestaurantCard extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant = null) {
    this._restaurant = restaurant;
  }

  _prepareTemplate(restaurant) {
    const { id, name, city, pictureId, rating, description } = restaurant;
    const setRating = rating.toFixed(1);
    const starPercentage = `${(setRating / 5) * 100}%`;
    const defaultThumbnail = './images/icons/app-icon.png';
    const thumbnail = pictureId || defaultThumbnail;
    const restaurantImage = `${restaurantApi.smallPicture}${thumbnail}`;

    const template = `
      <article class="card restaurant">
        <p class="restaurant-place" tabindex="0" aria-label="Restaurant at ${city}"><span class="material-icons place-icon"> place </span>${city}</p>
        <img
          class="card-image restaurant-thumbnail lazyload"
          data-src="${restaurantImage}"
          data-sizes="auto"
          alt="${name} Restaurant"
        />
        <div class="card-body restaurant-content">
          <h1 class="restaurant-title">
            <a href="#/restaurant/${id}">${name}</a>
          </h1>
          <div class="restaurant-rating">
            <div class="stars-outer">
              <div
                class="stars-inner"
                aria-label="Star icon for restaurant rating"
                style="width: ${starPercentage}"
              >
              </div>
            </div>
            <label
              for="rating-icon${id}"
              tabindex="0"
              aria-label="Restaurant rating point is ${setRating}"
            >
            ( ${setRating} )
            </label>
          </div>
          <p class="restaurant-description card-text">
            ${description}
          </p>
        </div>
      </article>
    `;

    return template;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._restaurant) {
      this.innerHTML = this._prepareTemplate(this._restaurant);
    }
  }
}

customElements.define('restaurant-card', RestaurantCard);
