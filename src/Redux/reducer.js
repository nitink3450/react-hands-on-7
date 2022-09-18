import { ADD, DELETE, EDIT } from "./action";

const initialState ={
    students :[]
}

export const main_Reducer = (state=initialState,action) =>{
    switch (action.type) {
        case ADD:return{...state,
            students: state.students.push(action.payload.data)
        }
        case EDIT:
            const edituserIndex = state.students.indexOf(
                (student)=> student.id === action.payload.id
            );
            state.students[edituserIndex] = action.payload.data
            
        return state
        // case DELETE:
        //     const deluserIndex = state.students.indexOf(
        //         (student)=> student.id === action.payload.id
        //     );
        //     state.students[deluserIndex].filter((student)=> student != deluserIndex) = action.payload.data
        //     return state
        
        default:return state
    }
}