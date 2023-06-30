import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--bTis6-VnqG3GeArMeksu_6B2joyuAczuA&usqp=CAU',
      name: 'BLACK Boaster Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1499
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEV9MOk6GB0ZgP25Khz06ueesx-DqxVQGE9A&usqp=CAU',
      name: 'Jadran Bag Black',
      category: 'Bags',
      seller: 'Bag pvt Siyana',
      price: 2399
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtAlWoFumG4lNP-053LxG3ic87CRkonxOiw&usqp=CAU',
      name: 'Fomme Earpods',
      category: 'Earpodes',
      seller: 'Kolkata Earpodes',
      price: 500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRoupEtfMR9WGZ6tQKU3phGiB36ZiuC7N2Q&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Cannon LTD',
      price: 3500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Alibo smart Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89M3g8W5_0xvy18d4ARG2nfP6grtNse9p1Q&usqp=CAU',
      name: 'Iphone Ind pvt  ',
      category: 'Phones',
      seller: 'Noida Ltd',
      price: 55000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;

