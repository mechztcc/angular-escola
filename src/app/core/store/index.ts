import { ActionReducerMap } from "@ngrx/store";
import { IClassroom } from "src/app/modules/classrooms/shared/interfaces/classroom";
import { ISchool } from "src/app/modules/schools/shared/interfaces/school";

import * as fromSchoolReducer from '../../modules/schools/shared/store/schools.reducer';
import * as fromClassroomReducer from '../../modules/classrooms/shared/store/classrooms.reducer';
import * as fromStudentReducer from '../../modules/students/shared/store/students.reducer';
import { Student } from "src/app/modules/students/shared/interfaces/student";

export interface AppState {
    school: ISchool[];
    classroom: IClassroom[];
    student: Student[];

}

export const appReducers: ActionReducerMap<AppState> = {
    school: fromSchoolReducer.reducer,
    classroom: fromClassroomReducer.reducer,
    student: fromStudentReducer.reducer
}