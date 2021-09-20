import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';

function App() {
  const{products} = data;
  const[cartItems, setCartItems] =useState([])

  return (
    <div className="App mx-4">
      <Header />
      <div className="content flex justify-evenly gap-12">
        <Main products={products} className=""/>
        <Cart cartItems={cartItems} className="w-1/4"/>
      </div>
    </div>
  );
}

export default App;
