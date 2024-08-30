import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios, AxiosError } from "axios";

interface IUser {
  id: number,
  name: string,
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data);
      }
      catch (err) {
        setError((err as AxiosError).message)
      }
    }

    fetchUsers

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
