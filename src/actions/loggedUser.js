export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const UPDATE_LOGGED_USER = 'UPDATE_LOGGED_USER'


export function setLoggedUser(user){

    return {
        type: SET_LOGGED_USER,
        user
    }

}


export function updateLoggedUser (qid, option){
        return{
            type: UPDATE_LOGGED_USER,
            qid,
            option

        }
}