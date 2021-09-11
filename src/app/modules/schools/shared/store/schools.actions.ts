import { Action } from '@ngrx/store';
import { ISchool } from '../interfaces/school';


export enum SchoolActionTypes {
    SCHOOL_NEW = '[SCHOOL_NEW] Add new school',
}

export class SchoolNew implements Action {
    readonly type = SchoolActionTypes.SCHOOL_NEW;
    constructor(public payload: { school: ISchool }) {}
}


export type SchoolActions = SchoolNew;