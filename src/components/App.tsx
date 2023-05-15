import React, { useEffect } from 'react';
import pizzas from '../data/pizzas.json';
import appStyles from './App.module.css';

import PizzaList from './Pizza';
import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () => {
  const specialOfferPizza = pizzas[2];

  const renderedPizzaList = pizzas.map((pizza) => {
    return <PizzaList key={pizza.id} pizza={pizza} />;
  });

  // An example to use useEffect over the Life Cycle methods
  // useEffect(() => {
  //   const listener = () => {
  //     alert('Hello');
  //   };

  //   document.addEventListener('mousedown', listener);

  //   return () => {
  //     document.removeEventListener('mousedown', listener);
  //   }
  // }, []);

  return (
    <AppStateProvider>
      <div className={appStyles.container}>
        <div className={appStyles.header}>
          <div className={appStyles.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={appStyles.pizzaList}>{renderedPizzaList}</ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
