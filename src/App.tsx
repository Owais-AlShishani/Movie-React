import { useEffect, useState } from "react";
import "./App.css";
import apiClient, { CanceledError } from "./services/api-client";

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
    apiClient.get<IUser[]>('/users', { signal: controller.signal })
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
    apiClient.delete(`/users/${user.id}`)// Actuall deleted
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);// return previous users if error happend
      })
  }

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'mosh' };
    setUsers([...users, newUser]);
    apiClient.post('/users', newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers([...originalUsers]);
      })
  }

  const updateUser = (user: IUser) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))
    apiClient.patch('/users/' + user.id, updatedUser)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border text-success" role="status" />}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map(user =>
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button className="btn btn-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </li>)}
      </ul >
    </>
  );
}

export default App;
