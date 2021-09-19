import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state={}, action){

    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {...state, ...action.questions}

        case ADD_QUESTION:
            const {question} = action
            return {...state, 
                [question.id] : question,
            
            }   // [action.question.id] : action.question

        case ANSWER_QUESTION:

            console.log(action.answer, state[action.qid][action.answer]);

            return {...state,
                [action.qid]: {...state[action.qid], 
                    [action.answer]: {...state[action.answer], 
                       votes: state[action.qid][action.answer].votes.concat([action.author]) }
                }
            }

        default: 
            return state
    }
}