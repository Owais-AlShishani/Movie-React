import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Grozny", "New York", "Paris", "Amman"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
