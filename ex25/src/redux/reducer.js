import { ADD_TO_CART, REMOVE_FROM_CART, ADD_PRODUCT, SET_PRODUCTS } from './actions';

const initialState = {
  products: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case ADD_TO_CART: {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
