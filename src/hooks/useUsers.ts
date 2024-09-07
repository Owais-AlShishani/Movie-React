import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { IUser } from "../services/user-service";

// custom hooks used for sharing the functionality between components
// like maybe the users will be used in another component as a lookup 
const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { request, cancel } = userService.getAll<IUser>();
        request.then((res) => {
            setIsLoading(false);
            setUsers(res.data)
        })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false);
            });
        return cancel();
    }, []);

    return { users, error, isLoading, setUsers, setError, setIsLoading }// return Object
}

export default useUsers