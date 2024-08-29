import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";

interface IUser {
  id: number,
  name: string,
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .then(result => setUsers(result.data))

  }, [])
  return (
    <>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul >
    </>
  );
}

export default App;
