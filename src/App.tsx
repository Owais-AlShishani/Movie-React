import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const connect = () => console.log('Connected')
  const disconnect = () => console.log('Disconnected')
  useEffect(() => {
    connect();

    return () => disconnect();

  }, [])
  return (
    <>

    </>
  );
}

export default App;
