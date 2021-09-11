
import { ISchool } from "./school";

export interface IUserSchools {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    school: ISchool[];

}