import { Action } from '@ngrx/store';
import { ITeacher } from '../interfaces/teacher';


export enum TeacherActionTypes {
    TEACHERS_NEW = '[TEACHERS_NEW] Add new teacher',
    TEACHERS_ALL = '[TEACHERS_ALL] List all teachers',
}

export class TeacherNew implements Action {
    readonly type = TeacherActionTypes.TEACHERS_NEW;
    constructor(public payload: { teacher: ITeacher }) {}
}

export class TeacherAll implements Action {
    readonly type = TeacherActionTypes.TEACHERS_ALL;
}


export type TeacherAction = TeacherNew | TeacherAll;