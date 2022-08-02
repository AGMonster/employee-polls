export const RECIEVE_POLLS = 'RECIEVE_POLLS'
export const NEW_POLL = 'NEW_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'

export function recievePolls(polls) {
    return {
        type: RECIEVE_POLLS,
        polls
    }
}

export function newPoll(poll) {
    return {
        type: NEW_POLL,
        poll
    }
}

export function answerPoll(answerInfo) {
    return {
        type: ANSWER_POLL,
        answerInfo
    }
}
