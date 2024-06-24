(() => {
  if (customElements.get('product-media-slider')) {
    return;
  }

  class ProductMediaSlider extends HTMLElement {
    constructor() {
      super();
      this.slider = null;
      this.options = {
        waitForTransition: false,
        perPage: 1,
        pagination: true,
        gap: '2rem',
        arrows: false
      };
    }

    connectedCallback() {
      this.initSlider();
    }

    initSlider() {
      if (!this.querySelector('.js-slider')) return;

      this.slider = new Splide(
        this.querySelector('.js-slider'),
        this.options
      ).mount();
    }
  }

  customElements.define('product-media-slider', ProductMediaSlider);
})();
