import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Grozny", "New York", "Paris", "Amman"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
