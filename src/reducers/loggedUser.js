import { SET_LOGGED_USER, UPDATE_LOGGED_USER } from "../actions/loggedUser";

export function loggedUser (state = null, action)
{
    switch (action.type){

        case SET_LOGGED_USER:
            return action.user

        case UPDATE_LOGGED_USER:

            if(action.option !== null)
            {
                return  {...state, answers: { ...state.answers ,[action.qid]: action.option}}   
            }
            else 
            {
                return  {...state, questions: state.questions.concat(action.qid)}   
            }

            
        default:
            return state
    }


}