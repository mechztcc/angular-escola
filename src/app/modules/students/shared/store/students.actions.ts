import { Action } from '@ngrx/store';
import { Student } from '../interfaces/student';

export enum StudentActionsTypes {
    STUDENT_NEW = '[STUDENT_NEW] Add new Student',
    STUDENT_ALL = '[STUDENT_ALL] List all Students',
}

export class StudentNew implements Action {
    readonly type = StudentActionsTypes.STUDENT_NEW;
    constructor(public payload: { student: Student }) {}
}

export class StudentAll implements Action {
    readonly type = StudentActionsTypes.STUDENT_ALL;
}

export type StudentActions = StudentNew | StudentAll;