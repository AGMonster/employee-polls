import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, polls]) => ({
      users,
      polls,
    }))
  }

  export function getusers(){
    return _getUsers();
  }
  
  export function savePollAnswer (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function savePoll (info) {
    return _saveQuestion(info)
  }