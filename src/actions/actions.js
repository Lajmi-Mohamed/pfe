import {SAVE} from "./types"

export const save=(object)=>{
    return{
        type:SAVE,
        payload:object,
    }
}