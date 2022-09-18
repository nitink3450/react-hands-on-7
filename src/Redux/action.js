import { ADD_STUDENT, DEL_STUDENT, EDIT_STUDENT } from "./constant"

export const ADD = () =>{
    return{
        type:ADD_STUDENT
    }
}

export const EDIT = () =>{
    return{
        type:EDIT_STUDENT
    }
}

export const DELETE = () =>{
    return{
        type:DEL_STUDENT
    }
}