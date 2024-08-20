import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/Index";
import { BsCalendar2DateFill } from "react-icons/bs";
import Like from "./components/Like";


function App() {
  const items = ['New York', 'San Francisco', 'Los Angeles']

  return (
    <>
      <Button onClick={() => { }}>My Button</Button>
      <Like onClick={() => console.log('Clicked')} />
    </>
  );
}

export default App;
