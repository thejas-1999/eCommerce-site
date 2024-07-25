export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //calculate shipping price if order > 1000 = 0 else 100
  state.shippingPrice = addDecimal(state.itemsPrice > 1000 ? 0 : 100);
  //calculate tax price (15%)
  state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));

  //calculate total price

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
