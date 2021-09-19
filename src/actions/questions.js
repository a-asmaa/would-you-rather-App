import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../data"
import { setLoggedUser, updateLoggedUser } from "./loggedUser"
import { handleGetUsers } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


function receiveQuestions(questions){

    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}

function newQuestion(question){

    return {
        type: ADD_QUESTION,
        question
    }

}


export function AddQuestion({ optionOneText, optionTwoText }){

    return (dispatch, getState)=> {

        console.log(optionOneText, optionTwoText);
        const { loggedUser } = getState();
        return _saveQuestion({ optionOneText, optionTwoText, author: loggedUser.id }).then((question)=> {
            
            dispatch(newQuestion(question))
            dispatch(handleGetUsers())
           // dispatch(updateLoggedUser(question.id, null))


        }).catch(()=> {alert("Error occured, try again")})
    }
}

export function handleQuestions(){

    return (dispatch)=> {

        return _getQuestions().then((questions)=> {

            dispatch(receiveQuestions(questions))
        }).catch(()=> {alert("Error occured, try again")})
    }
}


function addAnswerToQuestion(qid, answer, author){

    return {
        type: ANSWER_QUESTION,
        qid,
        answer,
        author
    }

}

export function handleAnswerQuestion({ qid, answer }){

    return (dispatch, getState)=> {
        const { loggedUser } = getState();
        return _saveQuestionAnswer({ authedUser: loggedUser.id, qid, answer })
        .then(()=> {
            console.log(answer);
            dispatch(addAnswerToQuestion(qid ,answer, loggedUser.id))
            dispatch(updateLoggedUser(qid, answer))
            dispatch(handleGetUsers())

          //  dispatch(setLoggedUser(users[loggedUser.id]))
         //   dispatch(handleQuestions())
        })
    }
}