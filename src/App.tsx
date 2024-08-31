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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setUsers(res.data)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (user: IUser) => {

    const originalUsers = [...users];

    setUsers(users.filter(u => u.id !== user.id));//Deleted in UI
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)// Actuall deleted
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);// return previous users if error happend
      })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border text-success" role="status" />}
      <ul className="list-group">
        {users.map(user =>
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </li>)}
      </ul >
    </>
  );
}

export default App;
