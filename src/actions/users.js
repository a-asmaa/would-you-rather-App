import { _getUsers } from "../data"

export const RECEIVE_USERS = 'RECEIVE_USERS'



function receiveUsers (users){

    return {
        type: RECEIVE_USERS,
        users
    }
}


export function handleGetUsers(){

    return(dispatch) => {
     
       return _getUsers().then((users)=> {
            dispatch(receiveUsers(users))
        })

    }
}