import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      {/* <Alert>Hello World</Alert> */}
      <Button onClick={() => console.log('Clicked')} color={"primary"}>My Button</Button>
    </div>
  );
}

export default App;
