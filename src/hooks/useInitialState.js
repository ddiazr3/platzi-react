import { useState } from 'react';
import InitialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  //lo que hace aca es que el initial state tiene una constante llamada cart y ...state sostiene lo que ya tiene y ...state.cart sostiene lo que tiene mas lo nuevo
  // no se usa el push como normalmente se agrega a un array
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  //eliminamos un producto del carrito siempre persistiendo lo que ya tiene
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer:[...state.buyer, payload]
    })
  }

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder
  };
};

export default useInitialState;
