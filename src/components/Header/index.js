import { Component } from "react";

import { FaShopify } from "react-icons/fa";

import { HeaderComponent } from "./styledComponent";

class Header extends Component {
  state = {};

  render() {
    return (
      <HeaderComponent>
        <div>
          <a href="https://www.shopify.com/">
            <FaShopify />
            <h1>Shopify</h1>
          </a>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;
