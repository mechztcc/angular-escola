import { ActionReducerMap } from "@ngrx/store";
import { IClassroom } from "src/app/modules/classrooms/shared/interfaces/classroom";
import { ISchool } from "src/app/modules/schools/shared/interfaces/school";

import * as fromSchoolReducer from '../../modules/schools/shared/store/schools.reducer';
import * as fromClassroomReducer from '../../modules/classrooms/shared/store/classrooms.reducer';

export interface AppState {
    school: ISchool[];
    classroom: IClassroom[];

}

export const appReducers: ActionReducerMap<AppState> = {
    school: fromSchoolReducer.reducer,
    classroom: fromClassroomReducer.reducer
}