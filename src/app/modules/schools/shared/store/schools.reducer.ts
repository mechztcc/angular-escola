import { ISchool } from '../interfaces/school';
import * as fromSchoolActions from './schools.actions';


export const initialState: ISchool[] = [];


export function reducer(state = initialState, action: fromSchoolActions.SchoolActions) {
    switch (action.type) {
        case fromSchoolActions.SchoolActionTypes.SCHOOL_NEW:
            state = state.concat(action.payload.school);
            return state;
            break;
            
        case fromSchoolActions.SchoolActionTypes.SCHOOL_ALL:
            return state;
            break;


        default:
            return state
            break;
    }
}