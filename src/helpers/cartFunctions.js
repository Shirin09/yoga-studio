function getCountProductsInCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

function calcSubPrice(product) {
  return product.count * product.item.price;
}

function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}

function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.products.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}

export {
  getCountProductsInCart,
  checkProductInCart,
  calcTotalPrice,
  calcSubPrice,
};
