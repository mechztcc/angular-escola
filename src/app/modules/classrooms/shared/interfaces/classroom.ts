import { Student } from "src/app/modules/students/shared/interfaces/student";

export interface IClassroom {
    id?: number;
    name: string;
    created_at?: string;
    updated_at?: string;
    students?: Student[];
}