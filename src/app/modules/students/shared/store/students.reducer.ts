import { Student } from "../interfaces/student";
import * as fromStudentActions from './students.actions';


export const initialState: Student[] = [];


export function reducer(state = initialState, action: fromStudentActions.StudentActions) {
    switch (action.type) {
        case fromStudentActions.StudentActionsTypes.STUDENT_NEW:
            state = [...state, action.payload.student]
            return state;
            break;
            
        case fromStudentActions.StudentActionsTypes.STUDENT_ALL:
            return state;
            break;

        default:
            return state
            break;
    }
}