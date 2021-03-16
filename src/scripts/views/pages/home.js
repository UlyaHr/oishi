import '../../component/RestaurantCard';
import '../../component/MenuCard';
import dummy from '../../data/DATA.json';
import Restaurant from '../../data/restaurant';
import loader from '../../helper/loader-helper';
import handleError from '../../helper/error-helper';
import HeaderTemplate from '../templates/header-template';
import { renderList } from '../templates/restaurant-template';

const HomePage = {
  async render() {
    HeaderTemplate.hero();

    return `
      <section id="explore">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title" tabindex="0">Top Restaurant</h2>
          </div>
          <div class="restaurants"></div>
        </div>
      </section>

      <section id="popular-menus">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title" tabindex="0">Oishī Menus</h2>
          </div>
          <div class="menus"></div>
        </div>
      </section>
    `;
  },

  async afterRendered() {
    await this._renderRecommendedRestaurant();
    this._renderPopularMenus();
  },

  async _renderRecommendedRestaurant() {
    const elementId = '#explore';
    try {
      const restaurant = new Restaurant();
      loader.start(elementId);
      const restaurants = await restaurant.recommended();
      loader.stop();
      renderList(elementId, restaurants);
    } catch (error) {
      loader.stop();
      handleError({
        error,
        elementId,
        functionName: '_renderRecommendedRestaurant'
      });
    }
  },

  _renderPopularMenus() {
    const { popularMenus } = dummy;
    const popularMenusElement = document.querySelector('.menus');
    popularMenus.forEach((menu) => {
      const menuCard = document.createElement('menu-card');
      menuCard.menu = menu;
      popularMenusElement.appendChild(menuCard);
    });
  }
};

export default HomePage;
