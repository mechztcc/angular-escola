import { Action } from '@ngrx/store';
import { ISchool } from '../interfaces/school';


export enum SchoolActionTypes {
    SCHOOL_NEW = '[SCHOOL_NEW] Add new school',
    SCHOOL_ALL = '[SCHOOL_ALL] List all schools',
}

export class SchoolNew implements Action {
    readonly type = SchoolActionTypes.SCHOOL_NEW;
    constructor(public payload: { school: ISchool }) {}
}

export class SchoolAll implements Action {
    readonly type = SchoolActionTypes.SCHOOL_ALL;
}


export type SchoolActions = SchoolNew | SchoolAll;