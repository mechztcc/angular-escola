import { ITeacher } from '../interfaces/teacher';
import * as fromTeacherActions from './teachers.actions';


export const initialState: ITeacher[] = [];


export function reducer(state = initialState, action: fromTeacherActions.TeacherAction) {
    switch (action.type) {
        case fromTeacherActions.TeacherActionTypes.TEACHERS_NEW:
            state = state.concat(action.payload.teacher);
            // console.log(state);
            
            return state;
            break;
            
        case fromTeacherActions.TeacherActionTypes.TEACHERS_ALL:
            return state;
            break;
            
        default:
            return state
            break;
    }
}