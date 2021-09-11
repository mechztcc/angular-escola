import { Classroom } from "src/app/modules/classrooms/shared/interfaces/classroom";
import { ITeacher } from "src/app/modules/teachers/shared/interfaces/teacher";

export interface ISchool {
    id?: number;
    name: string;
    created_at?: string;
    updated_at?: string;
    classrooms?: Classroom[];
    teachers?: ITeacher[];
}