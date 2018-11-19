import React from 'react';
import Header from './components/Header';
import './styles/styles.scss';
import ProductFilter from './components/ProductFilter';
import ProductsList from './components/Products';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <ProductFilter />
        <ProductsList />
      </main>
    );
  }
}

export default App;
