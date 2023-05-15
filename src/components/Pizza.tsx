import React, { useContext } from 'react';
import pizzaStyles from './Pizza.module.css';
// import { CartItem, useStateDispatch } from './AppState';
// import { useSetState } from './AppState';

import { Pizza } from '../types';
import withAddToCart, { AddToCartProps } from './AddToCart';

interface Props extends AddToCartProps {
  pizza: Pizza;
}

// const PizzaList: React.FC<Props> = ({ pizza }) => {
//   // const setState = useSetState();

//   // const handleAddToCartClick = () => {
//   //   setState((prevState) => {
//   //     const itemExists = prevState.cart.items.find(
//   //       (item) => item.id === pizza.id
//   //     );
//   //     return {
//   //       ...prevState,
//   //         ...prevState.cart,
//   //         items: itemExists
//   //           ? prevState.cart.items.map((item) => {
//   //               if (item.id === pizza.id) {
//   //                 return { ...itemExists, quantity: item.quantity + 1 };
//   //               }
//   //               return item;
//   //             })
//   //           : [
//   //               ...prevState.cart.items,
//   //               {
//   //                 id: pizza.id,
//   //                 name: pizza.name,
//   //                 price: pizza.price,
//   //                 quantity: 1,
//   //               },
//   //             ],
//   //       },
//   //     };
//   //   });
//   // };

//   const dispatch = useStateDispatch();

//   const handleAddToCartClick = () => {
//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: {
//         item: {
//           id: pizza.id,
//           name: pizza.name,
//           price: pizza.price,
//         },
//       },
//     });
//   };

//   return (
//     <li className={pizzaStyles.container}>
//       <h2>{pizza.name}</h2>
//       <p>{pizza.description}</p>
//       <p>{pizza.price}</p>
//       <button type='button' onClick={handleAddToCartClick}>
//         Add to Cart
//       </button>
//     </li>
//   );
// };

// export default PizzaList;

const PizzaList: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    const { id, name, price } = pizza;
    addToCart({ id: id, name: name, price: price });
  };

  return (
    <li className={pizzaStyles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type='button' onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaList);
