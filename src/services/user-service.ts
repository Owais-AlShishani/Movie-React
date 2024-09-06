import create from "./http-service";

export interface IUser {
    id: number,
    name: string,
}

export default create('/users')