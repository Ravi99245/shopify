import { Component } from "react";

class GlobeComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <img
          class="ssr-globe-container absolute md:left-14 w-full aspect-square md:scale-[1.3] lg:scale-110 xl:scale-100 transition-opacity duration-500 max-w-3xl xl:max-w-sm"
          alt="Shopify Globe"
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2"
          sizes="100vw"
        />
      </div>
    );
  }
}

export default GlobeComponent;
