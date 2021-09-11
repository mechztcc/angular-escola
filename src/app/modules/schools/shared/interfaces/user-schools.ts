import { Classroom } from "src/app/modules/classrooms/shared/interfaces/classroom";
import { ITeacher } from "src/app/modules/teachers/shared/interfaces/teacher";
import { ISchool } from "./school";

export interface IUserSchools {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    school: ISchool[];

}