import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/Index";
import { BsCalendar2DateFill } from "react-icons/bs";


function App() {
  // const [displayMessage, setDisplayMessage] = useState(false);
  const items = ['New York', 'San Francisco', 'Los Angeles']

  return (
    <>
      {/* {displayMessage && <Alert onClose={() => setDisplayMessage(false)}>My Alert</Alert>}
      <Button onClick={() => setDisplayMessage(true)} color={"primary"}>My Button</Button> */}
      {/* <ListGroup heading="Miami" items={items} onSelectItem={() => { }} /> */}
      <BsCalendar2DateFill color="blue" size={40} />
    </>
  );
}

export default App;
