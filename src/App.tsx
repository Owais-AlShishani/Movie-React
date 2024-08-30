import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios, AxiosError, CanceledError } from "axios";

interface IUser {
  id: number,
  name: string,
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });
    return () => controller.abort();
  }, []);
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
