// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

// Thunk Action: Simulate async loading products
export const loadProducts = () => {
  return (dispatch) => {
    // Simulate async operation
    setTimeout(() => {
      const products = [
        {
          id: '1',
          name: 'Example Product 1',
          price: 9.99,
          description: 'This is an example product.',
          catalogs: ['catalog1', 'catalog2'],
        },
        {
          id: '2',
          name: 'Example Product 2',
          price: 19.99,
          description: 'This is another example product.',
          catalogs: ['catalog2', 'catalog3'],
        },
        {
          id: '3',
          name: 'Example Product 3',
          price: 29.99,
          description: 'This is yet another product.',
          catalogs: ['catalog1'],
        },
      ];
      dispatch({ type: SET_PRODUCTS, payload: products });
    }, 500);
  };
};

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const addProduct = (product) => {
  return (dispatch) => {
    // Simulate async save
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, payload: product });
    }, 300);
  };
};
