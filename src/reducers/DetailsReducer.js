import {SAVE} from "../actions/types"



const DetailsReducer =(state =[] ,action)=>{
    switch(action.type){
        
        case SAVE:
            return action.payload
           
        default :
        return state
    }
    
    }
    export default DetailsReducer