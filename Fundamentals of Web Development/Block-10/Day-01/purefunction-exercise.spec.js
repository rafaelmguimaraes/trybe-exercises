/* 
Pure Function Exercise
For this exercise the test have already been written.
You task is to write the setPrice and addToCart function to pass all four tests.
 */

 // setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // TODO: implement
  const newItem = Object.assign({}, item);
  newItem['price'] = price;
  return newItem;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  // TODO: implement
  const newCart = cart.slice();
  newCart.push(item);
  return newCart;
};

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Violator',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});