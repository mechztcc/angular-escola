import { ActionReducerMap } from "@ngrx/store";
import { ISchool } from "src/app/modules/schools/shared/interfaces/school";

import * as fromSchoolReducer from '../../modules/schools/shared/store/schools.reducer';

export interface AppState {
    school: ISchool[];

}

export const appReducers: ActionReducerMap<AppState> = {
    school: fromSchoolReducer.reducer,
}