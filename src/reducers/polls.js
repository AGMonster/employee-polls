import {  RECIEVE_POLLS } from "../actions/polls";
import { NEW_POLL, ANSWER_POLL } from "../actions/polls";

const polls = (state = {}, action) => {
    switch (action.type)
    {
        case RECIEVE_POLLS:
            return action.polls;
        case NEW_POLL:
            return {...state, [action.poll.id]: action.poll};
        case ANSWER_POLL:
            let {qid, authedUser, answer} = action.answerInfo;
            return {
                ...state, 
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                 }
                };
        default :
            return state
    }
}

export default polls;