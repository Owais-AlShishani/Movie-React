import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/Index";
import { BsCalendar2DateFill } from "react-icons/bs";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";


function App() {
  // const items = ['New York', 'San Francisco', 'Los Angeles']
  //const [cartItems, setCartItems] = useState(['product1', 'product2']);
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'john'
  //   }
  // });
  // const [pizza, setPizza] = useState({
  //   name: 'Veggie',
  //   toppings: ['Mushroom']
  // });

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'product1', quantity: 1 },
      { id: 2, title: 'product2', quantity: 1 },
      { id: 3, title: 'product3', quantity: 1 }
    ]
  })


  const handleClick = () => {
    // setGame({ ...game, player: { ...game.player, name: 'Bob' } })
    // console.log('game', game)
    //setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] })

    //if the user choosed id nmuber 2 in items inside cart object it should update quantity to 2 could you do that for me?
    setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item) })

  }

  return (
    <>
      {/* {console.log('Log', game)} */}
      {/* <NavBar count={cartItems.length} />*/}
      {/* <Cart cartItems={cartItems} onClear={handleClick} /> */}
      <Form />
    </>
  );
}

export default App;
