import React from 'react';
import pizzas from '../data/pizzas.json';
import appStyles from './App.module.css';

import PizzaList from './Pizza';
import Cart from './Cart';
import AppStateProvider from './AppState';

const App = () => {
  const renderedPizzaList = pizzas.map((pizza) => {
    return <PizzaList key={pizza.id} pizza={pizza} />;
  });

  return (
    <AppStateProvider>
      <div className={appStyles.container}>
        <div className={appStyles.header}>
          <div className={appStyles.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>{renderedPizzaList}</ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
