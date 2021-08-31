import { IUser } from "./user";

export interface IUserLoginResponse {
    token: string;
    user: IUser;

}