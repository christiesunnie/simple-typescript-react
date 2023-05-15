import React from 'react';

import { Pizza } from '../types';
// import { useStateDispatch } from './AppState';

import offerStyles from './SpecialOffer.module.css';
// import withAddToCart, { AddToCartProps } from './AddToCart';
import { WithAddToCartProps } from './AddToCart';

// interface Props {
//   pizza: Pizza;
// }

// const SpecialOffer: React.FC<Props> = ({ pizza }) => {
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
//     <div className={offerStyles.container}>
//       <h2>{pizza.name}</h2>
//       <p>{pizza.description}</p>
//       <p>{pizza.price}</p>
//       <button type='button' onClick={handleAddToCartClick}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default SpecialOffer;

// Render the Component using HOC hook
// interface Props extends AddToCartProps {
//   pizza: Pizza;
// }

// const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
//   const handleAddToCartClick = () => {
//     const { id, name, price } = pizza;
//     addToCart({
//       id: id,
//       name: name,
//       price: price,
//     });
//   };
//   return (
//     <div className={offerStyles.container}>
//       <h2>{pizza.name}</h2>
//       <p>{pizza.description}</p>
//       <p>{pizza.price}</p>
//       <button type='button' onClick={handleAddToCartClick}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default withAddToCart(SpecialOffer);

// Render component using Render Props component
interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  // const handleAddToCartClick = () => {
  //   const { id, name, price } = pizza;
  //   addToCart({
  //     id: id,
  //     name: name,
  //     price: price,
  //   });
  // };
  return (
    <div className={offerStyles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type='button'
              onClick={() => {
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                });
              }}>
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
