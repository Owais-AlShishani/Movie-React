import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";

interface IUser {
  id: number,
  name: string,
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/susers')
      .then(result => setUsers(result.data))
      .catch(err => setError(err.message));
  }, [])
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul >
    </>
  );
}

export default App;
