import { RECIEVE_USERS } from "../actions/users";
import { NEW_POLL, ANSWER_POLL } from "../actions/polls";

const users = (state = {}, action) => {
    switch (action.type)
    {
        case RECIEVE_USERS:
            return action.users;
        case NEW_POLL:
            let {author,id} = action.poll;        
            return  {
                ...state,
                [author]: {
                  ...state[author],
                  questions: state[author].questions.concat([id])
                }};
        case ANSWER_POLL:
            let {qid, authedUser, answer} = action.answerInfo;
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
              };
        default :
            return state
    }
}

export default users;