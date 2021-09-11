import { IClassroom } from "src/app/modules/classrooms/shared/interfaces/classroom";

export interface IClassroomsOfSchool {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    classrooms: IClassroom[];
}