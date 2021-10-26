import React from "react";
import url from "../../url";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={`${url}${imageUrl}`} alt="item" />
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
