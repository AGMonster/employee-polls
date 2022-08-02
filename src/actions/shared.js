import { showLoading, hideLoading } from 'react-redux-loading-bar' 
import { recievePolls, newPoll, answerPoll } from "./polls"
import { recieveUsers } from "./users"
import { setAuthedUser } from "./authedUser"
import { getInitialData, savePoll, savePollAnswer, getusers } from "../utils/api"

export function handleSetAuthedUser(authedUser) {
    return (dispatch) => {
        dispatch(showLoading());
        getusers().then((users ) => {
            let user = users[authedUser]
            if(user) {
                dispatch(setAuthedUser(authedUser));
            }
            else {
                throw Error('User Not Found');
            }
        }).then(() => {
            dispatch(handleInitialData());
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function handleInitialData() {
    return (dispatch) => {
        getInitialData().then(({users, polls}) => {
            dispatch(recievePolls(polls))
            dispatch(recieveUsers(users))
        }).then(() => {
            dispatch(hideLoading())
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function handleNewPoll(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        dispatch(showLoading()); 
        let {authedUser} =  getState()
        let pollInfo = { optionOneText, optionTwoText, author : authedUser }
        savePoll(pollInfo).then((poll) => {
            dispatch(newPoll(poll));
        }).then(()=>{
            dispatch(hideLoading());
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function handleAnswerPoll(option, pollId) {
    return (dispatch, getState) => {
        let { authedUser } = getState()
        let answerInfo = { 
            authedUser: authedUser,
            qid: pollId,
            answer: option 
        };
        savePollAnswer(answerInfo).then((res) => {
            dispatch(answerPoll(answerInfo))
        }).catch((error) => {
            console.log(error);
        });
    }
}