import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
    <div>
      {displayMessage && <Alert onClose={() => setDisplayMessage(false)}>My Alert</Alert>}
      <Button onClick={() => setDisplayMessage(true)} color={"primary"}>My Button</Button>
    </div>
  );
}

export default App;
