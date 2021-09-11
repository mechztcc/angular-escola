import { IClassroom } from '../interfaces/classroom';
import * as fromClassroomActions from './classrooms.actions';


export const initialState: IClassroom[] = [];


export function reducer(state = initialState, action: fromClassroomActions.ClassroomActions) {
    switch (action.type) {
        case fromClassroomActions.ClassroomActionTypes.CLASSROOM_NEW:
            state = [...state, action.payload.classroom]
            return state;
            break;
            
        case fromClassroomActions.ClassroomActionTypes.CLASSROOM_ALL:
            return state;
            break;
            
        default:
            return state
            break;
    }
}