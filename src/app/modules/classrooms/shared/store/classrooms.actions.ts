import { Action } from '@ngrx/store';
import { IClassroom } from '../interfaces/classroom';


export enum ClassroomActionTypes {
    CLASSROOM_NEW = '[CLASSROOM_NEW] Add new classroom',
    CLASSROOM_ALL = '[CLASSROOM_ALL] List all classrooms',
}

export class ClassroomNew implements Action {
    readonly type = ClassroomActionTypes.CLASSROOM_NEW;
    constructor(public payload: { classroom: IClassroom }) {}
}

export class ClassroomAll implements Action {
    readonly type = ClassroomActionTypes.CLASSROOM_ALL;
}


export type ClassroomActions = ClassroomNew | ClassroomAll;